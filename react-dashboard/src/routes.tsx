import { createBrowserRouter } from 'react-router'
import Dashboard from './screens/Dashboard'
import EditProfile from './screens/EditProfile'

const router = createBrowserRouter([
    {
        path: '/dashboard/:authId',
        Component: Dashboard,
    },
    {
        path: '/dashboard/:authId/edit-profile',
        Component: EditProfile,
    },
])
