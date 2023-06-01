"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <button className="btn mx-4" onClick={() => setTheme("dark")}>
          <MoonIcon className="text-black hover:text-red-800" />
        </button>
      ) : (
        <button className="btn mx-4" onClick={() => setTheme("light")}>
          <SunIcon className="text-white hover:text-red-800" />
        </button>
      )}
    </>
  );
}

export default ThemeToggle;
