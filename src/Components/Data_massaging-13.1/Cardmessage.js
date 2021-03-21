import React, { Component } from 'react'
import './CardMessage.css'

export default class Cardmessage extends Component {
    constructor(props){
        super(props)
    }

    cardinfo(){
        console.log(this.props.cardinfo.favoriteFoods)
    }
    render() {
        console.log(this.props.cardinfo.favoriteFoods)
        return (
            <div className="card">
                <h1>{this.props.cardinfo.name}</h1>
                <div><span>birthday: </span>{this.props.cardinfo.birthday}</div>
                <div><span>meats: </span>{this.props.cardinfo.favoriteFoods.meats.map(food=>{
                     return food+','
                })}</div>
                <div><span>fish: </span>{this.props.cardinfo.favoriteFoods.fish.map(food=>{
                     return food+','
                })}</div>


                
            </div>
        )
    }
}
