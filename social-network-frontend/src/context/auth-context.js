import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(null);
    const [tokenOperatingTime, setTokenOperatingTime] = useState(null);

    const login = (newToken, tokenTime) => {
        setTokenOperatingTime(new Date().getTime() + tokenTime);
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
        setTokenOperatingTime(null);
    };

    useEffect(() => {
        const checkTokenValidity = () => {
            if (tokenOperatingTime && new Date().getTime() > tokenOperatingTime) {
                logout();
                alert("The session time has expired =(. Please log in again.");
            }
        }

        const tokenValidityInterval = setInterval(checkTokenValidity, 1000);

        return () => clearInterval(tokenValidityInterval);
    }, [tokenOperatingTime]);

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};