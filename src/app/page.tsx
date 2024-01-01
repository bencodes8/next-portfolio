import Nav from '@/components/ui/nav';
import WireFrameHomeSection from '@/components/sections/wireframe-home';
import ProjectSection from '@/components/sections/projects';
import FooterSection from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="xs:container">
      <Nav />
      <WireFrameHomeSection />
      <ProjectSection />
      <FooterSection />
    </main>
  );
}