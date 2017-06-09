import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
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

  renderContacts() {
    const contacts = [
      {
        "id": 1,
        "name": "Jack",
        "phone_number": "+81 00 0000 0001",
        "email": "jack@example.com",
      },
      {
        "id": 2,
        "name": "Sarry",
        "phone_number": "+81 00 0000 0002",
        "email": "sarry@example.com",
      },
      {
        "id": 3,
        "name": "Zero",
        "phone_number": "+81 00 0000 0000",
        "email": "zero@example.com",
      },
      {
        "id": 4,
        "name": "Oogie Boogie",
        "phone_number": "+81 00 0000 0004",
        "email": "oogie-boogie@example.com",
      },
    ]
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderContacts()}
      </div>
    )
  }
}

export default App
