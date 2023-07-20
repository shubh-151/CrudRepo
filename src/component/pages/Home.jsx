import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState } from "react";
import List from "../student/List";

const Home = () => {
  const [status,setStatus]=useState(false);
  const [student,setStudent]=useState({
    stuname:"",
    email:""
  });

  const onFormSubmit= async (e)=>{
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:3004/students", student); 
      setStatus(true);     
    } catch (error) {
      console.log("something went wrong"); 
    }

  }


  const onTextFieldChange=(e)=>{
    setStudent({
      ...student,[e.target.name]:e.target.value
    })
    //console.log(student);
  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
        <Typography variant="h3">
          React CRUD with API call
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h6">Add student</Typography>
          </Box>

          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
