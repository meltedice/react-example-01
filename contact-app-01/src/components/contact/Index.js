import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Checkbox extends Component {
  toggleCheckbox = () => {
    const {id, handleCheckboxChange} = this.props
    handleCheckboxChange(id)
  }

  render() {
    const {id, checked} = this.props
    return (
      <input key={id} type="checkbox" onChange={this.toggleCheckbox} checked={checked}/>
    )
  }
}

class Index extends Component {
  state = {
    contactCheckedStates: new Set(),
  }

  constructor(props) {
    super(props)
  }

  renderTableHeader = () => {
    return (
      <tr>
        <th>{/* <input type="checkbox" />FIXME */}</th>
        <th>ID</th>
        <th>Name</th>
        <th>Phone number</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    )
  }

  renderContact = (contact, checked) => {
    return (
      <tr key={contact.id}>
        <td><Checkbox id={contact.id} handleCheckboxChange={this.handleCheckboxChange} checked={checked} /></td>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.phone_number}</td>
        <td>{contact.email}</td>
        <td><Link to={{pathname: `/edit/${contact.id}`, state: {contact: contact}}}>Edit</Link></td>
      </tr>
    )
  }

  createContactTBody = () => {
    const {contacts} = this.props
    const {contactCheckedStates} = this.state
    return contacts.map((contact) => this.renderContact(contact, contactCheckedStates.has(contact.id)))
  }

  handleCheckboxChange = (id) => {
    const {contactCheckedStates} = this.state
    
    if (contactCheckedStates.has(id)) {
      contactCheckedStates.delete(id)
    }
    else {
      contactCheckedStates.add(id)
    }
    this.setState({contactCheckedStates: contactCheckedStates})
  }

  handleSubmit = (event) => {
    const {contactCheckedStates} = this.state
    event.preventDefault()
    console.log(contactCheckedStates)
    // TODO: delete checked items
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <thead>
              {this.renderTableHeader()}
            </thead>
            <tbody>
              {this.createContactTBody()}
            </tbody>
          </table>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default Index
