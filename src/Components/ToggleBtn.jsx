import React from 'react'
import { useTheme } from '../Context/ThemeContext';

export default function ThemeBtn() {
    const {isDarkMode, setIsDarkMode} = useTheme();

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={()=>setIsDarkMode(!isDarkMode)}
                checked={isDarkMode===true}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    );
}


