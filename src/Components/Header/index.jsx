import React from 'react'
import './index.css'
import axios from 'axios'



export default class Header extends React.Component {
  state = {
    data: this.props.data
  }

  add = () => {
    const { data } = this.state
    this.setState({ data: [...data, { id: data.length + 1, msg: this.ipt.value }] })
    this.props.data.push({ id: data.length + 1, msg: this.ipt.value })
    this.props.getState(this.props.data)
    this.ipt.value = ''
    axios.get('http://www.boredapi.com.activity')
  }
  
  render() {
    return (
      <div className="header">
        <input type="text" className='' ref={(c) => { this.ipt = c }}/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }


}