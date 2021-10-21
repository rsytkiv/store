import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Cart from '../Cart/Cart';
import Store from '../Store/Store';
import './Skeleton.css';

function Skeleton() {
    return (
        <div>
            <Router>
                <ul className='navbar'>
                    <li><Link to='/store'>Store</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/cart'>
                        <Cart />
                    </Route>
                    <Route exact path='/store'>
                        <Store />
                    </Route>
                    <Redirect to='/store'/>
                </Switch>
            </Router>
        </div>
    )
}

export default Skeleton
