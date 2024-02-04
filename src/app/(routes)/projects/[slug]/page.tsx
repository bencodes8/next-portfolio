import { Projects } from "@/lib/projects";
import { Project } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectBreadcrumbs from "@/components/project-breadcrumbs";
import { TypographyH4 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import FooterSection from "@/components/sections/footer";

export function generateStaticParams() {
  return Projects.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  function getProjectObject(projects: Project[]): Project {
    const projectObject = projects.find(
      (project) => project.slug === params.slug
    );
    if (!projectObject) {
      throw new Error("Project not found!");
    }
    return projectObject;
  }

  const project = getProjectObject(Projects);

  let techStack = "";

  for (let i = 0; i < project.techIcons.length - 1; i++) {
    techStack += `${project.techIcons[i].displayName}, `;
  }
  techStack += project.techIcons[project.techIcons.length - 1].displayName;

  return (
    <section id={`project-${project.slug}`}>
      <ProjectBreadcrumbs slug={project.slug} />
      <Image
        className="my-4 rounded-md"
        src={`/projects/${project.imageFile}`}
        height={480}
        width={960}
        alt={project.slug}
      />
      <TypographyH4 className="text-indigo-500 underline underline-offset-2">
        {project.title}
      </TypographyH4>
      <Badge
        className="mt-4"
        variant={project.completion_status ? "secondary" : "destructive"}
      >
        {project.completion_status ? "Completed" : "In Progress"}
      </Badge>
      {project.paragraphs.map((paragraph, index) => (
        <TypographyP className="font-light" key={index}>
          {paragraph}
        </TypographyP>
      ))}
      <TypographyH4 className="mt-4 text-indigo-500 underline underline-offset-2">
        tech stack
      </TypographyH4>
      <TypographyP className="font-light">{techStack}</TypographyP>
      <TypographyH4 className="mt-4 text-indigo-500 underline underline-offset-2">
        source
      </TypographyH4>
      {project.repoLink ? (
        <Link className="flex items-center mt-6" href={project.repoLink}>
          <Button className="opacity-90">
            <GithubIcon />
            &nbsp;Source
          </Button>
        </Link>
      ) : (
        <TypographyP className="font-light">
          not currently available.
        </TypographyP>
      )}
      <FooterSection />
    </section>
  );
}

export const dynamicParams = false;
