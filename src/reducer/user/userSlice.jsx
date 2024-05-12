import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://6639f5401ae792804bed7043.mockapi.io/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId) => {
    const response = await axios.get(`${apiURL}/${userId}`);
    return response.data;
  }
);

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const response = await axios.post(apiURL, user);
  return response.data;
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    const response = await axios.delete(`${apiURL}/${userId}`);
    return userId;
  }
);

export const editUser = createAsyncThunk("users/editUser", async (user) => {
  const response = await axios.put(`${apiURL}/${user.id}`, user);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          (state.loading = true), (state.error = null);
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          if (action.type.includes("fetchUsers")) {
            state.users = action.payload;
          } else if (action.type.includes("fetchUserById")) {
            state.currentUser = action.payload;
          } else if (action.type.includes("createUser")) {
            state.users.push(action.payload);
          } else if (action.type.includes("editUser")) {
            const index = state.users.findIndex(
              (user) => user.id === action.payload.id
            );
            if (index !== -1) {
              state.users[index] = action.payload;
            }
          } else if (action.type.includes("deleteUser")) {
            state.users = state.users.filter(
              (user) => user.id !== action.payload
            );
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default userSlice.reducer;
