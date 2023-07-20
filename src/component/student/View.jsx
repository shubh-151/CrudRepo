import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, } from "react-router-dom";

const View = () => {
  const [student, setStudent] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();
  

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

  const handleClick =()=>{
    navigate("/");
  }

 
  return (
    <>
      <Box textAlign="center" p={2}>
        <Typography variant="h6">Student List</Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default View;
