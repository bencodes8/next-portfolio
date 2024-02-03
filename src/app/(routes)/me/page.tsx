import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypographyH3, TypographyH4 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import { workExperience } from "@/lib/work";
import Work from "@/components/work";
import FooterSection from "@/components/sections/footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="home" className="mt-[57px] pt-4">
      <TypographyH3>hi, i am ben.</TypographyH3>
      <div className="font-light">software developer / mechanical engineer</div>
      <i className="flex space-x-1 mt-2 mb-4">
        <Link
          className="flex items-center"
          href="https://www.linkedin.com/in/benybku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/brand/linkedin.svg"
            alt="linkedin"
            width={48}
            height={48}
          />
        </Link>
        <Link
          href="https://github.com/bencodes8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/brand/github.svg"
            alt="github"
            width={48}
            height={48}
          />
        </Link>
      </i>
      <TypographyH4 className="mt-4 underline-offset-4 underline">
        about
      </TypographyH4>
      <TypographyP className="font-light">
        I am currently working as a software developer. Since 2022, I have been
        self-studying programming and computer science principles to build
        projects.
        <br />
        <br />
        Python is my most comfort language followed by JavaScript. I mainly use
        these languages for quick scripting, web applications, and a bit of
        machine learning.
      </TypographyP>
      <TypographyH4 className="mt-4 underline-offset-4 underline">
        work
      </TypographyH4>
      <ul className="list-disc pl-5 mt-6 space-y-2">
        {workExperience.map((work, index) => (
          <Work
            key={index}
            job_title={work.job_title}
            start_date={work.start_date}
            end_date={work.end_date}
          />
        ))}
      </ul>
      <TypographyH4 className="mt-4 underline-offset-4 underline">
        technical skills
      </TypographyH4>
      <ul className="pl-2 mt-6 space-y-2 font-light">
        <li>
          <span className="font-semibold">Languages:</span> Python, TypeScript,
          JavaScript, Java, C
        </li>
        <li>
          <span className="font-semibold">Frameworks:</span> Nextjs, React,
          Django, Express.js, Node.js
        </li>
        <li>
          <span className="font-semibold">Databases:</span> SQLite, PostgreSQL
        </li>
      </ul>
      <div className="flex justify-center mt-10">
        <Button
          className="bg-indigo-500 dark:text-primary hover:bg-indigo-600"
          asChild
        >
          <Link href="/projects">check out my projects</Link>
        </Button>
      </div>
      <TypographyH4 className="mt-4 underline-offset-4 underline">
        plans
      </TypographyH4>
      <TypographyP className="font-light">
        My most recent project involves developing a real-time, chat
        web-application. This project will push me to learn two-way connections
        and authentication middleware that can be valuable for building future
        applications.
        <br />
        <br />I eventually plan on learning Golang for creating highly
        performant applications, and also C# for game modding, driven by my
        interest in video games.
      </TypographyP>

      <FooterSection />
    </section>
  );
}
