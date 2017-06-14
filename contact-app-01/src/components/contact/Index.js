import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Index extends Component {
  renderContact(contact) {
    return (
      <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.phone_number}</td>
        <td>{contact.email}</td>
      </tr>
    )
  }

  render() {
    const {contacts} = this.props
    const contactsTags = contacts.map((contact) => this.renderContact(contact))

    return (
      <div>
        <ul>
          <li><Link to='/'>Index</Link></li>
          <li><Link to='/new'>New</Link></li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contactsTags}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Index
