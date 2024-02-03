import { TypographyH4 } from "@/components/typography/headings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "projects • ben ku",
    description: "Personal Portfolio",
  };

export default function ProjectsPage() {
    return (
        <div className="mt-[57px] h-[calc(100vh-57px)] pt-4">
            <TypographyH4 className="mt-4 underline-offset-4 underline">projects</TypographyH4>
        </div>
    );
}