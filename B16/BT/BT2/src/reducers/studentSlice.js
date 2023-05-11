import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

export const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    addCourseToStudent: (state, action) => {
      const student = state.students.find(
        (student) => student.id === action.payload.studentId
      );
      student.courses.push(action.payload.course);
    },
    deleteCourseFromStudent: (state, action) => {
      const student = state.students.find(
        (student) => student.id === action.payload.studentId
      );
      student.courses = student.courses.filter(
        (course) => course.id !== action.payload.courseId
      );
    },
  },
});

export const { addStudent, deleteStudent, addCourseToStudent, deleteCourseFromStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
