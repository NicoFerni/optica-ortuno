import Link from "next/link";
import { Eye } from "lucide-react";
import { Facebook, Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary-value" />
              <span className="text-xl font-bold text-white">
                Optica Ortuño
              </span>
            </div>
            <p className="text-sm">
              Cuidamos de tu salud visual con la máxima profesionalidad y
              tecnología avanzada.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-blue-800 transition-colors"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=+5492914326095"
                className="hover:text-red-200 transition-colors"
                target="_blank"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="hover:text-teal-500 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#nuestra-empresa"
                  className="hover:text-teal-500 transition-colors"
                >
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-teal-500 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-teal-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-colors"
                >
                  Examen Visual
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-colors"
                >
                  Gafas Graduadas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-colors"
                >
                  Gafas de Sol
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-colors"
                >
                  Lentes de Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-colors"
                >
                  Salud Ocular
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contacto</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>Fitz Roy 72</p>
              <p>Bahia Blanca, CP 8000</p>
              <p>+54 291 432-6095</p>
              <p>ortunio2000@yahoo.com.ar</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Optica Ortuño. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
