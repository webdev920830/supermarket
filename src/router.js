import React from 'react';
import Home from './pages/client/home'
import Buy from './pages/client/buy'
import Rent from './pages/client/rent'
import Aboutus from './pages/client/aboutus'
import Careers from './pages/client/careers'
import Contactus from './pages/client/contactus'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Routers(){
    return(
        <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route  path='/buy' component={Buy} />
            <Route  path='/rent' component={Rent} />
            <Route  path='/aboutus' component={Aboutus} />
            <Route  path='/careers' component={Careers} />
            <Route  path='/contactus' component={Contactus} />
        </React.Fragment>
    )
    
}

export default Routers