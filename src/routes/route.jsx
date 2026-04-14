import Home from '../pages/Home';
import Stats from '../pages/Stats';
import Timeline from '../pages/Timeline';
import Details from '../pages/Details';
import MainLayout from '../layouts/MainLayout';
import { createBrowserRouter, Navigate } from 'react-router';

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
                path: "Details/:id",
                Component: Details,

            }

        ],
        errorElement: <></>

    },
]);

export default Router;