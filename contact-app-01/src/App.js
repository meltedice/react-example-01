import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [
      {
        "id": 0,
        "name": "Zero",
        "phone_number": "+81 00 0000 0000",
        "email": "zero@example.com",
      },
    ],
  }

  componentWillMount() {
    fetch(`/api/contacts.json`, {
      accept: 'application/json',
      method: 'GET',
    }).then((response) => {
      return response
    }).then((response) => {
      const jsonPromise = response.json()

      jsonPromise.then((value) => {
        if (value) {
          this.setState({contacts: value})
        }
      }).catch((error) => {
        console.log('json: error:')
        console.log(error)
      })

      return response
    }).catch((error) => {
      console.log("fetch error:")
      console.log(error)
    })
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
