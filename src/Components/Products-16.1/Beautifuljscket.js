import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import './products.css'

export default class Beautifuljscket extends Component {
    render() {
        return (
            <div>
                <h2>Beautiful Jscket</h2>
                <div>price: 100</div>
                <img src="https://s3-ap-southeast-1.amazonaws.com/priyoshop/content/Images/thumbs/0098372_dark-blue-white-stylish-jacket-for-men_550.jpeg"/>
                <Link className="back" to="/products">back</Link>
            </div>
        )
    }
}
