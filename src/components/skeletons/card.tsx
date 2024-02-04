import { Skeleton } from "@/components/ui/skeleton";

function ProjectItem() {
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

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[28px] w-[5rem] rounded-xl my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
