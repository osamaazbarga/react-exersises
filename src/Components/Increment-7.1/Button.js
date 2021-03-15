import { Component } from "react";

class Countbtn extends Component{
    constructor(){
        super();
        this.state={count:0}
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    

    buttonClicked(e) {
        this.setState({count: this.state.count+1});
    }
    render(){
        return (
    
           <div>
                <button onClick={this.buttonClicked}>
                
                    increment
                
            </button>
            {this.state.count}
            </div>
            );
    }
}



export default Countbtn;