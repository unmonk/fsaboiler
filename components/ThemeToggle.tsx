"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <button
          className="btn mx-4 text-black hover:text-red-800"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon size={24} />
        </button>
      ) : (
        <button
          className="btn mx-4 text-white hover:text-red-800"
          onClick={() => setTheme("light")}
        >
          <SunIcon size={24} />
        </button>
      )}
    </>
  );
}

export default ThemeToggle;
