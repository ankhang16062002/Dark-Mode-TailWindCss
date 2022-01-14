import {useState, useEffect} from 'react'

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(() => localStorage.theme === "dark")

    //dung de set khi click vao mat troi
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode)
    }

    //lang nghe isDarkMode thay doi va sua trong localStorage and html
    useEffect(() => {
        const html = window.document.documentElement
        const prev = isDarkMode ? 'light' : 'dark'
        html.classList.remove(prev)
        const next = isDarkMode ? 'dark' : 'light'
        html.classList.add(next)
        localStorage.setItem('theme', next)
    }, [isDarkMode])

    return (
       {isDarkMode, toggleDarkMode}
    )
}

export default useDarkMode
