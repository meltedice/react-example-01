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
    const {id, selected} = this.props
    return (
      <input key={id} type="checkbox" onChange={this.toggleCheckbox} checked={selected}/>
    )
  }
}

class Index extends Component {
  state = {
    selectedContactIds: new Set(),
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

  renderContact = (contact, selected) => {
    return (
      <tr key={contact.id}>
        <td><Checkbox id={contact.id} handleCheckboxChange={this.handleCheckboxChange} selected={selected} /></td>
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
    const {selectedContactIds} = this.state
    return contacts.map((contact) => this.renderContact(contact, selectedContactIds.has(contact.id)))
  }

  handleCheckboxChange = (id) => {
    const {selectedContactIds} = this.state
    
    if (selectedContactIds.has(id)) {
      selectedContactIds.delete(id)
    }
    else {
      selectedContactIds.add(id)
    }
    this.setState({selectedContactIds: selectedContactIds})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {selectedContactIds} = this.state
    console.log('Delete following contacts:')
    console.log(selectedContactIds)
    // TODO: call delete contacts API
    
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
