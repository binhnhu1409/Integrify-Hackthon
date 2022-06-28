import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User} from '../types/User'
// import { FetchProductsParams } from "../types/category";
// import { Product, updateActionType } from "../types/product";
import axios from "axios";

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const data = await axios.get(`http://localhost:5050/api/v1/users`);
    // const result = await data.json();
    return await data;
  } catch (error: any) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    calcUserSalary: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log('users...:',action.payload);
    });
  },
});

export const userReducer = userSlice.reducer;
export const { calcUserSalary } = userSlice.actions;
