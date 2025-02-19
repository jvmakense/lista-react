import { createSlice } from '@reduxjs/toolkit'


type Contact = {
    id: number;
    nome: string;
    numero: number;
    email: string;
}

interface ContactsState{
    value: Contact[];
    contact: Contact
}

const initialState: ContactsState = {
    value: [],
    contact: {
        id: 0,
        nome: '',
        numero: 0,
        email: ''
    }
}
export const contactsSlice = createSlice({


    name: 'contacts',
    initialState,
    reducers: {
        updateContact: (state, action) =>{
            const target = action.payload.target;
            state.contact ={
                ...state.contact, [target.id]: target.value
            }
        },
        addContact: (state) => {
            state.value.push(state.contact);
            state.contact.id = state.contact.id + 1;
        },
        editContact: (state, action) =>{
            const proseguir = confirm('Deseja editar os dados no formulário ao contato ${action.payload}?'
            )
            if (proseguir == true) {
                state.value = state.value.map((i)=> i.id == action.payload ? state.contact : i);
            }
        } ,
        removeContact: (state, action) =>{
            state.value = state.value.filter((i) => i.id != action.payload)
        }
    }
})

export const {addContact, removeContact ,editContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;