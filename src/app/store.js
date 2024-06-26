import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import userReducer from '@/app/state/user/userSlice';
import userApiSlice from '@/app/state/user/userApiSlice';
import forumApiSlice from '@/app/state/forum/forumApiSlice';
import conversationApiSlice from '@/app/state/conversation/conversationApiSlice';
import forumReducer from '@/app/state/forum/forumSlice';
import conversationsReducer from '@/app/state/conversation/conversationSlice';

const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [forumApiSlice.reducerPath]: forumApiSlice.reducer,
    [conversationApiSlice.reducerPath]: conversationApiSlice.reducer,
    user: userReducer,
    forum: forumReducer,
    conversations: conversationsReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      userApiSlice.middleware,
      forumApiSlice.middleware,
      conversationApiSlice.middleware,
      thunk,
    ]),
  devTools: true,
});

export default store;
