import { Box, Button, Divider, ListItem, Typography } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
// import { edit, remove } from "../features/todos/todoSlice";


const ListItemDetail = ({todo}) => {


    const removeTodo = (id) =>{
        // dispatch(remove(id))
    }

    const editTodo =(todo)=>{
        // dispatch(edit(todo))
    }
    
    const dispatch = useDispatch()
  return (
    <>
      <ListItem>
        <Box flexGrow={1}>
          <Typography variant="h6">title : </Typography>
          <Typography variant="body 1">description</Typography>
        </Box>
        <Box>
          <Button
          onClick={()=>editTodo(todo)}
            sx={{ borderRadius: "0px" }}
            variant="contained"
            color="warning"
            size="small"
            endIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            sx={{ borderRadius: "0px" }}
            variant="contained"
            color="error"
            size="small"
            endIcon={<DeleteOutlineIcon />}
            onClick={()=>removeTodo(todo.id)}
          >
            Delete
          </Button>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListItemDetail;
