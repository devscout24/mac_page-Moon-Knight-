import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
   
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ name: 'Farhad' });
    }
  }, []);

  return { user };
};
