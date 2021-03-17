import { Component } from "react";

import './style.css'
let boxradius=0;
class BoxToCircle extends Component{
    constructor(){
        super();
        this.state={box:false,boxradius:0}

    }
    componentDidMount(){
        
        setTimeout(() => {
            this.setState({ boxradius:90});
           }, 4000);
    }
    render(){
        let boxStyle = {
             borderRadius:this.state.boxradius+'%'
          }
          console.log(this.state.box)
        return (
            
            <div>
                
                {<div className="box" style={boxStyle}></div>}
            </div>
        )
    }
}

export default BoxToCircle