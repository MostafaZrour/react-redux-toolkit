import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => [...state, action.payload],
    deleteUser: (state, action) => state.filter((user) => user.id !== action.payload),
    updateUser: (state, action) => {
      state.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    },
  },
});

export const {addUser , deleteUser , updateUser} = UserSlice.actions ;