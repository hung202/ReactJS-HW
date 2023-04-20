import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    setTimeout(() => {
        if (!isAdmin) {
            return <Navigate to="/" />;
        }
    }, 3000);

    return (
        <div>
            <h1>Admin Page</h1>
        </div>
    );
}
