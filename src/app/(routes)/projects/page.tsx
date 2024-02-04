import { TypographyH4 } from "@/components/typography/headings";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "projects • ben ku",
  description: "Coding Projects",
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <section id="projects">
        <TypographyH4 className="underline-offset-4 underline text-indigo-500">
          projects
        </TypographyH4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
        </div>
      </section>
    </Suspense>
  );
}
