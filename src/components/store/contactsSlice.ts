import { createSlice } from '@reduxjs/toolkit'


type Contact = {
    id: number;
    nome: string;
    numero: number;
    email: string;
}

interface ContactsState{
    value: Contact[];
}

const initialState: ContactsState = {
    value: [],
}
export const contactsSlice = createSlice({


    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.value.push(action.payload);
        },
        editContact: (state, action) =>{
            state.value = 
        } ,
        removeContact: (state, action) =>{
            state.value = state.value.filter((i) => i.id != action.payload)
        }
    }
})

export const {addContact, removeContact} = contactsSlice.actions;
export default contactsSlice.reducer;