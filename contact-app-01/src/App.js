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
    const contact = {
      id: 1,
      name: 'Jack',
      phone_numger: '+81 00 0000 0001',
      email: 'jack@example.com',
    }

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
          {this.renderContact(contact)}
          <tr>
            <td>2</td>
            <td>Sarry</td>
            <td>+81 00 0000 0002</td>
            <td>sarry@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Zero</td>
            <td>+81 00 0000 0000</td>
            <td>zero@example.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Oogie Boogie</td>
            <td>+81 00 0000 0004</td>
            <td>oogie-boogie@example.com</td>
          </tr>
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
