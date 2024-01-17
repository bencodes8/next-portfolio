import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { TypographyH2, TypographyH3, TypographyH4 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import { Projects } from "@/lib/projects";
import { TechIcons } from "../tech-icons";
import { techStack } from "@/lib/tech-stack";

export default function HomeSection() {
    return (
        <section id="home" className="mt-[52px] xs:min-h-[calc(100vh-52px)] lg:h-[calc(100vh-52px)]">
            <div id="top" className="flex h-full xs:max-lg:flex-col xs:max-lg:pt-8">
                <div id="left" className="flex items-center justify-center xs:w-full lg:w-1/2">
                    <div className="inline-block text-left xs:w-[48rem] lg:w-[28rem] px-2">
                        <div className="block relative py-2 right-0">
                            <TypographyH2>Hi I&apos;m <span className="text-blue-500">Ben</span>,</TypographyH2>   
                            <TypographyH4 className="opacity-50">Aspiring Full-Stack Engineer</TypographyH4>
                            <Avatar className="absolute right-0 top-0 border xs:max-sm:hidden">
                                <AvatarImage src="avatar/memoji.jpeg" />
                                <AvatarFallback>BK</AvatarFallback>
                            </Avatar>
                        </div>
                        <TypographyP className="opacity-80">
                            Hello world, welcome to my portfolio! I am a recent Mechanical Engineer graduate and want to transition my career path into software development/engineering. 
                        </TypographyP>
                        <TypographyP className="opacity-80">
                            I have been self-studying programming consistently. Most of my projects are focused on web development with the use of Python and React.
                        </TypographyP>
                        <TypographyP className="opacity-80">
                            I am in the process of broadening my skill set by delving into various frameworks. 
                            Additionally, I plan on attaining proficiency in Golang to incorprate in projects.
                        </TypographyP>
                        <i className="flex space-x-2 mt-4 mb-8">
                            <Link className="flex items-center" href="https://www.linkedin.com/in/benybku" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/brand/linkedin.svg" alt="linkedin" width={48} height={48} />
                            </Link>
                            <Link href="https://github.com/bencodes8" target="_blank" rel="noopener noreferrer">
                                <Image src="/icons/brand/github.svg" alt="github" width={48} height={48} />
                            </Link>
                        </i>
                        <hr />
                        <br />
                        <TypographyH3>Skills and Tools</TypographyH3>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-4">
                            {techStack.map((tech, index) => (
                                <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                            ))}
                        </div>
                    </div>
                </div>
                <div id="right" className="flex flex-col items-center justify-center xs:max-lg:mt-8 lg:w-1/2">
                    <Card className="w-full md:max-lg:w-[48rem]">
                        <CardHeader>
                            <CardTitle>Featured Project: <span className="text-red-500">{Projects[0].title}</span></CardTitle>
                            <CardDescription>Current project I am working on.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={`/projects/${Projects[0].imageFile}`} alt={Projects[0].title} width={640} height={480} />
                        </CardContent>
                        <hr/> 
                        <br />
                        <CardFooter className="flex-col">
                            <CardDescription>
                                This project entails learning to build a web application suitable for real-time, bi-directional communication between a web client and server. 
                            </CardDescription>
                            <br />
                            <CardDescription>
                                Most of my web application project has been built using a Python backend. I am diverting my attention from Python and will utilize a Node.js backend with strict typing utilizing
                                TypeScript.
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section> 
    );
}