import React, { Component } from 'react'
import{Link} from 'react-router-dom'

export default class Products extends Component {
    render() {
        return (
            <div>
                <Link className="ui right" to="/products/1">Stylish Hat </Link>
                <Link className="ui right" to="/products/2">Beautiful Jacket </Link>
                <Link className="ui right" to="/products/3">Jeans </Link>
                <Link className="ui right" to="/products/4">Tie </Link>





                <Link to="/">back</Link>
            </div>
        )
    }
}
