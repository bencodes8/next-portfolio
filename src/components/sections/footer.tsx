import Link from "next/link";

export default function FooterSection() {
  return (
    <section id="footer" className="py-6 xs:text-center lg:text-left text-sm">
      <div className="text-muted-foreground xs:max-lg:inline-block xs:max-lg:text-left">
        &copy; 2024 Ben Ku. All Rights Reserved.
        <p>
          Source can be found on my{" "}
          <span className="underline">
            <Link
              href="https://github.com/bencodes8/next-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </span>
          .
        </p>
      </div>
    </section>
  );
}
