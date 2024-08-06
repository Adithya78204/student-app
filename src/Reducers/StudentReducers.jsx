import { ADD_STUDENT, UPDATE_STUDENT } from '../Actions/StudentActions';

const initialState = [
    { id: 1, name: 'John Doe', age: 20, gender: 'Male', class: '12', mark1: 85, mark2: 90, mark3: 95, total: 270 },
];

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.payload];
    case UPDATE_STUDENT:
      return state.map(student =>
        student.id === action.payload.id ? action.payload : student
      );
      case 'DELETE_STUDENT':
        return state.filter((student) => student.id !== action.payload
    );
    default:
      return state;
  }
};

export default studentReducer;
