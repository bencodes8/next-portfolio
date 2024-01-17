import Nav from '@/components/ui/nav';
import HomeSection from '@/components/sections/home';
import ProjectSection from '@/components/sections/projects';
import FooterSection from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="xs:container">
      <Nav />
      <HomeSection />
      <ProjectSection />
      <FooterSection />
    </main>
  );
}