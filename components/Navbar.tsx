"use client";

import * as React from "react";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="h-30 flex items-center justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center justify-between xl:mx-[30vh] lg:mx-[15vh] md:mx-[6vh] max-md:mx-6 ">
        {/* Logo */}
        <div className="flex items-center space-x-2 max-md:ml-3 ">
          <a href="/" className="flex items-center justify-center space-x-2">
            <Image
              className=""
              src="/images/logo.png"
              alt=""
              width={80}
              height={80}
            />
            <span className="text-xl font-bold">
              Manhwa<span className="text-orange-500">RaJ</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center justify-center gap-10 max-md:hidden xl:pr-[7rem] lg:pr-[3rem] md:pr-[2rem] ">
          <div className="text-xl font-medium leading-none">Home</div>
          <div className="text-xl font-medium leading-none">Latest</div>
          <div className="text-xl font-medium leading-none">All Manhwa</div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className=" md:inline-flex"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {/* User Menu */}

          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-4 w-4" />
            <span className="sr-only">User menu</span>
          </Button>

          {/* Mobile Menu */}
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
            ></SheetContent>
          </Sheet> */}
        </div>
      </div>
    </header>
  );
}
