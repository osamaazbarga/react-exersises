import React, { Component } from 'react'
import './Avatarcard.css'
export default class Cardavatar extends Component {
    render() {
        return (
            <div className="avatarcard">
               <div className="username">
                   {
                       this.props.name
                   }
               </div>
               <div><img src={this.props.pic}></img></div>
            </div>
        )
    }
}
