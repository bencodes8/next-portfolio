import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/lib/projects";
import { TechIcons } from "../tech-icons";
import { TypographyH2 } from "../typography/headings";
import { TypographyP } from "../typography/text";

export default function ProjectSection() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center mt-4">
        <TypographyH2 className="xs:max-lg:pt-10 text-blue-500">Projects</TypographyH2>
        <Accordion type="multiple" className="w-full p-2">
          { Projects.map((project, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{project.title}</AccordionTrigger>
                <AccordionContent className="flex xs:max-xl:flex-col justify-center items-center">
                  <div className="xl:w-1/2 w-full xs:max-xl:order-last xs:max-xl:mt-4 pr-4">
                    <Badge variant={project.completion_status ? "secondary" : "destructive"}>{project.completion_status ? 'Completed' : 'In Progress'}</Badge>
                    {project.paragraphs.map((paragraph, index) => (
                      <TypographyP key={index} className="text-primary opacity-80">
                        {paragraph}
                      </TypographyP>
                    ))}
                    <div className="flex space-x-6 mt-6">
                      {project.techIcons.map((icon, index) => (
                        <TechIcons key={index} displayName={icon.displayName} srcName={icon.srcName} />
                      ))}
                    </div>
                    {project.repoLink && <Link className="flex items-center mt-6" href={project.repoLink}><Button className="opacity-90"><GithubIcon />&nbsp;Source</Button></Link>}
                  </div>
                  <div className="xl:w-1/2 w-full text-center">
                    {project.imageFile ? <Image className="mx-auto border rounded-md xs:max-xl:mt-2" 
                                                src={`/projects/${project.imageFile}`} 
                                                width={960} height={640} 
                                                alt={`${project.imageFile}`} 
                                          /> 
                                       :
                      <div className="xs:max-xl:hidden">No Image Yet.</div>}
                  </div>
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
}