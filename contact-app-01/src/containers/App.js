import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from '../logo.svg'
import './App.css'
import Index from '../components/contact/Index'
import New from '../components/contact/New'
import Edit from '../components/contact/Edit'

class App extends Component {
  state = {
    contacts: [],
  }

  constructor(props) {
    super(props)
    this.addNewContact = this.addNewContact.bind(this)
    this.updateContact = this.updateContact.bind(this)
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

  addNewContact(params) {
    const contacts = this.state.contacts.concat()
    const maxId = contacts.reduce((maxId, c) => Math.max(maxId, c.id), 1)
    const newId = maxId + 1
    const newContact = Object.assign({}, params,{id: newId})
    const newContacts = contacts.concat([newContact])
    this.setState({contacts: newContacts})
  }

  updateContact(params) {
    const contacts = this.state.contacts.concat()
    const id = parseInt(params.id, 10)
    const index = contacts.findIndex((c) => c.id === id)
    contacts.splice(index, 1, params)
    this.setState({contacts: contacts})
  }

  render() {
    const contacts = this.state.contacts
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

          <Route exact path="/" render={props => {
              return <Index {...props} contacts={contacts}/>
            }} />
          <Route path="/new" render={props => {
              return <New {...props} addNewContact={this.addNewContact}/>
            }}/>
          <Route path="/edit/:id" render={props => {
              return <Edit {...props} update={this.updateContact}/>
            }}/>
        </div>
      </Router>
    )
  }
}

(() => {
  const fetchMock = require('fetch-mock')
  let contacts = [
    {"id": 0, "name": "Zero0",        "phone_number": "+81 00 0000 0000", "email": "zero@example.com"},
    {"id": 1, "name": "Jack",         "phone_number": "+81 00 0000 0001", "email": "jack@example.com"},
    {"id": 2, "name": "Sarry",        "phone_number": "+81 00 0000 0002", "email": "sarry@example.com"},
    {"id": 3, "name": "Oogie Boogie", "phone_number": "+81 00 0000 0003", "email": "oogie-boogie@example.com"}
  ]

  fetchMock.get('/api/contacts.json', contacts).catch(500)
  fetchMock.mock('*', 404)
})()

export default App
