import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todoService";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isError: false,
    alltodos: [
      // { id: 1, title: "Todo Title", description: " Todo Description" },
    ],
    edit: {
      todo: {},
      isEdit: false,
    },
  },
  reducers: {
    // remove: (state, action) => {
    //   return {
    //     ...state,
    //     alltodos: state.alltodos.filter((item) => item.id !== action.payload),
    //   };
    // },
    // add: (state, action) => {
    //   return {
    //     ...state,
    //     alltodos: [...state.alltodos, action.payload],
    //   };
    // },
    // edit : (state , action) =>{
    //     return{
    //         ...state,
    //         edit: {
    //             todo : action.payload,
    //             isEdit: true,
    //         }
    //     }
    // },
    // update : (state , action)=>{
    //   return{
    //     ...state,
    //     alltodos : state.alltodos.map((item)=> item.id === action.payload.id ? action.payload : item)
    //   }
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.alltodos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;

//GET DATA FROM SERVER

export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
    fetchTodos()
    
  } catch (error) {
    console.log(error)
    
  }
});
