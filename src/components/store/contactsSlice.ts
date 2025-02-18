import { createSlice } from '@reduxjs/toolkit'


type Contact = {
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
        }
    }
})

export const {addContact} = contactsSlice.actions;
export default contactsSlice.reducer;