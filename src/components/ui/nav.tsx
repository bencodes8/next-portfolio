import { TypographyH4 } from "../typography/headings";
import { ModeToggle } from "./theme-toggle";

export default function Nav() {
    return (
        <nav className="fixed w-full left-0 top-0 border-b-2 z-10">
            <div className="sm:container flex p-1 items-center">
                <div className="flex-grow">
                    <TypographyH4>{'<'} <span className="text-primary">Ben</span> {'/>'}</TypographyH4>
                </div>
                <ul className="flex items-center space-x-6">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li><ModeToggle /></li>
                </ul>
            </div>
        </nav>
    );
}