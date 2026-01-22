import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { SectionHeader } from "./ui/sectionHeader";
import { IconType } from "react-icons";
import { ContactForm } from "./contactForm";

type Contact = {
  label: string;
  opt1: string;
  opt2: string;
  icon: IconType;
};

export function Contact() {
  const contacts: Contact[] = [
    {
      label: "Telefone",
      opt1: "(51) 99999-9999",
      opt2: "(51) 33333-3333",
      icon: LuPhone,
    },
    {
      label: "E-mail",
      opt1: "contato@vivance.com.br",
      opt2: "orcamento@vivance.com.br",
      icon: LuMail,
    },
    {
      label: "Endereço",
      opt1: "Av. Exemplo, 1000 - Porto Alegre/RS",
      opt2: "CEP: 01310-100",
      icon: LuMapPin,
    },
  ];
  return (
    <section
      id="contact"
      className="py-16 sm:py-32px-4 px-4 sm:px-6 bg-surface-inverse-secundary items-center sm:gap-16"
    >
      <SectionHeader
        title="Solicite seu orçamento"
        description="Transforme seu projeto em realidade. Entre em contato conosco e descubra como podemos ajudar."
      />

      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto mt-16">
        <div className="flex flex-col gap-8">
          <h3 className="text-lg ">Fale conosco</h3>

          <div className="flex flex-col gap-6">
            {contacts.map((contact, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-surface-primary rounded-xl w-fit h-fit p-3.5 shadow-md">
                  <contact.icon className="text-icon-inverse" size={20} />
                </div>
                <div>
                  <h4 className="mb-1 text-md text-text-default">
                    {contact.label}
                  </h4>
                  <p className="text-text-secundary text-md">{contact.opt1}</p>
                  <p className="text-text-secundary text-md">{contact.opt2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-surface-primary shadow-lg p-6 rounded-[.875rem] text-text-inverse">
            <h3 className="text-base sm:text-lg max-w-52.75 mb-4">
              Horário de atendimento
            </h3>
            <p className="mb-2 text-sm">Segunda a Sexta: 8h às 18h</p>
            <p className="text-sm">Sábado: 8h às 12h</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
