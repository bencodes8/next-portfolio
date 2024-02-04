import { TypographyH4 } from "@/components/typography/headings";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { Projects } from "@/lib/projects";
import FooterSection from "@/components/sections/footer";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {Projects.map((project, index) => (
            <div className="flex flex-col space-y-2">
              <Link href={`/projects/${project.slug}`}>
                <Image
                  key={index}
                  className="rounded-sm"
                  src={`/projects/${project.imageFile}`}
                  alt={project.title}
                  height={150}
                  width={250}
                />
              </Link>
              <span className="font-light text-xl">{project.title}</span>
              <p className="font-light">{project.description}</p>
            </div>
          ))}
        </div>
        <FooterSection />
      </section>
    </Suspense>
  );
}
