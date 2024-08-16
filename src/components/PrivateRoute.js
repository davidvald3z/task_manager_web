import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const validateSession = async () => {
      const accessToken = localStorage.getItem('access-token');
      const client = localStorage.getItem('client');
      const uid = localStorage.getItem('uid');

      if (accessToken && client && uid) {
        try {
          const response = await axios.get('http://localhost:3000/auth/validate_token', {
            headers: {
              'access-token': accessToken,
              'client': client,
              'uid': uid
            }
          });

          if (response.status === 200) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error('Token validation failed:', error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    validateSession();
  }, []);

  if (isAuthenticated === null) {
    // Mientras se valida la sesión, podrías mostrar un spinner o una pantalla de carga
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
