import * as Contact from '../constants/Contact'

export function getContacts() {
  return {
    type: Contact.GET_CONTACTS,
  }
}

export function createContact(params) {
  return {
    type: Contact.CREATE_CONTACT,
    contact: { params },
  }
}

export function updateContact(params) {
  return {
    type: Contact.UPDATE_CONTACT,
    contact: { params },
  }
}

export function deleteContacts(ids) {
  return {
    type: Contact.DELETE_CONTACTS,
    ids,
  }
}
