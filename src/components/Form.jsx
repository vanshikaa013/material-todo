import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/todos/todoSlice";

const Form = () => {

  const edit = useSelector((state)=> state.todos.edit) 
  // console.log(edit)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addTodo = (title, description) => {
    dispatch(
      add({
        id: crypto.randomUUID(),
        title: title,
        description: description,
      })
    );
  };

  useEffect(()=>{
    setTitle(edit.todo.title)
    setDescription(edit.todo.description)
  },[edit])

  const handlesubmit = (e) => {
    e.preventDefault(); 
    edit.isEdit ? 
    dispatch(update({id : edit.todo.id, title,description})):
    addTodo(title,description)
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={(e) => handlesubmit(e)} style={{ margin: "20px 0px" }}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        fullWidth
        variant="outlined"
        label="Enter title"
      ></TextField>
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        sx={{ margin: "10px 0px" }}
        variant="outlined"
        label="Enter Description"
        multiline
        rows={5}
        fullWidth
      ></TextField>

      <Button type="submit" variant="contained" fullWidth color="success">
        Save
      </Button>
    </form>
  );
};

export default Form;
