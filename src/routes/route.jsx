import Home from '../pages/Home';
import Stats from '../pages/Stats';
import Timeline from '../pages/Timeline';
import FriendDetail from '../pages/FriendDetail';
import MainLayout from '../layouts/MainLayout';
import { createBrowserRouter, Navigate } from 'react-router';
import NotFound from '../pages/NotFound';

const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "home",
                element: <Navigate to="/" replace />

            },
            {
                path: "stats",
                Component: Stats,
            },
            {
                path: "timeline",
                Component: Timeline,

            },
            {
                path: "friend/:id",
                Component: FriendDetail,

            }

        ],
        errorElement:<NotFound/> 

    },
]);

export default Router;