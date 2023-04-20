import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleLogin() {
        setIsLoggedIn(true);
        navigate('/');
    }
    return (
        <div>
            <div>
                <h1>Trang đăng nhập</h1>
                <p>Đây là trang đăng nhập</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Tài khoản" />
                    <input type="password" placeholder="Mật khẩu" />
                    <button type="submit" onClick={handleLogin}>Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}
