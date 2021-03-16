
const initialState = {
    contacts: [],
    contact: {}
}

const ContactReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_CONTACTS':
            return {
                ...state,
                contacts: action.payload
            }

        case 'GET_CONTACT':
            return {
                ...state,
                contact: action.payload
            }

        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }

        case 'UPDATE_CONTACT':
            console.log(action.payload)
            return {
                ...state,
                contacts: state.contacts.map(contact => (contact.id === action.payload.id) ? contact = action.payload : contact)
            }
            
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
    
        default:
            return state
    }
}



export default ContactReducer