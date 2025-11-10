"use client";

import { useTheme } from "next-themes";
import { LIGHT_DARK_ENUM } from "@/enums/light-dark.enum";
import { getValueBasedThemeMode } from "@/utils";

export default function NavBar() {
    const { theme, setTheme } = useTheme();

    const valuesByTheme = {
        [LIGHT_DARK_ENUM.LIGHT]: <svg className="w-10 h-10 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" onClick={() => setTheme(LIGHT_DARK_ENUM.DARK)}><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> ,
        [LIGHT_DARK_ENUM.DARK]: <svg className="w-10 h-10 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" onClick={() => setTheme(LIGHT_DARK_ENUM.LIGHT)}><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>,
        [LIGHT_DARK_ENUM.UNDEFINED]: <svg className="w-10 h-10 cursor-pointer" viewBox="0 0 24 24" fill="none" onClick={() => window.location.reload()}><path d="M19 13.5C19 17.6421 15.6421 21 11.5 21C7.35786 21 4 17.6421 4 13.5C4 9.35786 7.35786 6 11.5 6H20M20 6L17 3M20 6L17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
    };
    
    return (
        <nav className="flex justify-between items-center fixed top-0 w-full border-black border-b shadow-[2px_2px_3px_1px_rgba(0,0,0,1)] z-[3] p-5" style={{ backgroundColor: 'light-dark(#ffffff, #121212)' }}>
            <a href={'./'}>
                <img src={'/pokemon_logo.png'} alt="Image Logo Pokemon" loading="eager" width={250} height={'auto'} />
            </a>
            <button className="flex">
                { 
                    getValueBasedThemeMode(theme, valuesByTheme)
                }
            </button>
        </nav>
    )
}