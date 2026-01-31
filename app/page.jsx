import Conclusion from '@/app/components/slides/Conclusion';
import Hero from '@/app/components/slides/Hero';
import Herramientas from '@/app/components/slides/Herramientas';
import ImagenesIA from '@/app/components/slides/ImagenesIA';
import Tema from '@/app/components/slides/Tema';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Tema />
      <ImagenesIA />
      <Herramientas />
      <Conclusion />
    </main>
  );
}
