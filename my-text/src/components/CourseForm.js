import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addCourseToStudent } from '../reducers/studentSlice';

function CourseForm({ studentId }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(
        addCourseToStudent({
          studentId,
          course: {
            id: nanoid(),
            name,
          },
        })
      );
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter course name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Thêm môn học</button>
    </form>
  );
}

export default CourseForm;
