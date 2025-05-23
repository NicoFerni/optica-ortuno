"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Share2,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert(
      "Gracias por contactarnos. Nos pondremos en contacto contigo pronto."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En Optica Ortuño nos dedicamos a la venta, elaboración y reparación
            de anteojos. Consúltenos, ofrecemos a nuestros clientes un servicio
            de salud visual seguro y profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Información de Contacto</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Dirección</h4>
                  <p className="text-muted-foreground">
                    Fitz Roy 72, Bahia Blanca
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-muted-foreground">+54 291 456-5612</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    ortunio2000@yahoo.com.ar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Horario</h4>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                  <p className="text-muted-foreground">Sábados: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100032388806773"
                className="hover:text-blue-800 transition-colors"
                target="_blank"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/opticaortuno/"
                className="hover:text-red-500 transition-colors"
                target="_blank"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=+5492914326095"
                className="hover:text-green-600 transition-colors"
                target="_blank"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
            <div>
              <div className="h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.8199402448245!2d-62.26684292490678!3d-38.72194278648495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb49d0ffd0f%3A0x3d0de684bada862!2zw5NwdGljYSBPcnR1w7Fv!5e0!3m2!1sen!2sar!4v1747759107971!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary-value hover:bg-blue-800"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
