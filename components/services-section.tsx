import { Eye, Glasses, Sun, Stethoscope, ShoppingBag, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: <Glasses className="h-10 w-10 text-primary-value" />,
      title: "Gafas Graduadas",
      description: "Amplia selección de monturas de las mejores marcas adaptadas a su estilo y necesidades.",
    },
    {
      icon: <Sun className="h-10 w-10 text-primary-value" />,
      title: "Gafas de Sol",
      description: "Protección solar con estilo. Gafas de sol con y sin graduación.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary-value" />,
      title: "Accesorios",
      description: "Complementos y productos para el cuidado de sus gafas y lentes de contacto.",
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios ópticos para cuidar de su salud visual con la máxima calidad y
            profesionalidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
