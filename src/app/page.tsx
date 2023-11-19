import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Nav from '@/components/ui/nav';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { TypographyH2, TypographyLarge } from '@/components/typography/headings';
import { TechIcons } from '@/components/tech-icons';
import { techStack, learnTechStack } from '@/lib/tech-stack';
import { CertificateIcon } from '@/components/certificate-icons';
import { certificates } from '@/lib/certificates';
import { ShieldCheck } from 'lucide-react';

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
                  <TypographyLarge><span className="text-muted-foreground">Aspiring Software Developer</span></TypographyLarge>
                  <CardDescription className="py-6 max-w-md">
                    Welcome to my portfolio! I have passion for learning new technologies to ultimately provide efficient solutions 
                    for building applications.
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
                <CardDescription>Hover over to view more details!</CardDescription>
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
                  {techStack.map((tech, index) => (
                    <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card >
              <CardHeader>
                <CardTitle>Currently learning...</CardTitle>
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
        <TypographyH2 className="xs:max-lg:pt-10">Projects</TypographyH2>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </section>
    </main>
  );
}