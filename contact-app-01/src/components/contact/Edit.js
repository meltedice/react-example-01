import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.update = props.update
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const params = this.props.match.params
    event.preventDefault()
    const contact = {
      id: params.id,
      name: this.name.value,
      phone_number: this.phoneNumber.value,
      email: this.email.value,
    }
    this.update(contact)
    this.props.history.push('/')
  }

  render() {
    const {contacts, match} = this.props
    const id = parseInt(match.params.id, 10)
    const contact = contacts.find((c, i, contracts) => c.id === id)

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
