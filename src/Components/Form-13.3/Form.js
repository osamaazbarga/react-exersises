import React, { Component } from 'react'

export default class Form extends Component {
  state={
    fname:'',
    lname:'',
    age:0,
    freeText:''
  }
  handelchange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state);
  }
  render() {
    return (
      <div>
        firet name: <input type="text" value={this.state.fname} name='fname'onChange={this.handelchange}/>
        last name: <input type="text" value={this.state.lname} name='lname' onChange={this.handelchange}/>
        age: <input type="number" value={this.state.age} name='age' min={0} max={100} onChange={this.handelchange}/>
        free Text:  <textarea name="freeText" id="" value={this.state.freeText}   onChange={this.handelchange} cols="30" rows="10"></textarea>
      </div>
    )
  }
}