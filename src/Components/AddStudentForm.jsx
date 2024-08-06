import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addStudent } from '../Actions/StudentActions';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: Date.now(), 
    name: '',
    age: '',
    gender: '',
    class: '',
    mark1: '',
    mark2: '',
    mark3: '',
    total: '',
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };



const handleSave = () => {
    const totalMarks = Number(student.mark1) + Number(student.mark2) + Number(student.mark3);
    const studentDetails = { ...student, total: totalMarks };
    dispatch(addStudent(studentDetails));
    navigate('/students');
  };

  const handleCancel = () => {
    navigate('/students');
  };

  return (
    
        <Container maxWidth="sm" sx={{ mt: 4 }}>
     
        
          <Typography variant="h4" align="center" gutterBottom>
            Add Student
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap:"2" }}>
         
            <TextField
              label="Name"
              name="name"
              value={student.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={student.age}
              onChange={handleChange}
              fullWidth
              margin="normal"
              inputProps={{ min: 0, max: 120 }}
              required="true"
            />
            <TextField
              label="Gender"
              name="gender"
              value={student.gender}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Class"
              name="class"
              value={student.class}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mark1"
              name="mark1"
              type="number"
              value={student.mark1}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mark2"
              name="mark2"
              type="number"
              value={student.mark2}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mark3"
              name="mark3"
              type="number"
              value={student.mark3}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Total"
              name="total"
              type="number"
              value={student.total}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSave}
            sx={{ flex: 1 }}
          >
            Save
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleCancel}
            sx={{ flex: 1 }}
          >
            Cancel
          </Button>
        </Box>
         
          </Box>
        
    </Container>
  );
};

export default AddStudent;
