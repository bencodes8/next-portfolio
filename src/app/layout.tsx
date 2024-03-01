import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "ben ku",
  description: "Personal Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="container max-w-screen-sm">
            <Nav />
            <div className="mt-[57px] pt-4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

