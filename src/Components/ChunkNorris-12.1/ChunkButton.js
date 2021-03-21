import React, { Component } from 'react'

class Chunkbtn extends Component{
    constructor(props){
        super(props)
        this.state={btnname:this.props.btnname}

    }

    onClick=()=>{
        // this.props.onClick(this.state.color)
        if(this.props.onClick){
            this.props.onClick(this.state.btnname)
        }
        else if(this.props.categoryfunc){
            this.props.categoryfunc(this.state.btnname);
        }

    }
    render(){

        // const mystyle={
        //     background:this.props.color,
        // }
        return (
            <button onClick={this.onClick}>{this.props.btnname}</button>
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

export default Chunkbtn