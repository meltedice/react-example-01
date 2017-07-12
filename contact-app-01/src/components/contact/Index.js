import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { connect } from 'react-redux'
import { deleteContacts } from '../../actions/Contact'

class CheckAllCheckbox extends Component {
  render() {
    const { toggleCheckAll, checked } = this.props
    return <input type='checkbox' onChange={toggleCheckAll} checked={checked} />
  }
}

CheckAllCheckbox.propTypes = {
  toggleCheckAll: PropTypes.func,
  checked: PropTypes.bool,
}

class Checkbox extends Component {
  toggleCheckbox = () => {
    const { id, handleCheckboxChange } = this.props
    handleCheckboxChange(id)
  }

  render() {
    const { id, selected } = this.props
    return (
      <input key={id} type='checkbox' onChange={this.toggleCheckbox} checked={selected} />
    )
  }
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleCheckboxChange: PropTypes.func,
  selected: PropTypes.bool,
}

class Index extends Component {
  state = {
    selectedContactIds: new Set(),
    checked: false,
  }

  renderTableHeader = () => {
    return (
      <Row className='panel'>
        <Col xs={1}  sm={1} md={1} className='text-right'>
          <CheckAllCheckbox toggleCheckAll={this.toggleCheckAll} checked={this.state.checked} />
        </Col>
        <Col xs={1}  sm={1} md={1} className='text-left'>ID</Col>
        <Col xs={10} sm={2} md={2} className='text-left'>Name</Col>
        <Col xs={6}  sm={3} md={3} xsHidden smHidden className='text-left'>Phone number</Col>
        <Col xs={6}  sm={4} md={4} xsHidden smHidden className='text-left'>Email</Col>
        <Col xs={12} sm={1} md={1} xsHidden smHidden className='text-left'>Actions</Col>
      </Row>
    )
  }

  renderContact = (contact, selected) => {
    return (
      <Row className='panel' key={contact.id}>
        <Col xs={1}  sm={1} md={1} className='text-right' style={{ verticalAlign: 'middle' }}>
          <Checkbox id={contact.id} handleCheckboxChange={this.handleCheckboxChange} selected={selected} />
        </Col>
        <Col xs={10}  sm={1} md={1} className='text-left'>{contact.id}</Col>
        <Col xs={12}  sm={2} md={2} className='text-left'>{contact.name}</Col>
        <Col xs={12}  sm={3} md={3} className='text-left'>{contact.phone_number}</Col>
        <Col xs={12}  sm={4} md={4} className='text-left'>{contact.email}</Col>
        <Col xs={12}  sm={1} md={1} className='text-left'>
          <LinkContainer to={{ pathname: `/edit/${contact.id}`, state: { contact } }}>
            <Button bsStyle='primary' bsSize='small'>Edit</Button>
          </LinkContainer>
        </Col>
      </Row>
    )
  }

  createContactTBody = () => {
    const { contacts } = this.props
    const { selectedContactIds } = this.state
    return contacts.map((contact) => this.renderContact(contact, selectedContactIds.has(contact.id)))
  }

  toggleCheckAll = (element) => {
    const { contacts } = this.props
    const { selectedContactIds } = this.state
    const numContacts = contacts.length
    const numSelectedContacts = selectedContactIds.size
    let newSelectedContactIds = new Set()

    if (numSelectedContacts !== numContacts) {
      for (let contact of contacts) {
        newSelectedContactIds.add(contact.id)
      }
      this.setState({ checked: true })
    } else {
      this.setState({ checked: false })
    }

    this.setState({ selectedContactIds: newSelectedContactIds })
  }

  handleCheckboxChange = (id) => {
    const { contacts } = this.props
    const { selectedContactIds } = this.state
    if (selectedContactIds.has(id)) {
      selectedContactIds.delete(id)
      this.setState({ checked: false })
    } else {
      selectedContactIds.add(id)
      if (selectedContactIds.size === contacts.length) {
        this.setState({ checked: true })
      }
    }
    this.setState({ selectedContactIds })
  }

  deleteSelectedContacts = () => {
    const { dispatch } = this.props
    let { selectedContactIds } = this.state
    console.log('Delete following contacts:')
    console.log(selectedContactIds)

    dispatch(deleteContacts(selectedContactIds))

    selectedContactIds.clear()
    this.setState({ selectedContactIds })
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
          <Panel header={this.renderTableHeader()}>
            {this.createContactTBody()}
          </Panel>
          <Button bsStyle='danger' type='submit'>Delete</Button>
        </form>
      </div>
    )
  }
}

Index.propTypes = {
  contacts: PropTypes.array,
  dispatch: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  // history: PropTypes.object,
}

export default connect()(Index)
