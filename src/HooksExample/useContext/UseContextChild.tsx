import { useContext } from "react"
import { ThemeContext } from "./UseContextParent"

export default function UseContextChild() {
    const { theme, setTheme }: any = useContext(ThemeContext)
    return (
        <>
            {theme}
            <button onClick={() => setTheme((prev: string) => prev == 'dark' ? 'light' : 'dark')}>change theme</button>
        </>
    )
}