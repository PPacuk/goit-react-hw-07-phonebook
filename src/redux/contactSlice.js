import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactInitialState = [];

const handlePending = (state, action) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactInitialState,
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
      Notify.success(`Contact removed from list!`);
    },
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },

  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: name,
  //           number: number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.items.splice(index, 1);
  //     Notify.success(`Contact removed from list!`);
  //   },
  // },
});

// export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
