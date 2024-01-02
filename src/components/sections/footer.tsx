import Link from "next/link";

export default function FooterSection() {
    return (
     <section id="footer" className="py-6 xs:text-center lg:text-left scale-90">
        <div className="text-muted-foreground">
          &copy; 2023. Built by Ben Ku. Source can be found on my <span className="underline"><Link href="https://github.com/bencodes8/next-portfolio" target="_blank" rel="noopener noreferrer">
            Github</Link></span>.
        </div>
      </section>
    );
}