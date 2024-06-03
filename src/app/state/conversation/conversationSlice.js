/* eslint-disable no-unsafe-optional-chaining */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    currentConversation: null,
    messages: [],
  },
  reducers: {
    startConversation: (state, action) => {
      state.currentConversation = action.payload.conversation_id;
      // console.log('startConversation', action.payload);
      state.messages = [
        {
          id: uuidv4(),
          role: 'user',
          message: action.payload.question,
        },
      ];
    },
    initializeConversation: (state, action) => {
      state.currentConversation = action.payload.conversation_id;
      // console.log('initializeConversation', action.payload.messages);
      state.messages = action.payload.messages;
    },
    addMessage: (state, action) => {
      const { role, message, id } = action.payload;
      // console.log('addMessage', action.payload);
      const lastMessage = state.messages[state.messages?.length - 1];
      if (lastMessage && lastMessage.role === role) {
        lastMessage.message += message;
      } else {
        state.messages.push({
          id: id || uuidv4(),
          role,
          message,
        });
      }
    },
  },
});

export const { startConversation, addMessage, initializeConversation } =
  conversationsSlice.actions;

export default conversationsSlice.reducer;
