import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CertificateIcon } from "@/components/certificate-icons";
import FeaturedProjectImageLoader from "@/components/ui/image-loader";
import Image from "next/image";
import Link from "next/link";
import { TechIcons } from "@/components/tech-icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { TypographyH2, TypographyH3, TypographyH4, TypographyLarge } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import { Projects } from "@/lib/projects";
import { certificates } from "@/lib/certificates";
import { learnTechStack, techStack } from "@/lib/tech-stack";

export default function WireFrameHomeSection() {
    return (
        <section id="home" className="flex flex-col mt-[52px] min-h-[calc(100vh-52px)]">
            <div id="top" className="flex h-[90%] xs:max-lg:flex-col">
                <div id="left" className="flex items-center justify-center scale-90 xs:w-full lg:w-1/2">
                    <div className="inline-block text-left xs:w-[48rem] lg:w-[28rem] px-2">
                        <div className="block relative py-2 right-0">
                            <TypographyH2>Hi I&apos;m <span className="text-blue-500">Ben</span>,</TypographyH2>   
                            <TypographyH4 className="opacity-50">Aspiring Full-Stack Engineer</TypographyH4>
                            <Avatar className="absolute right-0 top-0 border">
                                <AvatarImage src="avatar/memoji.jpeg" />
                                <AvatarFallback>BK</AvatarFallback>
                            </Avatar>
                        </div>
                        <TypographyP className="opacity-90">
                            Hello world, welcome to my portfolio! I have a passion for learning new technologies to ultimately provide efficient solutions 
                            for building applications. Looking to apply my skills in a career in tech.
                        </TypographyP>
                        <TypographyP className="opacity-90">
                            So far, I have built full-stack web application projects primarly using Python and React. I have also touched some machine learning utilizing
                            TensorFlow.
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
                        <TypographyH3 className="text-blue-500">Certifications</TypographyH3>
                        <TypographyLarge className="opacity-50">Hover over for details!</TypographyLarge>
                        <div className="flex mt-2">
                            {certificates.map((certificate, index) => (
                                <CertificateIcon key={index} 
                                                 displayName={certificate.displayName} 
                                                 imageSrc={certificate.imageSrc} 
                                                 href={certificate.href} 
                                                 description={certificate.description} 
                                                 year_received={certificate.year_received} 
                                 />
                            ))}
                        </div>
                    </div>
                </div>
                <div id="right" className="flex flex-col items-center justify-center scale-90 p-2">
                    <Card className="xs:max-lg:w-[48rem]">
                        <CardHeader>
                            <CardTitle>Featured Project: <span className="text-red-500">{Projects[0].title}</span></CardTitle>
                            <CardDescription>Current project I am working on.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={`/projects/${Projects[0].imageFile}`} alt={Projects[0].title} width={640} height={480} />
                        </CardContent>
                    </Card>
                    <Card className="mt-4 xs:w-[48rem] lg:w-full">
                        <CardHeader>
                            <CardTitle>Planning on Learning...</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-8 justify-evenly">
                            {learnTechStack.map((tech, index) => (
                                <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div id="bottom" className="grow flex flex-col items-center border-t border-b scale-90">
                <div className="w-full flex justify-center space-x-10 py-4">
                    <ScrollArea className="w-full">
                        <div className="flex justify-center items-center w-full space-x-12 pb-4 px-4">
                            {techStack.map((icon, index) => (
                                <TechIcons key={index} displayName={icon.displayName} srcName={icon.srcName} />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </section> 
    );
}