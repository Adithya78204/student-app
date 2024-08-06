import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import StudentList from './Components/StudentList';
import AddStudentForm from './Components/AddStudentForm';
import UpdateForm from './Components/UpdateForm';
import { Provider } from 'react-redux';
import store from './Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudentForm />} />
          <Route path="/update" element={<UpdateForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;