import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/sections/footer";

export default function Page() {
  return (
    <div className="h-[calc(100vh-57px)]">
      <div className="h-5/6 flex flex-col justify-center items-center">
        <h4 className="text-2xl font-semibold my-6 xs:max-sm:text-center">
          Updating Resume! Come back later...
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
