"use client";

import { configureStore } from "@reduxjs/toolkit";
import envSlice from "./env/env.slice";

const store = configureStore({
  reducer: {
    env: envSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
