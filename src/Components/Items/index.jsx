import React from 'react'
import './index.css'

export default class Items extends React.Component {

  handleClick = (index) => {
    this.props.getItemIndex(index)

  }

  render() {
    return (
      <ul className='items'>
        {this.props.data.map((item, index) => <li key={item.id}>
          <input type="checkbox" defaultChecked={item.checked}/>
          {item.msg} 
          <span onClick={() => { this.handleClick(index) }}>x</span>
          </li>)}
      </ul>
    )
  }


}