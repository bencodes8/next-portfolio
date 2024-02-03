import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/sections/footer";

export default function NotFound() {
  return (
    <div className="mt-[57px] h-[calc(100vh-57px)]">
      <div className="h-5/6 flex flex-col justify-center items-center">
        <h4 className="text-2xl font-semibold my-6">
          Oops! This page cannot be found.
        </h4>
        <Button asChild>
          <Link href="/me">
            <ArrowLeft />
            {"  "}return home
          </Link>
        </Button>
      </div>
      <div className="grow">
        <FooterSection />
      </div>
    </div>
  );
}
