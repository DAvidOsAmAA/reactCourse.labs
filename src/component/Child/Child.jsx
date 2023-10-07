import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div className='d-inline-block'>
      <div className='bg-danger m-5 p-5  '>
        <h1>{this.props.product.name}</h1>
        <h1>{this.props.product.price}</h1>
        <button className='btn btn-primary' onClick={()=>{this.props.save(this.props.index)}}>add to cart</button>
        <button className='btn btn-primary' onClick={()=>{this.props.delete(this.props.index)}}>delete</button>
      </div>
      </div>
    )
  }
}
