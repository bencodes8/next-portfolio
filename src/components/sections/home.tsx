import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter 
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon, ShieldCheck } from 'lucide-react';
import { TypographyH2 } from '../typography/headings';
import { TypographyLarge } from '../typography/headings';
import { CertificateIcon } from '../certificate-icons';
import { certificates } from '@/lib/certificates';
import { learnTechStack, techStack } from '@/lib/tech-stack';
import { TechIcons } from '../tech-icons';

export default function HomeSection() {
    return (
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
                  <TypographyH2>Hi, I&apos;m <span className="text-primary">Ben</span></TypographyH2>
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
          <div className="flex flex-col space-y-2 lg:ml-4 xs:max-lg:w-full">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Technologies I have used to build applications.</CardDescription>
                <div className="grid xs:grid-cols-3 sm:grid-cols-5 gap-3 mt-6">
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
                <div className="grid grid-cols-4 gap-3 mt-1">
                  {learnTechStack.map((tech, index) => (
                    <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
}