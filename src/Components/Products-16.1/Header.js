import React, { Component } from 'react'
import{Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">Home</Link>
                <Link to="/products" className="item">Products</Link>

                <div className="right menu"></div>
                
            </div>
        )
    }
}
