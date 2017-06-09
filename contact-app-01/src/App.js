import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [
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
    ],
  }

  render() {
    const contacts = this.state.contacts

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contacts contacts={contacts}/>
      </div>
    )
  }
}

export default App
