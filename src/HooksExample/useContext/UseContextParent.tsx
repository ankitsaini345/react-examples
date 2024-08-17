import { createContext, useState } from "react";
import UseContextChild from "./UseContextChild";

export const ThemeContext = createContext({});

export default function UseContextParent() {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UseContextChild />
        </ThemeContext.Provider>
    )
}
