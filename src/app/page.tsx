import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Nav from '@/components/ui/nav';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { TypographyH2, TypographyLarge } from '@/components/typography/headings';
import { TypographyP } from '@/components/typography/text';

export default function Home() {
  return (
    <main className="sm:container">
      <Nav />
      <section id="home" className="mt-[3rem] p-1 h-[calc(100vh-3rem)]">
        <div className="flex h-full items-center">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
                <TypographyH2>Hi, I'm <span className="text-primary">Ben</span></TypographyH2>
                <TypographyLarge><span className="text-destructive">Aspiring Software Developer</span></TypographyLarge>
                <CardDescription className="py-6 max-w-md">
                  I am currently studying Mechanical Engineering, but have a passion for providing solutions through code to build applications.
                </CardDescription>
            </CardContent>
            <CardFooter className="pb-1">
              <LinkIcon />&nbsp;Links
            </CardFooter>
            <CardContent>
              <i className="flex">
                <Link href="https://www.linkedin.com/in/benybku" target="_blank" rel="noopener noreferrer">
                  <Image src="icons/linkedin.svg" alt="linkedin" width={48} height={48} />
                </Link>
                <Link href="https://github.com/kub12803" target="_blank" rel="noopener noreferrer">
                  <Image src="icons/github.svg" alt="github" width={48} height={48} />
                </Link>
              </i>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
