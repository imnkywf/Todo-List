import React from 'react'
import './index.css'
import Items from '../Items/index'

export default class List extends React.Component {

  getItemIndex = (index) => {
    this.props.getRemoveIndex(index)
  }

  render() {
    return (
      <div className="List">
        <Items data={this.props.data} getItemIndex={this.getItemIndex}/>
      </div>
    )
  }
}