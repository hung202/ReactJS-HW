import React from 'react';
import { createBrowserRouter, useParams } from 'react-router-dom';
const UserProfile = () => {
    const router = createBrowserRouter([
        {
            path: '/user/:userId',
            element: <UserProfile />
        },
    ]);
    const params = useParams();
    const userId = params.userId;
    return (
        <div>
            Profile of User (ID = {userId})
        </div>
    )
}
export default UserProfile;