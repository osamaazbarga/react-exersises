import React, { Component } from 'react'
import Chuckbtn from './ChunkButton'
import axios from 'axios'

export class Chuck_norris extends Component {
    constructor(props){
        super(props)
        this.state={norris:[],categoy:[]}
    }

    componentDidMount=async()=>{
        const norrisapi=await axios.get(`https://api.chucknorris.io/jokes/random`);
        // console.log(this.state.params)
        this.setState({norris:norrisapi.data})
        const catapi=await axios.get(`https://api.chucknorris.io/jokes/categories`);
        this.setState({categoy:catapi.data})

    }
    newjokefetch=async(categoy)=>{
        console.log('im');
       await this.setState({categoycatch:categoy})
        const norrisapi=await axios.get(`https://api.chucknorris.io/jokes/random?category=${categoy}`);
        await this.setState({norris:norrisapi.data})
        console.log(this.state.norris);
    }
    render() {

        return (
            <div>
                <Chuckbtn btnname="random" onClick={this.componentDidMount}/>
                <p>{this.state.norris.value}</p>
                {
                    this.state.categoy.map(cat=>{
                        return <Chuckbtn btnname={cat} onClick={this.newjokefetch} />
                    })
                }

            </div>
        )
    }
}

export default Chuck_norris
