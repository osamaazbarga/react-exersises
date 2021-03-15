import Cardimg from './cardimg'
import Cardtext from './text'
import Cardlink from './cardslink'
import './cards.css'
import React, { Component } from 'react';
// const Cardfunc=(text)=>{
//     return (
//     <div className="container">
//         <Cardimg/>
//         <Cardtext/>
//         <Cardlink linktext={text.linktext1}/>
//         <Cardlink linktext={text.linktext2}/>

//     </div>
//     );
// }
class Cardsfunc extends Component{
    render(){
        return (
        <div className="container">
            <Cardimg/>
            <Cardtext/>
            <Cardlink linktext={this.props.linktext1}/>
            <Cardlink linktext={this.props.linktext2}/>

        </div> 
        )
    }
}



export default Cardsfunc;