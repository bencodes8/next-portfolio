import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Nav from '@/components/ui/nav';
import Link from 'next/link';
import { Link as LinkIcon, GithubIcon } from 'lucide-react';
import { TypographyH2, TypographyLarge } from '@/components/typography/headings';
import { TypographyP } from '@/components/typography/text';
import { TechIcons } from '@/components/tech-icons';
import { techStack, learnTechStack } from '@/lib/tech-stack';
import { CertificateIcon } from '@/components/certificate-icons';
import { certificates } from '@/lib/certificates';
import { ShieldCheck } from 'lucide-react';
import { Projects } from '@/lib/projects';

export default function Home() {
  return (
    <main className="xs:container">
      <Nav />
      <section id="home" className="flex items-center justify-center mt-[3rem] p-1 min-h-[calc(100vh-3rem)]">
        <div className="flex h-full items-center lg:justify-evenly xs:max-lg:flex-col xs:max-lg:mt-4 xs:max-lg:space-y-4">
          <div className="flex flex-col space-y-2">
            <Card className="relative">
              <CardHeader>
                <CardTitle>About</CardTitle>
                <Avatar className="absolute right-10 top-5">
                      <AvatarImage src="avatar/memoji.jpeg" />
                      <AvatarFallback>BK</AvatarFallback>
                    </Avatar>
              </CardHeader>
              <CardContent>
                  <TypographyH2>Hi, I'm <span className="text-primary">Ben</span></TypographyH2>
                  <TypographyLarge><span className="text-muted-foreground">Aspiring Full-Stack Engineer</span></TypographyLarge>
                  <CardDescription className="py-6 max-w-md">
                    Welcome to my portfolio! I have passion for learning new technologies to ultimately provide efficient solutions 
                    for building applications. Looking to apply my skills in a career in tech.
                  </CardDescription>
              </CardContent>
              <CardFooter className="pb-4">
                <LinkIcon />&nbsp;Links
              </CardFooter>
              <CardContent>
                <i className="flex space-x-2">
                  <Link className="flex items-center" href="https://www.linkedin.com/in/benybku" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/brand/linkedin.png" alt="linkedin" width={48} height={48} />
                  </Link>
                  <Link href="https://github.com/bencodes8" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/brand/github.png" alt="github" width={48} height={48} />
                  </Link>
                </i>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex"><ShieldCheck />&nbsp;Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Hover over to view details!</CardDescription>
                <div className="flex mt-4 space-x-2">
                  {certificates.map((certificate, index) => (
                    <CertificateIcon key={index} displayName={certificate.displayName} imageSrc={certificate.imageSrc} href={certificate.href} description={certificate.description} year_received={certificate.year_received} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-y-2 lg:ml-4">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Technologies I have used to build applications.</CardDescription>
                <div className="grid grid-cols-5 gap-3 mt-6">
                  {techStack.map((icon, index) => (
                    <TechIcons key={index} displayName={icon.displayName} srcName={icon.srcName} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card >
              <CardHeader>
                <CardTitle>Currently Learning...</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 mt-1">
                  {learnTechStack.map((tech, index) => (
                    <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="projects" className="flex flex-col items-center justify-center">
        <TypographyH2 className="xs:max-lg:pt-10 text-primary opacity-90">Projects</TypographyH2>
        <Accordion type="multiple" className="w-full p-2">
          { Projects.map((project, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{project.title}</AccordionTrigger>
                <AccordionContent className="flex xs:max-xl:flex-col justify-center items-center">
                  <div className="xl:w-1/2 w-full xs:max-xl:order-last xs:max-xl:mt-4">
                    <Badge variant={project.completion_status ? "secondary" : "destructive"}>{project.completion_status ? 'Completed' : 'In Progress'}</Badge>
                    {project.paragraphs.map((paragraph, index) => (
                      <TypographyP key={index} className="text-muted-foreground">
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
                                                width={640} height={480} 
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
      <section id="footer" className="py-6 xs:text-center lg:text-left">
        <div className="text-muted-foreground">
          &copy; 2023. Built by Ben Ku. Source can be found on my <span className="underline"><Link href="https://github.com/bencodes8/next-portfolio" target="_blank" rel="noopener noreferrer">
            Github</Link></span>.
        </div>
      </section>
    </main>
  );
}