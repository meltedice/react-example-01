import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
        <th className="text-center"><CheckAllCheckbox toggleCheckAll={this.toggleCheckAll} checked={this.state.checked}/></th>
        <th className="text-left">ID</th>
        <th className="text-left">Name</th>
        <th className="text-left">Phone number</th>
        <th className="text-left">Email</th>
        <th className="text-left">Actions</th>
      </tr>
    )
  }

  renderContact = (contact, selected) => {
    return (
      <tr key={contact.id}>
        <td className="text-center" style={{verticalAlign: "middle"}}><Checkbox id={contact.id} handleCheckboxChange={this.handleCheckboxChange} selected={selected} /></td>
        <td className="text-right" style={{verticalAlign: "middle"}}>{contact.id}</td>
        <td className="text-left" style={{verticalAlign: "middle"}}>{contact.name}</td>
        <td className="text-left" style={{verticalAlign: "middle"}}>{contact.phone_number}</td>
        <td className="text-left" style={{verticalAlign: "middle"}}>{contact.email}</td>
        <td className="text-center">
          <LinkContainer to={{pathname: `/edit/${contact.id}`, state: {contact: contact}}}>
            <Button bsStyle='primary'>Edit</Button>
          </LinkContainer>
        </td>
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
          <Table striped bordered responsive>
            <thead>
              {this.renderTableHeader()}
            </thead>
            <tbody>
              {this.createContactTBody()}
            </tbody>
          </Table>
          <Button bsStyle="danger" type='submit'>Delete</Button>
        </form>
      </div>
    )
  }
}

export default Index
