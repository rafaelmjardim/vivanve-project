import Image from "next/image";
import { Header } from "./ui/header";
import heroBackground from "@/public/hero-background.jpg";
import { MouseAnimate } from "./ui/mouseAnimate";
import { HeroActions } from "./heroActions";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center h-screen bg-gray-950"
    >
      <Header />

      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Plano de fundo Steel Frame"
          className="w-full h-screen object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <article className="container mx-auto px-4 sm:px-24 z-10">
        <div className="grid gap-4 max-w-150">
          <h1 className="text-text-inverse text-3xl sm:text-4xl lg:text-6xl ">
            Construção Moderna em Steel Frame
          </h1>

          <p className="text-text-inverse-secundary text-base sn:text-lg md:text-xl">
            Rapidez, sustentabilidade e qualidade superior. Transforme seu
            projeto em realidade com a tecnologia mais avançada em construção
            civil.
          </p>

          <HeroActions />
        </div>
      </article>

      <MouseAnimate />
    </section>
  );
}
