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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main className="container max-w-screen-sm">
            <Nav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
