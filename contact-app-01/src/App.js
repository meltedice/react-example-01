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
  render() {
    const contacts = this.props.contacts

    return <Contacts contacts={contacts}/>
  }
}

class New extends Component {
  constructor(props) {
    super(props)
    this.addNewContact = props.addNewContact
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newContact = {
      name: this.name.value, // "Mayer",
      phone_number: this.phoneNumber.value, // "+81 00 0000 0004",
      email: this.email.value // "mayer@example.com",
    }
    this.addNewContact(newContact)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Contacts</Link></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <dl>
            <dt>Name</dt>
            <dd><input type="text" ref={input => this.name = input}/></dd>
            <dt>Phone number</dt>
            <dd><input type="text" ref={input => this.phoneNumber = input}/></dd>
            <dt>Email</dt>
            <dd><input type="text" ref={input => this.email = input}/></dd>
          </dl>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

class App extends Component {
  state = {
    contacts: [],
  }

  constructor(props) {
    super(props)
    this.addNewContact = this.addNewContact.bind(this)
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
              return <New {...props} contacts={contacts} addNewContact={this.addNewContact}/>
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
