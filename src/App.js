import React from 'react'
import './App.css'

import Header from './Components/Header/index'
import List from './Components/List/index'
// import Footer from './Components/Footer/index'


export default class App extends React.Component {
  state = {
    data: [
      { id: 1, msg: 'eat', checked: true },
      { id: 2, msg: 'drink', checked: false },
      { id: 3, msg: 'sleep' , checked: true},
    ]
  }

  getChildState = (data) => {
    this.setState({ data: [...data] })
  }

  getRemoveIndex = (index) => {
    const { data } = this.state
    data.splice(index, 1)

    // console.log(data[index])
    this.setState({ data: data })
  }

  render() {
    return (
      <div className='container'>
        <Header data={this.state.data} getState={this.getChildState} />
        <List data={this.state.data} getRemoveIndex={this.getRemoveIndex} />
      </div>
    )
  }
}