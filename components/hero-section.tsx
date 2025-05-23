import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fondo de optica"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Su visión es nuestra prioridad</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            En Optica Ortuño ofrecemos soluciones visuales personalizadas con la última tecnología y los mejores
            profesionales.
          </p>
        </div>
      </div>
    </section>
  )
}
