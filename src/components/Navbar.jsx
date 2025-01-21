import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor:"white"}} >
        <Toolbar>
            <Typography variant='h6' sx={{color:"black"}} flexGrow={1}>
                Redux Todo
            </Typography>
            <Button endIcon={<ContrastIcon/>} variant="contained" size="small">
                Change Theme
            </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar