import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import Header from '../components/contact/Header'
import Index from '../components/contact/Index'
import New from '../components/contact/New'
import Edit from '../components/contact/Edit'

class App extends Component {
  state = {
    contacts: [],
  }

  componentWillMount() {
    this.asyncLoadContacts()
  }

  asyncLoadContacts = () => {
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

  createContact = (params) => {
    let contacts = this.state.contacts.concat()
    // TODO: call api here
    const maxId = contacts.reduce((maxId, c) => Math.max(maxId, c.id), 1)
    const newId = maxId + 1
    const newContact = Object.assign({}, params,{id: newId})
    const newContacts = contacts.concat([newContact])
    this.setState({contacts: newContacts})
  }

  updateContact = (params) => {
    let contacts = this.state.contacts.concat()
    // TODO: call api here
    const id = parseInt(params.id, 10)
    const index = contacts.findIndex((c) => c.id === id)
    contacts.splice(index, 1, params)
    this.setState({contacts: contacts})
  }

  deleteContacts = (ids) => {
    let contacts = this.state.contacts.concat()
    // TODO: call api here
    const keep = (c) => {
      for (let id of ids) {
        if (id === c.id) return false
      }
      return true
    }
    this.setState({contacts: contacts.filter(keep)})
  }

  render() {
    const contacts = this.state.contacts
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="starter-template">
            <div className="container">
              <Route exact path="/" render={props => {
                return <Index {...props} contacts={contacts} bulkDelete={this.deleteContacts}/>
              }} />
              <Route path="/new" render={props => {
                return <New {...props} create={this.createContact}/>
              }}/>
              <Route path="/edit/:id" render={props => {
                return <Edit {...props} update={this.updateContact}/>
              }}/>
            </div>
          </div>
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
