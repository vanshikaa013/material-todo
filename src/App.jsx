import React from "react";
import Navbar from "./components/Navbar";
import { Container, Typography } from "@mui/material";
import Form from "./components/form";
import ListGroup from "./components/ListGroup";

const App = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ padding: "80px 0px" }}>
        <Typography align="center" variant="h3">
          Redux Todo
        </Typography>
        <Form/>
      </Container>
      <ListGroup/>
    </>
  );
};

export default App;
