const UserDetails = React.lazy(() => import("./ReactRouter/UserDetails"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <div>
                        {" "}
                        HOME<Link to="/user-details">User Detail</Link>{" "}
                    </div>
                ),
            },
            {
                path: "/user-details",
                element: <React.Suspense fallback="loading"><UserDetails /></React.Suspense>,
            },

        ]
    }
]);
export default router