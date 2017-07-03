import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { Button } from 'react-bootstrap'

class CheckAllCheckbox extends Component {
  render() {
    const {toggleCheckAll, checked} = this.props
    return <input type="checkbox" onChange={toggleCheckAll} checked={checked}/>
  }
}

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
    checked: false,
  }

  renderTableHeader = () => {
    return (
      <tr>
        <th><CheckAllCheckbox toggleCheckAll={this.toggleCheckAll} checked={this.state.checked}/></th>
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

  toggleCheckAll = (element) => {
    const {contacts} = this.props
    const {selectedContactIds} = this.state
    const numContacts = contacts.length
    const numSelectedContacts = selectedContactIds.size
    let newSelectedContactIds = new Set()

    if (numSelectedContacts !== numContacts) {
      for (let contact of contacts) {
        newSelectedContactIds.add(contact.id)
      }
      this.setState({checked: true})
    }
    else {
      this.setState({checked: false})
    }

    this.setState({selectedContactIds: newSelectedContactIds})
  }

  handleCheckboxChange = (id) => {
    const {contacts} = this.props
    const {selectedContactIds} = this.state
    
    if (selectedContactIds.has(id)) {
      selectedContactIds.delete(id)
      this.setState({checked: false})
    }
    else {
      selectedContactIds.add(id)
      if (selectedContactIds.size === contacts.length) {
        this.setState({checked: true})
      }
    }
    this.setState({selectedContactIds: selectedContactIds})
  }

  deleteSelectedContacts = () => {
    const {bulkDelete} = this.props
    let {selectedContactIds} = this.state
    console.log('Delete following contacts:')
    console.log(selectedContactIds)

    bulkDelete(selectedContactIds)

    selectedContactIds.clear()
    this.setState({selectedContactIds})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // TODO: call delete contacts API
    this.deleteSelectedContacts()
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
          <Button type='submit'>Delete</Button>
        </form>
      </div>
    )
  }
}

export default Index
