import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from '../screens/Dashboard'
import EditProfile from '../screens/EditProfile'
import Devices from '../screens/Devices'

const router = createBrowserRouter([
    {
        path: '/dashboard/:authId',
        Component: Dashboard,
    },
    {
        path: '/dashboard/:authId/edit-profile',
        Component: EditProfile,
    },
    {
        path: '/dashboard/:authId/devices',
        Component: Devices,
    },
])

export const DashboardRoutes = () => {
    return <RouterProvider router={router} />
}
