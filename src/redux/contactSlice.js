import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { addContact, deleteContact, fetchContacts } from './operations';


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
    items: [],
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
      const index = state.items.findIndex(
        ({id}) => id === action.payload.id
      );
      state.items.splice(index, 1);
      Notify.success(`Contact removed from list!`);
    },
  },
});

export const contactReducer = contactSlice.reducer;
