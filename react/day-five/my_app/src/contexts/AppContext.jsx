
import { createContext, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvoder = (props) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <AppContext.Provider value={{ theme: theme, toggle:toggleTheme }} >
            {props.children}
        </AppContext.Provider>
    )
}