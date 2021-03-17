import { Component } from "react";

import './Change.css'
class ChangeBox extends Component{
    constructor(){
        super();
        this.state={box:false}
    }
    componentDidMount(){

        setTimeout(() => {
            this.setState({box:true})
            //document.querySelector(".cc").innerHTML='The updated favorite color is: '+this.state.favoriteColor
            
        }, 1000);
        setTimeout(() => {
            this.setState({ box:false});
          }, 4000);
    }
    render(){
        let boxStyle = {
            height: this.props.size,
            width: this.props.size,  
          }
          console.log(this.state.box)
        return (
            
            <div>
                
                {this.state.box&&<div className="box" style={boxStyle}></div>}
            </div>
        )
    }
}

export default ChangeBox