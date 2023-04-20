import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    function handleClick() {
        // Code xử lý đăng nhập
        navigate('/home');
    }
    return (
        <div>
            Home
        </div>
    )
}
