import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateContact } from '../../actions/Contact'

class Edit extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch, history } = this.props
    const { params } = this.props.match
    const contact = {
      id: params.id,
      name: this.name.value,
      phone_number: this.phoneNumber.value,
      email: this.email.value,
    }
    dispatch(updateContact(contact))
    history.push('/')
  }

  render() {
    const { contact } = this.props.location.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <dl>
            <dt>Name</dt>
            <dd>
              <input type='text' defaultValue={contact.name} ref={input => { this.name = input }} />
            </dd>
            <dt>Phone number</dt>
            <dd>
              <input type='tel' defaultValue={contact.phone_number} ref={input => { this.phoneNumber = input }} />
            </dd>
            <dt>Email</dt>
            <dd>
              <input type='email' defaultValue={contact.email} ref={input => { this.email = input }} />
            </dd>
          </dl>
          <button type='submit'>Update</button>
        </form>
      </div>
    )
  }
}

Edit.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
}

export default connect()(Edit)
