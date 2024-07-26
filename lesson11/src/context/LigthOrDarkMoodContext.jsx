
import { createContext, useState, useEffect } from "react";

export const LigtOrDarContext = createContext()


export const LightOrDarkProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [bgColor, setBgColor] = useState('bg-red-500');
    const addDark = () => {
        setTheme('dark')
    }
    const addLight = () => {
        setTheme('light')
    }
    const handleAddBgColor = (color) => {
        setBgColor(color)
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <LigtOrDarContext.Provider
            value={{ addDark, addLight, bgColor, setBgColor, handleAddBgColor }}
        >
            {children}
        </LigtOrDarContext.Provider>
    )
}