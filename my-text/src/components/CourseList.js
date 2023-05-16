import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCourseFromStudent } from '../reducers/studentSlice';

function CourseList({ courses, studentId }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteCourseFromStudent({
        studentId,
        courseId: id,
      })
    );
  };

  return (
    <div> 
      <p>Danh sách môn học</p>
    <ul>
      
      {courses.map((course) => (
        <li key={course.id}>
          {course.name} <button onClick={() => handleDelete(course.id)}>Xóa</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default CourseList;
