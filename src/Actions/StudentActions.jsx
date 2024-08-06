

export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

export const addStudent = (student) => ({
  type: 'ADD_STUDENT',
  payload: student,
});

export const updateStudent = (student) => ({
  type: 'UPDATE_STUDENT',
  payload: student,
});
export const deletestudent = (student) => ({
  type: 'DELETE_STUDENT',
  payload: student,
})
