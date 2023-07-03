import { Delete, Edit, Visibility } from "@mui/icons-material";
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
import { Link } from "react-router-dom";

const List = () => {
  return (
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
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Shubham</TableCell>
              <TableCell align="center">Shubhin151@gmail.com</TableCell>
              <TableCell align="center">
                <Tooltip title="View">
                  <IconButton>
                    <Link to="/view">
                      <Visibility color="primary" />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton>
                    <Link to="/edit">
                      <Edit />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <Delete color="secondary" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
