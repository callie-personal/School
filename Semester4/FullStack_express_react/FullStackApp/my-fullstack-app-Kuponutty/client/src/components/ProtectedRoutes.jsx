import { Navigate, Outlet } from 'react-router-dom';
import authService from '../../services/authService.js';

const ProtectedRoutes = () => {
    const isAuthenticated = sessionStorage.getItem('isLoggedIn') === 'true';
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;