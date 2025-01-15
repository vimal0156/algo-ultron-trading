import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { publicRoutes, protectedRoutes } from '@/routes';
import { ChatButton } from '@/components/chat/ChatButton';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  
  const routes = [
    ...publicRoutes,
    // Add protected routes if authenticated
    ...(isAuthenticated ? protectedRoutes : []),
    // Redirect to login if accessing protected routes while not authenticated
    {
      path: '*',
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />,
    },
  ];

  return useRoutes(routes);
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <ChatButton />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;