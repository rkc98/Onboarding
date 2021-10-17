import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Hiring from '../pages/Hiring';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Onboarding from '../pages/Onboarding';
import Otp from '../pages/Otp';
import Scanner from '../pages/Scanner';
import ShopHome from '../pages/ShopHome';


const Navigation = () => {
    return (
        <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/hiring' component={Hiring} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/blog' component={Blog} />
        <Route path='/scanner' component={Scanner} />
        <Route path='/shophome' component={ShopHome} />

        <Route path='/onboarding' component={Onboarding} />
        
       
        <Route path='/otp' component={Otp} />
        <Route path='/login' component={Login} /> 
      </Switch>
    </Router>  
        </div>
    )
}

export default Navigation
