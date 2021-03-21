import React, { Component } from 'react'
import Cardavatar from './Cardavatar'
import axios from 'axios'
import './Avatarcard.css'

export default class Avatar extends Component {
    constructor(props){
        super(props)
        this.state=({users:[],search:""})
    }

    componentDidMount=async()=>{
        let array=[]
        for (let i = 0; i < 10; i++) {
            const user=await axios.get('https://randomuser.me/api/');
            array.push(user.data.results[0])

            
            
        }
        this.setState({users:array})
        const user=await axios.get('https://randomuser.me/api/');
        // this.setState({users:user})
        // console.log(user.data.results[0].name.first)
        // console.log(user.data.results[0.pict)
        console.log(this.state.users)
        console.log(this.state.users[0].name.first)
        
    }

    handlerchange=(e)=>{
        this.setState({search:e.target.value})
    }
    render() {
        let filtercontact=this.state.users.filter(cont=>{
            return cont.name.first.toLowerCase().includes(this.state.search.toLowerCase())||cont.name.last.toLowerCase().includes(this.state.search.toLowerCase())
        });
        
        return (
            <div>
                <div className="search">
                {/* <input className="searchinput"></input> */}
                <input className="searchinput" type="text" value={this.state.search} onChange={this.handlerchange}/>
                </div>
                {
                    filtercontact.map(user=>{
                        return <Cardavatar name={user.name.first+' '+user.name.last} pic={user.picture.large}/>
                    })
                }
                
                <Cardavatar />
            </div>
        )
    }
}
