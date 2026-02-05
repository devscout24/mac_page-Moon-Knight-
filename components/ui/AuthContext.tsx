// 'use client'

// import { createContext, useContext, useState, ReactNode } from 'react';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   login: (callback?: () => void) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   function login(callback?: () => void) {
//     setIsAuthenticated(true);
//     if (callback) callback();
//   }

//   function logout() {
//     setIsAuthenticated(false);
//   }

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }
//   return context;
// }
