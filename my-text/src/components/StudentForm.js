import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addStudent } from '../reducers/studentSlice';

function StudentForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(
        addStudent({
          id: nanoid(),
          name,
          courses: [],
        })
      );
      setName('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <h1>nhập thông tin học sinh</h1>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Thêm</button>
    </form>
  );
}

export default StudentForm;
