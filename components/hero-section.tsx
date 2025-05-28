import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center text-center py-20 md:py-28 min-h-[200px] md:min-h-[300px] lg:min-h-[500px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Fondo de optica"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-2xl text-white px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
        >
          Su visión es nuestra prioridad
        </h1>
      </div>
    </section>
  )
}
