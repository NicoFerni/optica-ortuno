import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nuestra-empresa" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Empresa</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 20 años de experiencia cuidando la salud visual de nuestros pacientes con profesionalidad y
            dedicación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Equipo de Optica Ortuño"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">¿Por qué elegirnos?</h3>
            <p>
              En Optica Ortuño combinamos la experiencia de nuestros profesionales con la tecnología más avanzada para
              ofrecer soluciones visuales personalizadas a cada paciente.
            </p>

            <ul className="space-y-3">
              {[
                "Profesionales altamente cualificados",
                "Tecnología de vanguardia",
                "Amplio catálogo de monturas y lentes",
                "Atención personalizada",
                "Garantía en todos nuestros productos",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-value mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Nuestra misión es mejorar la calidad de vida de nuestros pacientes a través de una visión óptima,
              ofreciendo un servicio cercano y de calidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
