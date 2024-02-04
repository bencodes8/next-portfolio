import { Project } from "@/types/types";
import { Projects } from "@/lib/projects";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProjectBreadcrumbs({ slug }: { slug: string }) {
  function getProjectTitle(projects: Project[]): string {
    const projectObject = projects.find((project) => project.slug === slug)!;
    if (projectObject) {
      return projectObject["title"];
    } else {
      return "Something went wrong here";
    }
  }

  const title = getProjectTitle(Projects);

  return (
    <div className="inline-flex font-light">
      <Link className="hover:underline underline-offset-2" href="/">home</Link> <ChevronRight />{" "}
      <Link className="hover:underline underline-offset-2" href="/projects">projects</Link> <ChevronRight />{" "}
      <Link className="hover:underline underline-offset-2" href={`/projects/${slug}`}>{title.toLowerCase()}</Link>
    </div>
  );
}
