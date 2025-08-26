import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        const savedToken = localStorage.getItem('token');
        return savedUser && savedToken ? JSON.parse(savedUser) : null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    });

    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', authToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    // Check if token is valid (you can add more validation here)
    const isAuthenticated = () => {
        return !!token && !!user;
    };

    useEffect(() => {
        const handleStorage = (event) => {
            if (event.key === 'user' && !event.newValue) {
                setUser(null);
                setToken(null);
            }
            if (event.key === 'token' && !event.newValue) {
                setUser(null);
                setToken(null);
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
