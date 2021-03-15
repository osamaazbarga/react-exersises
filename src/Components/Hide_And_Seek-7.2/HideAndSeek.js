import { Component } from "react";


class Hide extends Component{
    constructor(){
        super();
        this.state={hide:'none'}
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(e) {
        if(this.state.hide=='none'){
            this.setState({hide: this.state.hide='block'});
        }
        else {
            this.setState({hide: this.state.hide='none'});
        }
    }

    render(){
        const mystyle={
            background:"yellow",
            width:'200px',
            height:"200px",
            display:this.state.hide
        }
        return (
            
            <div>
                <button onClick={this.buttonClicked}>
                {
                    'show/hide'
                }
            </button>
            
            <div style={mystyle}></div>
            </div>
            );

    }
}


export default Hide;