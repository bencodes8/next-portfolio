import { TypographyH4 } from "../typography/headings";
import { ModeToggle } from "./theme-toggle";

export default function Nav() {
    return (
        <nav className="fixed w-full left-0 top-0 border-b-2 z-10 backdrop-blur-md">
            <div className="xs:container flex p-1 items-center">
                <div className="flex-grow">
                    <TypographyH4>{'<'} <span className="text-primary">Ben</span> {'/>'}</TypographyH4>
                </div>
                <ul className="flex items-center space-x-6">
                    <li><button type="button" className="hover:text-muted-foreground">Home</button></li>
                    <li><button type="button" className="hover:text-muted-foreground">Projects</button></li>
                    <li><button type="button" className="hover:text-muted-foreground">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume</a></button></li>
                    <li><ModeToggle /></li>
                </ul>
            </div>
        </nav>
    );
}