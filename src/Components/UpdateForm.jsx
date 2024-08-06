import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../Actions/StudentActions';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateForm = () => {
    const { state } = useLocation();
    const student = state?.student;
  const [formData, setFormData] = useState(student || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const totalMarks = Number(formData.mark1) + Number(formData.mark2) + Number(formData.mark3);
    const studentUpdate = { ...formData, total: totalMarks };
    dispatch(updateStudent(studentUpdate));
    navigate('/students');
  };

  const handleCancel = () => {
    navigate('/students');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Update Student
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column',  }}>
        <TextField 
          label="Name" 
          name="name" 
          value={formData.name || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Age" 
          name="age" 
          type="number" 
          value={formData.age || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Gender" 
          name="gender" 
          value={formData.gender || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Class" 
          name="class" 
          value={formData.class || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Mark1" 
          name="mark1" 
          type="number" 
          value={formData.mark1 || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Mark2" 
          name="mark2" 
          type="number" 
          value={formData.mark2 || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Mark3" 
          name="mark3" 
          type="number" 
          value={formData.mark3 || ''} 
          onChange={handleChange} 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Total" 
          name="total" 
          type="number" 
          value={formData.total || ''} 
          InputProps={{ readOnly: true }} 
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

export default UpdateForm;
