import React from 'react'
import { Link, createBrowserRouter } from 'react-router-dom';

export default function TH1() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <h1>Hello World</h1>
                    <Link to="about">About Us</Link>
                </div>
            ),
        },
        {
            path: "about",
            element: <div>About</div>,
            children: [
                {
                    path: '/about',
                    element: <div>About Us</div>,
                },
                {
                    path: '/about/us',
                    element: <div>US</div>
                }, {
                    path: '/about/me',
                    element: <div>me</div>
                }]
        },
        {
            path: '/404',
            element: <div>404-Not Found</div>
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
