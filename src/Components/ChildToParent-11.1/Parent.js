import { Component } from "react";
import Custombtn from "./CustomButton";


// import './style.css'
const colors = ['blue','red','yellow'];
class Colorselect extends Component{
    constructor(){
        super();
        this.state={color:''}
    }
    showcolor=(e)=>{
        this.setState({color:e})
    }
    render(){
            return (<div>

                {colors.map(eColor=>{return <Custombtn color={eColor} onClick={this.showcolor}/>})}
                <h1>The color selected is {this.state.color}</h1>
                </div>)
    }
}

export default Colorselect