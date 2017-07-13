import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ContactActions from '../actions/Contact'
import './App.css'
import Header from '../components/contact/Header'
import Index from '../components/contact/Index'
import New from '../components/contact/New'
import Edit from '../components/contact/Edit'

class App extends Component {
  componentWillMount() {
    this.props.contactActions.loadContacts()
  }

  render() {
    const contacts = this.props.contact.contacts
    const { deleteContacts, createContact, updateContact } = this.props.contactActions
    return (
      <Router>
        <div className='App'>
          <Header />
          <div className='starter-template'>
            <div className='container'>
              <Route exact path='/' render={props => {
                return <Index {...props}
                  contacts={contacts}
                  deleteContacts={deleteContacts}
                />
              }} />
              <Route path='/new' render={props => {
                return <New {...props}
                  createContact={createContact}
                />
              }} />
              <Route path='/edit/:id'
                render={props => <Edit {...props}
                  updateContact={updateContact}
                />}
              />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  contact: PropTypes.object,
  contactActions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    contact: state.contact,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contactActions: bindActionCreators(ContactActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
