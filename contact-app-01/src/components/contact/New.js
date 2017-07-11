import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createContact } from '../../actions/Contact'

class New extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch, history } = this.props
    const newContact = {
      name: this.name.value,
      phone_number: this.phoneNumber.value,
      email: this.email.value,
    }
    dispatch(createContact(newContact))
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
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

export default connect()(New)
