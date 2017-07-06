import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { Button, Table, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
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
      <ListGroupItem>
        <Row>
          <Col md={1} className="text-right"><CheckAllCheckbox toggleCheckAll={this.toggleCheckAll} checked={this.state.checked}/></Col>
          <Col md={1} className="text-left">ID</Col>
          <Col md={2} className="text-left">Name</Col>
          <Col md={2} className="text-left">Phone number</Col>
          <Col md={3} className="text-left">Email</Col>
          <Col md={1} className="text-left">Actions</Col>
        </Row>
      </ListGroupItem>
    )
  }

  renderContact = (contact, selected) => {
    return (
      <ListGroupItem key={contact.id}>
        <Row>
          <Col md={1} className="text-right" style={{verticalAlign: "middle"}}><Checkbox id={contact.id} handleCheckboxChange={this.handleCheckboxChange} selected={selected} /></Col>
          <Col md={1} className="text-left" style={{verticalAlign: "middle"}}>{contact.id}</Col>
          <Col md={2} className="text-left" style={{verticalAlign: "middle"}}>{contact.name}</Col>
          <Col md={2} className="text-left" style={{verticalAlign: "middle"}}>{contact.phone_number}</Col>
          <Col md={3} className="text-left" style={{verticalAlign: "middle"}}>{contact.email}</Col>
          <Col md={1} className="text-left">
            <LinkContainer to={{pathname: `/edit/${contact.id}`, state: {contact: contact}}}>
              <Button bsStyle='primary' bsSize='small'>Edit</Button>
            </LinkContainer>
          </Col>
        </Row>
      </ListGroupItem>
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
          <ListGroup>
            {this.renderTableHeader()}
            {this.createContactTBody()}
          </ListGroup>
          <Button bsStyle="danger" type='submit'>Delete</Button>
        </form>
      </div>
    )
  }
}

export default Index
