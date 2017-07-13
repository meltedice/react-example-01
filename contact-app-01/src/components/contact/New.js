import React, { Component } from 'react'
import PropTypes from 'prop-types'

class New extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const { createContact, history } = this.props
    const newContact = {
      name: this.name.value,
      phone_number: this.phoneNumber.value,
      email: this.email.value,
    }
    createContact(newContact)
    history.push('/')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <dl>
            <dt>Name</dt>
            <dd>
              <input type='text' ref={input => { this.name = input }} />
            </dd>
            <dt>Phone number</dt>
            <dd>
              <input type='tel' ref={input => { this.phoneNumber = input }} />
            </dd>
            <dt>Email</dt>
            <dd>
              <input type='email' ref={input => { this.email = input }} />
            </dd>
          </dl>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

New.propTypes = {
  history: PropTypes.object,
  createContact: PropTypes.func,
}

export default New
