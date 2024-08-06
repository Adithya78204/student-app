import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (student) => {
    navigate('/update', { state: { student } });
  };

  const handleAddStudent = () => {
    navigate('/add');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_STUDENT', payload: id });
  };

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>
        Student List
      </Typography>
      <Button
        sx={{ marginBottom: '20px' }}
        variant="contained"
        color="primary"
        onClick={handleAddStudent}
      >
        Add Student
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Mark1</TableCell>
            <TableCell>Mark2</TableCell>
            <TableCell>Mark3</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.mark1}</TableCell>
              <TableCell>{student.mark2}</TableCell>
              <TableCell>{student.mark3}</TableCell>
              <TableCell>{student.total}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleUpdate(student)}
                  sx={{ marginRight: '10px' }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        sx={{ marginTop: '30px' }}
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
};

export default StudentList;
