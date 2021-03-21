import React, { Component } from 'react'

class Custombtn extends Component{
    constructor(props){
        super(props)
        this.state={color:this.props.color}

    }

    onClick=(e)=>{
        this.props.onClick(this.state.color)
    }
    render(){
        const mystyle={
            background:this.props.color,
        }
        return (
            <button style={mystyle} onClick={this.onClick}>{this.props.color}</button>
        )

    }
    

}
// const Custombtn=(props)=>{
//     const mystyle={
//         background:props.color,
//     }
//     return (
//         <button style={mystyle} onClick={}>{props.color}</button>
//     )
// }

export default Custombtn