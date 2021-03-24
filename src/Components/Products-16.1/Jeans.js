import React, { Component } from 'react'
import{Link} from 'react-router-dom'

export default class Jeans extends Component {
    render() {
        return (
            <div>
                <h2>Stylish hat</h2>
                <div>price: 300</div>
                <img src="https://media.kohlsimg.com/is/image/kohls/sl-denim-mens-hs-20200706-jeans-visnav-05?scl=1&fmt=pjpeg"/>
                <Link className="back" to="/products">back</Link>

            </div>
        )
    }
}
