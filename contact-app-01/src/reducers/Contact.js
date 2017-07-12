import * as Contact from '../constants/Contact'

const initialState = {
  contacts: [],
}

function requestContacts(state, action) {
  return Object.assign({}, state)
}

function receiveContacts(state, action) {
  const contacts = [].concat(state.contacts, action.contacts)
  return Object.assign({}, state, { contacts })
}

function createContact(state, action) {
  // TODO: call api here
  const contacts = [].concat(state.contacts)
  const { params } = action.contact
  const maxId = contacts.reduce((maxId, c) => Math.max(maxId, c.id), 1)
  const newId = maxId + 1
  const newContact = Object.assign({}, params, { id: newId })
  const newContacts = contacts.concat([newContact])
  return Object.assign({}, state, { contacts: newContacts })
}

function updateContact(state, action) {
  // TODO: call api here
  const contacts = [].concat(state.contacts)
  const { params } = action.contact
  const id = parseInt(params.id, 10)
  const index = contacts.findIndex((c) => c.id === id)
  contacts.splice(index, 1, params)
  return Object.assign({}, state, { contacts })
}

function deleteContacts(state, action) {
  // TODO: call api here
  const contacts = [].concat(state.contacts)
  const { ids } = action
  const keep = (c) => {
    for (let id of ids) {
      if (id === c.id) return false
    }
    return true
  }
  return Object.assign({}, state, { contacts: contacts.filter(keep) })
}

export default function contact(state = initialState, action) {
  // console.log('action.type: ' + action.type)
  switch (action.type) {
    case Contact.REQUEST_CONTACTS:
      return requestContacts(state, action)
    case Contact.RECEIVE_CONTACTS:
      return receiveContacts(state, action)
    case Contact.CREATE_CONTACT:
      return createContact(state, action)
    case Contact.UPDATE_CONTACT:
      return updateContact(state, action)
    case Contact.DELETE_CONTACTS:
      return deleteContacts(state, action)
    default:
      return state
  }
}
