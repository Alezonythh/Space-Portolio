import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Sertificate from "@/components/main/Sertificate";
import Image from "next/image";
import About from "@/components/main/About";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Sertificate />
        <Projects />
      </div>
    </main>
  );
}
