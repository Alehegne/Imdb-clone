"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // Ensure the component is mounted before rendering the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering the select until after mounting
  if (!mounted) {
    return;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    mounted &&
    (currentTheme === "dark" ? (
      <MdOutlineLightMode
        onClick={() => setTheme("light")}
        className="text-[40px] p-1 mr-1"
      />
    ) : (
      <MdDarkMode
        onClick={() => setTheme("dark")}
        className="text-[40px] p-1 mr-1"
      />
    ))
  );
};

export default ThemeSwitch;
