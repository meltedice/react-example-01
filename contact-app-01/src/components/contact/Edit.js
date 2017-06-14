import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = props.update
    this.contact = props.location.state.contact
  }

  handleSubmit(event) {
    const params = this.props.match.params
    const contact = {
      id: params.id,
      name: this.name.value,
      phone_number: this.phoneNumber.value,
      email: this.email.value,
    }
    this.update(contact)
    this.props.history.push('/')
    event.preventDefault()
  }

  render() {
    const contact = this.contact

    return (
      <div>
        <ul>
          <li><Link to='/'>Contacts</Link></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <dl>
            <dt>Name</dt>
            <dd><input type="text" defaultValue={contact.name} ref={input => this.name = input}/></dd>
            <dt>Phone number</dt>
            <dd><input type="text" defaultValue={contact.phone_number} ref={input => this.phoneNumber = input}/></dd>
            <dt>Email</dt>
            <dd><input type="text" defaultValue={contact.email} ref={input => this.email = input}/></dd>
          </dl>
          <button type='submit'>Update</button>
        </form>
      </div>
    )
  }
}

export default Edit
