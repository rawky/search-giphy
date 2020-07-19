import React from 'react';
import Giphy from './components/Giphy';
import Top from './components/TopBack';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div >
                <nav className="top-g">
                    <ul>
                        <li>
                            <Link to="/TopBack">Top Gifs</Link>
                        </li>
                    </ul>

                </nav>
             
            </div>
            <Switch>
            <Route path="/" exact component={Giphy} />
            <Route path="/TopBack" component={Top} />
            </Switch>
            
        </Router>
        
    );
    
};

export default App;