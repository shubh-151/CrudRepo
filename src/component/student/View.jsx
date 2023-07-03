import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,    
  } from "@mui/material";

const View =()=>{
    return(
        <>
        <Box textAlign="center" p={2}>
        <Typography variant="h6">Student List</Typography>
      </Box>

<TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        </>
    );
}

export default View;