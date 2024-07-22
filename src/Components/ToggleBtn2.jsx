import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext';

const ToggleBtn = () => {
    const {isDarkMode, setIsDarkMode}= useTheme();

    return (
        <div className={`bg-white dark:bg-slate-500 rounded-full w-11 h-5 flex ${isDarkMode ? "justify-end" : "justify-start"}`}>
            <div className='h-5 w-5 bg-black dark:bg-white rounded-full cursor-pointer' onClick={() => setIsDarkMode(!isDarkMode) }></div>
        </div>
    )
}

export default ToggleBtn