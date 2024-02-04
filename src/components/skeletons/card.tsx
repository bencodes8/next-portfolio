import { Skeleton } from "@/components/ui/skeleton";

function ProjectCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-full h-[250px] sm:h-[125px] sm:w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="w-full h-4 sm:w-[250px]" />
        <Skeleton className="w-3/5 h-4 sm:w-[200px]" />
      </div>
    </div>
  );
}

export function SingleProjectSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="w-full h-[350px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <br />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <br />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export function AllProjectSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[28px] w-[5rem] rounded-xl my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
