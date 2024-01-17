'use client';

import { TypographyH4 } from '../typography/headings';
import { ModeToggle } from './theme-toggle';
import { animateScroll, scroller } from 'react-scroll';
import { AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Nav() {
    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 250,
            smooth: true
        });
    };

    const scrollToProjects = () => {
        scroller.scrollTo('projects', {
        duration: 500,
        smooth: true,
        offset: -50
      });
    };
      
    return (
        <nav className="fixed w-full left-0 top-0 border-b-2 z-10 backdrop-blur-md">
            <div className="xs:container flex p-1 items-center">
                <div className="flex-grow">
                    <TypographyH4>Ben Ku</TypographyH4>
                </div>
                <ul className="flex items-center xs:space-x-2 sm:space-x-6">
                    <li><button type="button" className="hover:text-muted-foreground xs:max-sm:hidden block transition" onClick={scrollToTop}>Home</button></li>
                    <li><button type="button" className="hover:text-muted-foreground xs:max-sm:hidden block transition" onClick={scrollToProjects}>Projects</button></li>
                    <li><button type="button" className="hover:text-muted-foreground xs:max-sm:hidden block transition">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume</a></button></li>
                    <li className="sm:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <AlignJustify />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={scrollToTop}>Home</DropdownMenuItem>
                                <DropdownMenuItem onClick={scrollToProjects}>Projects</DropdownMenuItem>
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <DropdownMenuItem>
                                        Resume
                                    </DropdownMenuItem>
                                </a>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li><ModeToggle /></li>
                </ul>
            </div>
        </nav>
    );
}