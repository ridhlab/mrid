"use client";

import { useTheme } from "next-themes";
import React from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { useMounted } from "@/hooks/useMounted";

export default function ButtonTheme() {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    const hasMounted = useMounted();

    function toggleTheme() {
        return currentTheme === "light" ? setTheme("dark") : setTheme("light");
    }

    if (!hasMounted)
        return (
            <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
        );

    return (
        <button
            onClick={toggleTheme}
            className="transition-all rounded-full p-1 hover:text-emerald-600"
        >
            {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
    );
}
