import faker from 'faker'
import React, { Component } from 'react';
// const Cardimg=()=>{
//     return (
//     <img alt="avatar" src={faker.image.image()}></img>
//     );
// }

class Cardimg extends Component{
    render(){
        return(
            <img alt="avatar" src={faker.image.image()}></img>
        )
    }
}

export default Cardimg;