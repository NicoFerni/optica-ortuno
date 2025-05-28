"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

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
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-gray-100 shadow-md" : "bg-gray-100"}`}
    >
      <div className="container flex h-18 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Optica Ortuno Logo"
            width={70}
            height={70}
            className="w-16 h-18 sm:w-20 sm:h-18 md:w-24 md:h-18" 
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium hover:text-primary-value hover:text-lg delay-100 transition-all">
            Inicio
          </Link>
          <Link href="#nuestra-empresa" className="text-sm font-medium hover:text-primary-value hover:text-lg delay-100 transition-all">
            Quienes somos
          </Link>
          <Link href="#servicios" className="text-sm font-medium hover:text-primary-value hover:text-lg delay-100 transition-all">
            Nuestros Servicios
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-primary-value hover:text-lg delay-100 transition-all">
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
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
