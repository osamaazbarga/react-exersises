import { Component } from "react";


class ColorFav extends Component{
    constructor(){
        super();
        this.state={favoriteColor:'red'}
    }
    componentDidMount(){

        setTimeout(() => {
            this.setState({favoriteColor:'blue'})
            document.querySelector(".cc").innerHTML='The updated favorite color is: '+this.state.favoriteColor
            
        }, 1000);
    }
    render(){
        return (
            
            <div>
                <h1>My favorite color is: {this.state.favoriteColor}</h1>
                <div className="cc"></div>
            </div>
        )
    }
}

export default ColorFav