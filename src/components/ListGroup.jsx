import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ListItemDetail from "./ListItemDetail";
import { useEffect } from "react";
import {getTodos} from "../features/todos/todoSlice"

const ListGroup = () => {
  const {allTodos} = useSelector((state) => state.todos); 
  
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getTodos())

  },[])
  return (
    <List>
      {/* {
        allTodos.map((todo) => <ListItemDetail key={todo.id} todo={todo} />)
    } */}

    <ListItemDetail/>
    </List>
  );
};

export default ListGroup;
