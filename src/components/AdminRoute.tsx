import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface AdminRouteProps {
    children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div style={{ 
                height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg-color)', color: 'var(--text-main)'
            }}>
                <div className="spinner"></div>
                <p style={{ marginLeft: '12px', fontWeight: 600 }}>Verifying Admin Access...</p>
            </div>
        );
    }

    if (!user || !user.isAdmin) {
        console.warn('Unauthorized access attempt to admin route');
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default AdminRoute;
