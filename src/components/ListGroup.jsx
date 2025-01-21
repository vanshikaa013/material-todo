import { List, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ListItemDetail from "./ListItemDetail";
import { useEffect } from "react";
import {getTodos} from "../features/todos/todoSlice"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const ListGroup = () => {
  const {allTodos , isLoading} = useSelector((state) => state.todos); 
  
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getTodos())
    
  },[])
  if(isLoading){
    return (
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '', // Adjust height as needed
  }}
>
  <CircularProgress />
</Box>

    );
  }

  return (
    <List>
       {allTodos?.length > 0 ? (
        allTodos.map((todo , index) => <ListItemDetail key={index} todo={todo} />)
      ) : (
        <Typography
  variant="h6"
  color="textSecondary"
  sx={{
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
  }}
>
  No todos available
</Typography>
      )}

    {/* <ListItemDetail/> */}
    </List>
  );
};

export default ListGroup;
