import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Contacts from './Contacts'

class Index extends Component {
  state = {
    contacts: [],
  }

  componentWillMount() {
    fetch(`/api/contacts.json`, {
      accept: 'application/json',
      method: 'GET',
    }).then((response) => {
      return response
    }).then((response) => {
      const promise = response.json()

      promise.then((contacts) => {
        if (contacts) {
          this.setState({contacts})
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

    return <Contacts contacts={contacts}/>
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route path="/" component={Index}/>
        </div>
      </Router>
    )
  }
}

(() => {
  const fetchMock = require('fetch-mock')

  fetchMock.get(
    '/api/contacts.json',
    [
      {"id": 0, "name": "Zero0",        "phone_number": "+81 00 0000 0000", "email": "zero@example.com"},
      {"id": 1, "name": "Jack",         "phone_number": "+81 00 0000 0001", "email": "jack@example.com"},
      {"id": 2, "name": "Sarry",        "phone_number": "+81 00 0000 0002", "email": "sarry@example.com"},
      {"id": 3, "name": "Oogie Boogie", "phone_number": "+81 00 0000 0003", "email": "oogie-boogie@example.com"}
    ]
  ).catch(500)
  fetchMock.mock('*', 404)
})()

export default App
