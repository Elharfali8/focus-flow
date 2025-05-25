// components/TopBar.tsx
"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function TopBar() {
    const [darkMode, setDarkMode] = useState(false);
    const { setTheme } = useTheme()

  useEffect(() => {
    if (darkMode) {
        setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-zinc-800 border-b dark:border-zinc-700">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
}
export default TopBar;