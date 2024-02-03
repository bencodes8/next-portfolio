"use client";

import { ModeToggle } from "./ui/theme-toggle";
import { animateScroll, scroller } from "react-scroll";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  // const scrollToTop = () => {
  //   animateScroll.scrollToTop({
  //     duration: 250,
  //     smooth: true,
  //   });
  // };

  // const scrollToProjects = () => {
  //   scroller.scrollTo("projects", {
  //     duration: 500,
  //     smooth: true,
  //     offset: -50,
  //   });
  // };

  return (
    <nav className="fixed w-full left-0 top-0 border-b z-10 backdrop-blur-sm">
      <div className="container max-w-screen-sm p-2 items-center">
        <ul className="flex items-center xs:space-x-2 sm:space-x-6">
          <li className="font-semibold ml-2">
            <button className="flex items-center" > 
              <Link href="/me">ben ku</Link>
            </button>
          </li>
          <li>
            <button className="hover:text-muted-foreground xs:max-sm:hidden block transition opacity-90">
              <Link className={`link ${pathname === '/projects' ? 'text-indigo-500 underline undelrine-offset-2' : ''}`} href="/projects">projects</Link>
            </button>
          </li>
          <li className="grow">
            <button
              type="button"
              className="hover:text-muted-foreground xs:max-sm:hidden block transition opacity-90"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                resume
              </a>
            </button>
          </li>
          <li className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <AlignJustify />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/projects">projects</Link>
                </DropdownMenuItem>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <DropdownMenuItem>resume</DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
