import React, { Component } from 'react'

export default class Copy extends Component {
    arearef=React.createRef();
    onClick=()=>{
        this.arearef.current.select()
        document.execCommand("copy");
    }
    render() {
        return (
            <div>
                <textarea ref={this.arearef}/>
                <button onClick={this.onClick}>submit</button>
            </div>
        )
    }
}
