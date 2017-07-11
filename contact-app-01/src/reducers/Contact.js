import * as Contact from '../constants/Contact'

const initialState = {
  contacts: [],
}

const initialContacts = [
  { id: 0,   name: 'Zero0',        phone_number: '+81 00 0000 0000', email: 'zero@example.com' },
  { id: 1,   name: 'Jack',         phone_number: '+81 00 0000 0001', email: 'jack@example.com' },
  { id: 2,   name: 'Sarry',        phone_number: '+81 00 0000 0002', email: 'sarry@example.com' },
  { id: 3,   name: 'Oogie Boogie', phone_number: '+81 00 0000 0003', email: 'oogie-boogie@example.com' },
  { id: 100, name: 'Bug 000',      phone_number: '+81 00 0100 0000', email: 'bug000@example.com' },
  { id: 101, name: 'Bug 101',      phone_number: '+81 00 0100 0001', email: 'bug001@example.com' },
  { id: 102, name: 'Bug 102',      phone_number: '+81 00 0100 0002', email: 'bug002@example.com' },
  { id: 103, name: 'Bug 103',      phone_number: '+81 00 0100 0003', email: 'bug003@example.com' },
  { id: 104, name: 'Bug 104',      phone_number: '+81 00 0100 0004', email: 'bug004@example.com' },
  { id: 105, name: 'Bug 105',      phone_number: '+81 00 0100 0005', email: 'bug005@example.com' },
  { id: 106, name: 'Bug 106',      phone_number: '+81 00 0100 0006', email: 'bug006@example.com' },
  { id: 107, name: 'Bug 107',      phone_number: '+81 00 0100 0007', email: 'bug007@example.com' },
  { id: 108, name: 'Bug 108',      phone_number: '+81 00 0100 0008', email: 'bug008@example.com' },
  { id: 109, name: 'Bug 109',      phone_number: '+81 00 0100 0009', email: 'bug009@example.com' },
  { id: 110, name: 'Bug 110',      phone_number: '+81 00 0100 0010', email: 'bug010@example.com' },
  { id: 111, name: 'Bug 111',      phone_number: '+81 00 0100 0011', email: 'bug011@example.com' },
  { id: 112, name: 'Bug 112',      phone_number: '+81 00 0100 0012', email: 'bug012@example.com' },
  { id: 113, name: 'Bug 113',      phone_number: '+81 00 0100 0013', email: 'bug013@example.com' },
  { id: 114, name: 'Bug 114',      phone_number: '+81 00 0100 0014', email: 'bug014@example.com' },
  { id: 115, name: 'Bug 115',      phone_number: '+81 00 0100 0015', email: 'bug015@example.com' },
  { id: 116, name: 'Bug 116',      phone_number: '+81 00 0100 0016', email: 'bug016@example.com' },
  { id: 117, name: 'Bug 117',      phone_number: '+81 00 0100 0017', email: 'bug017@example.com' },
  { id: 118, name: 'Bug 118',      phone_number: '+81 00 0100 0018', email: 'bug018@example.com' },
  { id: 119, name: 'Bug 119',      phone_number: '+81 00 0100 0019', email: 'bug019@example.com' },
  { id: 120, name: 'Bug 120',      phone_number: '+81 00 0100 0020', email: 'bug020@example.com' },
  { id: 121, name: 'Bug 121',      phone_number: '+81 00 0100 0021', email: 'bug021@example.com' },
  { id: 122, name: 'Bug 122',      phone_number: '+81 00 0100 0022', email: 'bug022@example.com' },
  { id: 123, name: 'Bug 123',      phone_number: '+81 00 0100 0023', email: 'bug023@example.com' },
  { id: 124, name: 'Bug 124',      phone_number: '+81 00 0100 0024', email: 'bug024@example.com' },
  { id: 125, name: 'Bug 125',      phone_number: '+81 00 0100 0025', email: 'bug025@example.com' },
  { id: 126, name: 'Bug 126',      phone_number: '+81 00 0100 0026', email: 'bug026@example.com' },
  { id: 127, name: 'Bug 127',      phone_number: '+81 00 0100 0027', email: 'bug027@example.com' },
  { id: 128, name: 'Bug 128',      phone_number: '+81 00 0100 0028', email: 'bug028@example.com' },
  { id: 129, name: 'Bug 129',      phone_number: '+81 00 0100 0029', email: 'bug029@example.com' },
  { id: 130, name: 'Bug 130',      phone_number: '+81 00 0100 0030', email: 'bug030@example.com' },
  { id: 131, name: 'Bug 131',      phone_number: '+81 00 0100 0031', email: 'bug031@example.com' },
  { id: 132, name: 'Bug 132',      phone_number: '+81 00 0100 0032', email: 'bug032@example.com' },
  { id: 133, name: 'Bug 133',      phone_number: '+81 00 0100 0033', email: 'bug033@example.com' },
  { id: 134, name: 'Bug 134',      phone_number: '+81 00 0100 0034', email: 'bug034@example.com' },
  { id: 135, name: 'Bug 135',      phone_number: '+81 00 0100 0035', email: 'bug035@example.com' },
  { id: 136, name: 'Bug 136',      phone_number: '+81 00 0100 0036', email: 'bug036@example.com' },
  { id: 137, name: 'Bug 137',      phone_number: '+81 00 0100 0037', email: 'bug037@example.com' },
  { id: 138, name: 'Bug 138',      phone_number: '+81 00 0100 0038', email: 'bug038@example.com' },
  { id: 139, name: 'Bug 139',      phone_number: '+81 00 0100 0039', email: 'bug039@example.com' },
  { id: 140, name: 'Bug 140',      phone_number: '+81 00 0100 0040', email: 'bug040@example.com' },
  { id: 141, name: 'Bug 141',      phone_number: '+81 00 0100 0041', email: 'bug041@example.com' },
  { id: 142, name: 'Bug 142',      phone_number: '+81 00 0100 0042', email: 'bug042@example.com' },
  { id: 143, name: 'Bug 143',      phone_number: '+81 00 0100 0043', email: 'bug043@example.com' },
  { id: 144, name: 'Bug 144',      phone_number: '+81 00 0100 0044', email: 'bug044@example.com' },
  { id: 145, name: 'Bug 145',      phone_number: '+81 00 0100 0045', email: 'bug045@example.com' },
  { id: 146, name: 'Bug 146',      phone_number: '+81 00 0100 0046', email: 'bug046@example.com' },
  { id: 147, name: 'Bug 147',      phone_number: '+81 00 0100 0047', email: 'bug047@example.com' },
  { id: 148, name: 'Bug 148',      phone_number: '+81 00 0100 0048', email: 'bug048@example.com' },
  { id: 149, name: 'Bug 149',      phone_number: '+81 00 0100 0049', email: 'bug049@example.com' },
  { id: 150, name: 'Bug 150',      phone_number: '+81 00 0100 0050', email: 'bug050@example.com' },
  { id: 151, name: 'Bug 151',      phone_number: '+81 00 0100 0051', email: 'bug051@example.com' },
  { id: 152, name: 'Bug 152',      phone_number: '+81 00 0100 0052', email: 'bug052@example.com' },
  { id: 153, name: 'Bug 153',      phone_number: '+81 00 0100 0053', email: 'bug053@example.com' },
  { id: 154, name: 'Bug 154',      phone_number: '+81 00 0100 0054', email: 'bug054@example.com' },
  { id: 155, name: 'Bug 155',      phone_number: '+81 00 0100 0055', email: 'bug055@example.com' },
  { id: 156, name: 'Bug 156',      phone_number: '+81 00 0100 0056', email: 'bug056@example.com' },
  { id: 157, name: 'Bug 157',      phone_number: '+81 00 0100 0057', email: 'bug057@example.com' },
  { id: 158, name: 'Bug 158',      phone_number: '+81 00 0100 0058', email: 'bug058@example.com' },
  { id: 159, name: 'Bug 159',      phone_number: '+81 00 0100 0059', email: 'bug059@example.com' },
  { id: 160, name: 'Bug 160',      phone_number: '+81 00 0100 0060', email: 'bug060@example.com' },
]

function getContacts(state, action) {
  // TODO: Ajax
  const contacts = [].concat(state.contacts)
  return Object.assign({}, state, { contacts: contacts.concat(initialContacts) })
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
  switch (action.type) {
    case Contact.GET_CONTACTS:
      return getContacts(state, action)
    case Contact.CREATE_CONTACT:
      return createContact(state, action)
    case Contact.UPDATE_CONTACT:
      return updateContact(state, action)
    case Contact.DELETE_CONTACTS:
      return deleteContacts(state, action)
    default:
      // console.log("action.type: " + action.type)
      return state
  }
}
