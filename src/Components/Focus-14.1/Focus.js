import React, { Component } from 'react'

export default class Focus extends Component {
    constructor(props){
        super(props)
        this.inputref=React.createRef();
    }
    componentDidMount(){
        console.log(this.inputref.current.focus)
    }

    render() {
        return (
            <div>
                <input ref={this.inputref} type="text"/>
            </div>
        )
    }
}
