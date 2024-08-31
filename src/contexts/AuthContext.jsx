import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Check if the user is an admin (in a real app, this would be done server-side)
    if (userData.email === "admin@example.com" && userData.password === "admin123") {
      setUser({ ...userData, isAdmin: true });
    } else {
      setUser(userData);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
