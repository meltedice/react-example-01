import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class New extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.create = props.create
  }

  handleSubmit(event) {
    const newContact = {
      name: this.name.value, // "Mayer",
      phone_number: this.phoneNumber.value, // "+81 00 0000 0004",
      email: this.email.value // "mayer@example.com",
    }
    this.create(newContact)
    this.props.history.push('/')
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Contacts</Link></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <dl>
            <dt>Name</dt>
            <dd><input type="text" ref={input => this.name = input}/></dd>
            <dt>Phone number</dt>
            <dd><input type="text" ref={input => this.phoneNumber = input}/></dd>
            <dt>Email</dt>
            <dd><input type="text" ref={input => this.email = input}/></dd>
          </dl>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default New
