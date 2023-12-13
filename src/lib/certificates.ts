import { Certificate } from "@/components/certificate-icons";

export const certificates: Certificate[] = [
    {
      displayName: 'CS50x', 
      imageSrc: 'harvard-logo', 
      href: 'https://certificates.cs50.io/a8e5aa84-b4e9-4bf7-896c-fd359f80befa.pdf?size=letter',
      description: 'Harvard University\'s\ introduction to the intellectual enterprises of computer science and the art of programming.',
      year_received: 2022
    },
    {
      displayName: 'CS50w', 
      imageSrc: 'harvard-logo', 
      href: 'https://certificates.cs50.io/a23d55f5-13bf-4e6d-a055-d48f327bb369.pdf?size=letter',
      description: 'Course pickups where CS50x lefts off, diving more deeply into the design and implementation of web applications.',
      year_received: 2023
    },
    {
      displayName: 'CS50SQL',
      imageSrc: 'harvard-logo',
      href: 'https://certificates.cs50.io/efa9ed13-5423-4e5c-8a99-e2b64e013603.pdf?size=letter',
      description: 'Courses provided foundation using SQL to create, read, update, and delete relational databases. Also learned how to model real-world entities, normalize data, and the trade-offs when indexing tables within databases.',
      year_received: 2023
    }
];