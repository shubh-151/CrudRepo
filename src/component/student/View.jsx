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
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1 </TableCell>
              <TableCell align="center">shubham</TableCell>
              <TableCell align="center">ss4345@gmail.com</TableCell>
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
                //onClick={(e) => onFormSubmit(e)}
              >
                Back to Home
              </Button>
            </Box>
        </>
    );
}

export default View;