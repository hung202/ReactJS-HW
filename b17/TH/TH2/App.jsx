import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [post, setPost] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/todos');
        setPost(result.data);
      } catch (error) { }
    };

    getData();
  }, []);

  return (
    <div className='p-4'>
      <div>This is todos:</div>
      {post?.map((p) => {
        return (
          <div key={p.id}>{p?.id}-{p?.todo}</div>
        );
      })}
    </div>
  );
}