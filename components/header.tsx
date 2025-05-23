"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary-value" />
          <span className="text-xl font-bold">Optica Ortuño</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium hover:text-primary-value hover:text-lg transition delay-100 transition-all">
            Inicio
          </Link>
          <Link href="#nuestra-empresa" className="text-sm font-medium hover:text-primary-value hover:text-lg transition delay-100 transition-all">
            Quienes somos
          </Link>
          <Link href="#servicios" className="text-sm font-medium hover:text-primary-value hover:text-lg transition delay-100 transition-all">
            Nuestros Servicios
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-primary-value hover:text-lg transition delay-100 transition-all">
            Contacto
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#inicio" className="text-base font-medium hover:text-teal-600 transition-colors">
                Inicio
              </Link>
              <Link href="#nuestra-empresa" className="text-base font-medium hover:text-teal-600 transition-colors">
                Nuestra Empresa
              </Link>
              <Link href="#servicios" className="text-base font-medium hover:text-teal-600 transition-colors">
                Servicios
              </Link>
              <Link href="#contacto" className="text-base font-medium hover:text-teal-600 transition-colors">
                Contacto
              </Link>
              <Button variant="default" className="mt-2 bg-teal-600 hover:bg-teal-700">
                Reservar Cita
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
