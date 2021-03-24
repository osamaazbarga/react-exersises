import React, { Component } from 'react'
import{Link} from 'react-router-dom'

export default class Tie extends Component {
    render() {
        return (
            <div>
                <h2>Stylish hat</h2>
                <div>price: 50</div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81UWsqxFcuL._UL1500_.jpg"/>
                <Link className="back" to="/products">back</Link>
            
            </div>
        )
    }
}
