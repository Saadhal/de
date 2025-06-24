import { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext();

export function SessionProvider({children}){
    const [session, setSession] = useState(() =>{
        const saved = localStorage.getItem('login');
        return saved ? {login: saved} : null;
    });

    const loginUser = (login) => {
        localStorage.setItem('login', login);
        setSession({login});
    };

    const logoutUser = () => {
        localStorage.removeItem('login');
        setSession(null);
    };

    useEffect(() => {
        const syncSession = () => {
            const saved = localStorage.getItem('login');
            setSession(saved ? {login: saved} : null);
        };
        window.addEventListener('storage', syncSession);
        return () => window.removeEventListener('storage', syncSession);
    }, []);

    return (
        <SessionContext.Provider value={{session, loginUser, logoutUser}}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    return useContext(SessionContext);
}