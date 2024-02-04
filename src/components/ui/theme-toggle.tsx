"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Loader2 className="animate-spin" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggleTheme}
      className="relative"
    >
      <Sun
        name="light"
        className={`h-[1.2rem] w-[1.2rem] transition ease-in-out text-yellow-300 ${
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <Moon
        name="dark"
        className={`absolute h-[1.2rem] w-[1.2rem] transition ease-in-out text-gray-500 ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
