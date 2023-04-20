import React from 'react'
import ProtectedGroup from './ProtectedGroup';

export default function PrivateGroup() {
    const router = createBrowserRouter([
        {
            path: '/private-group',
            element: <PrivateGroup />
        },
        {
            path: '/private-group',
            element: <ProtectedGroup isMember={false}><PrivateGroup /></ProtectedGroup>
        }
    ]);
    return (
        <div>
            <RouterProvider
                router={router}
            >
            </RouterProvider>

        </div>
    )
}
