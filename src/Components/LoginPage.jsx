import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ admin: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.admin === 'admin' && credentials.password === 'password') {
      navigate('/students');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 0,
      }}
    >
      <Card
        sx={{
          maxWidth: 250,
          width: '100%',
          padding: 2,
          boxShadow: 2,
        }}
      >
        <CardContent>
          <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Admin"
              name="admin"
              value={credentials.admin}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
