import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todoService";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isSuccess : false ,
    isError: false,
    allTodos: [
      // { id: 1, title: "Todo Title", description: " Todo Description" },
    ],
    edit: {
      todo: {},
      isEdit: false,
    },
  },
  reducers: {
    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item._id !== action.payload),
      };
    },
    add: (state, action) => {
      return {
        ...state,
        allTodos: [...state.allTodos, action.payload],
      };
    },
    edit: (state, action) => {
      state.edit = {
        todo: action.payload, // Ensure action.payload is the todo object
        isEdit: true,
      };
    },
    update : (state , action)=>{
      return{
        ...state,
        allTodos : state.allTodos.map((item)=> item.id === action.payload.id ? action.payload : item)
      }
    }
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
        state.allTodos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {edit , add , remove , update} = todoSlice.actions;

export default todoSlice.reducer;

//GET DATA FROM SERVER

export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
   return await fetchTodos()
    
  } catch (error) {
    console.log(error)
    
  }
});
