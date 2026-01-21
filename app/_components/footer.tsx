import footerBackground from "@/public/footer-background.jpg";
import logo from "@/public/logo.png";
import Image from "next/image";
import { FooterLinks } from "./footerLinks";
import { FooterSocialMedia } from "./footerSocialMedia";

export function Footer() {
  return (
    <footer className="relative overflow-hidden flex w-full h-full">
      <Image
        src={footerBackground}
        alt="Material em steel frame"
        className="absolute object-cover w-full h-full"
      />
      <div className=" px-4 sm:px-6 py-14 bg-surface-secundary/95 z-20 w-full h-full flex flex-col items-center justify-center gap-22.5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex">
          <div className="w-87">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={logo}
                alt="Logo do Vivance Incorporadora"
                height={30}
              />
              <span className="text-md xl:text-xl text-text-inverse">
                Vivance Incorporadora
              </span>
            </div>
            <p className="text-text-grey-light max-w-85">
              Construindo o futuro com tecnologia, qualidade e sustentabilidade.
            </p>
          </div>

          <div className="w-87">
            <h4 className="text-text-inverse mb-4">Links rápidos</h4>
            <FooterLinks />
          </div>

          <div className="w-87">
            <h4 className="text-text-inverse mb-4">Serviços</h4>
            <ul className="text-text-grey-light flex flex-col gap-2">
              <li className="transition-all hover:text-text-active">
                Construção Residencial
              </li>
              <li className="transition-all hover:text-text-active">
                Construção Comercial
              </li>
              <li className="transition-all hover:text-text-active">
                Reformas
              </li>
              <li className="transition-all hover:text-text-active">
                Consultoria de Projetos
              </li>
            </ul>
          </div>

          <div className="w-87">
            <h4 className="text-text-inverse mb-4">Redes sociais</h4>
            <FooterSocialMedia />
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm w-full">
          <p>© 2026 Vivance Incorporadora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
