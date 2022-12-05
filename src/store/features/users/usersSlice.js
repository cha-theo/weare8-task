import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "users/getData",
    async (object, { getState, rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          "https://reqres.in/api/users"
        );
        return data;
      } catch (error) {
        rejectWithValue(error.response.data);
      }
    }
  );


// export const addUser = createAsyncThunk(
//     "users/addUser",
//     async (data) => {
//         try {
//             const response = await axios.post(data)
//             return response.data
//         }catch (error) {
//         return (error.response.data);
//       }
//     });

const usersSlice = createSlice({
    name: "users",
    initialState:{
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
     reducers: {},
     extraReducers: {
        [getUsers.pending]: (state, action) => {
          state.loading = true;
        },
        [getUsers.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.data = payload;
          state.isSuccess = true;
        },
        [getUsers.rejected]: (state, { payload }) => {
          state.loading = false;
          state.isSuccess = false;
          state.message = "failed";
        },
      },
    });
    
    export default usersSlice;