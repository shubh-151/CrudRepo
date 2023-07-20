import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudent();
  },[]);

  const handleDelete = async id =>{
    await axios.delete(`http://localhost:3004/students/${id}`);
    var newstudent = students.filter((item)=>{
      console.log(item);
      return item.id !==id;
    })
    setStudents(newstudent);
  }

  const getAllStudent = async () => {
    try {
      const Students = await axios.get("http://localhost:3004/students");
      //console.log(Students.data);
      setStudents(Students.data)
    } catch (error) {
      console.log("something went wrong");
    }
  };
  return (
    <>
      <Box textAlign="center" p={2}>
        <Typography variant="h6">Student List </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i+1}</TableCell>
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <Visibility color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <Edit />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton>
                        <Delete color="secondary" onClick={(e)=>handleDelete(student.id)}/>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
