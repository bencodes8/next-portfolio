import { TypographyH4 } from "../typography/headings";
import { TypographyLarge } from "../typography/headings";
import { ModeToggle } from "./theme-toggle";

export default function Nav() {
    return (
        <nav className="sticky top-0 border-b">
            <div className="sm:container flex p-1 items-center">
                <div className="flex-grow">
                    <TypographyH4>{'<'} <span className="text-primary">Ben</span> {'/>'}</TypographyH4>
                </div>
                <ul className="flex items-center space-x-4">
                    <li>Home</li>
                    <li>Tools & Skills</li>
                    <li>Resume</li>
                    <li><ModeToggle /></li>
                </ul>
            </div>
        </nav>
    );
}