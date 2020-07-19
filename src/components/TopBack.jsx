import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Top = () => {

    const [data, setData] = useState([]);
    const [search,setSearch] = useState("");
     
    useEffect(()=> {
        const fetchData = async () => {
            const results = await axios ("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "gPuAjcb9YRiv5xfRKA5to76jdF7toMe5",
                    limit:50
                }
         });
            console.log(results);
            setData(results.data.data) ;
        };

        fetchData();

    } , []);

const renderGifs = () => {
    return data.map(el => {
        return (
            <div key={el.id} className="gif">
                <img src={el.images.fixed_height.url} alt="gif"/>
            </div>
        )
    }
    )
};

    const handleSearchChange = event => {
        setSearch(event.target.value)

    };

    const handleSubmit = async event => {
        event.preventDefault();
            const results = await axios("https://api.giphy.com/v1/gifs/search",
            {
                params: {
                    api_key: "gPuAjcb9YRiv5xfRKA5to76jdF7toMe5",
                    q: search,
                    limit:50
                }
            });
            setData(results.data.data) ;
    };

    return (
    <div className=" m-2">
        <form className="form-b form-inline justify-content-center m-lg-5">
            <input value={search} onChange={handleSearchChange} type="text" placeholder="Gif Search" className="form-control"/>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary mx-2"> 
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
        <div className="container gifs">{renderGifs()}</div>
    </div>

    ) 
}

export default Top;