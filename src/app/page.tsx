import Image from 'next/image';
import Nav from '@/components/ui/nav';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/theme-toggle';

export default function Home() {
  return (
    <main className="md:container">
      <Nav />
    </main>
  )
}
