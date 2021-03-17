import { Component } from "react";
import SpinnerDis from "./SpinnerDisplay";


import './style.css'

class Spinner extends Component{
    constructor(){
        super();
        this.state={box:true}

    }
    componentDidMount(){
        
        setTimeout(() => {
            this.setState({ box:false});
        }, 4000);
    }
    render(){
        // let boxStyle = {
        //      borderRadius:this.state.boxradius+'%'
        //   }
          console.log(this.state.box)
          if(this.state.box){
              return <SpinnerDis/>
          }
            return <div>Loding endded</div>
        // return (
            
        //     <div>
                
        //         {this.state.box&&<div className="box1"></div>}
        //     </div>
        //)
    }
}

export default Spinner