import React, { Component } from 'react'
import{BrowserRouter,Route} from 'react-router-dom'
import Products from './Products'
import Header from './Header'
import Jeans from './Jeans'
import Beautifuljscket from './Beautifuljscket'
import Tie from './Tie'
import Stylishhat from './Stylishhat'



const homepage=()=>{
    return <div>This Is my beautiful landing page</div>
}

const Home =()=>{
    return (
        <div className="ui">

                <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={homepage}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/products/3" component={Jeans}/>
                    <Route path="/products/2" component={Beautifuljscket}/>
                    <Route path="/products/4" component={Tie}/>
                    <Route path="/products/1" component={Stylishhat}/>

                </div>
                 
                 </BrowserRouter>
            </div>
    )
}

export default Home;
