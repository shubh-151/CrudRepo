import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const  Edit = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname:"",
    email:""
  });
  const handleClick =()=>{
    navigate("/");
  }
  useEffect(() => {
    const getStudent = async () => {
      try {
        const Student = await axios.get(`http://localhost:3004/students/${id}`);
        //console.log(Student.data);
        setStudent(Student.data);
      } catch (error) {
        console.log("something went wrong");  
      }
    }
    getStudent();
  },[id])
  const onFormSubmit= async (e)=>{
    e.preventDefault(); 
    try {
      await axios.put(`http://localhost:3004/students/${id}`, student); 
      navigate("/");   
    } catch (error) {
      console.log("something went wrong"); 
    }
  }
  const onTextFieldChange=(e)=>{
    setStudent({
      ...student,[e.target.name]:e.target.value
    })
  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  value={student.id}
                  id="id"
                  
                  autoFocus
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  value={student.stuname}
                  required
                  fullWidth
                  
                  onChange={(e) => onTextFieldChange(e)}
                  id="stuname"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  value={student.email}
                  required
                  fullWidth                  
                  onChange={(e) => onTextFieldChange(e)}
                  id="email"
                  label="Email Address"
                />
              </Grid>
              
            </Grid>
            <Box m={3}>
              <Button type="button" variant="contained" color="primary" onClick={(e)=> onFormSubmit(e)}>
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
