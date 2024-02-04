import { Projects } from "@/lib/projects";

export function generateStaticParams() {
  return Projects.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string, description: string } }) {
  return <div>My Post: {params.slug} </div>;
}

export const dynamicParams = false;