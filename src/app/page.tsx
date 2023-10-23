import Image from 'next/image';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calendar />
      <Button>Hello</Button>
    </main>
  )
}
