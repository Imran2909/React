import { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthContextProvoder = (props) => {
    const [auth, setAuth] = useState(false);
    const toggleAuth = () => {
        setAuth(!auth)
    }

    return (
        <AuthContext.Provider value={{ isAuth:auth, toggle:toggleAuth }} >
            {props.children}
        </AuthContext.Provider>
    )
}


