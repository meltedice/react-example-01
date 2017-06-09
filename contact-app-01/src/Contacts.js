import React, { Component } from 'react'

class Contacts extends Component {
  renderContact(contact) {
    return (
      <tr>
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
    )
  }
}

export default Contacts
