import { createBrowserRouter } from "react-router";
import App from "../Layout/App";
import HomePage from "../../Feature/Home/HomePage";
import ActivityDashboard from "../../Feature/activites/Dashboard/ActivityDashboard";
import ActivityForm from "../../Feature/activites/Form/ActivityForm";
import ActivityDetails from "../../Feature/activites/Details/ActivityDetails";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key='createActivity' /> },
            { path: 'manage/:id', element: <ActivityForm key='manage' /> }

        ],
    },
]);