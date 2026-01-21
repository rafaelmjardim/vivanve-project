"use client";

import { LuBuilding2, LuClipboardList, LuWrench } from "react-icons/lu";
import { SectionHeader } from "./ui/sectionHeader";
import { IconType } from "react-icons";
import { TbChecks } from "react-icons/tb";
import { ProcessAction } from "./processAction";

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

export function Process() {
  const steps: Step[] = [
    {
      title: "1. Planejamento",
      description:
        "Desenvolvimento do projeto arquitetônico e estrutural com total atenção aos seus sonhos e necessidades.",
      icon: LuClipboardList,
    },
    {
      title: "2. Preparação",
      description:
        "Organização do escopo, materiais necessários e alinhamento com a equipe responsável pela obra.",
      icon: LuWrench,
    },
    {
      title: "3. Montagem",
      description:
        "Montagem rápida e limpa da estrutura no canteiro de obras, com mínimo impacto tambiental.",
      icon: LuBuilding2,
    },
    {
      title: "4. Entrega",
      description:
        "Finalização da etapa executada com alto padrão de qualidade, respeitando o escopo contratado e os prazos definidos.",
      icon: TbChecks,
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-32 px-4 sm:px-6 text-text-inverse bg-surface-secundary"
    >
      <div className="container mx-auto flex flex-col items-center text-center gap-10 sm:gap-12 lg:gap-16 ">
        <SectionHeader
          title="Como funciona"
          description="Um processo simples e transparente do projeto à entrega"
          isColorInverse={true}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-6 ">
              <div className="relative w-full flex justify-center">
                <div className="z-10 bg-surface-primary rounded-full w-fit">
                  <step.icon
                    className="text-white p-7 w-full h-full"
                    size={40}
                  />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:inline-flex absolute top-1/2 bottom-1/2 left-1/2 w-full h-0.5 bg-surface-primary/30"></div>
                )}
              </div>
              <div>
                <h3 className="text-lg mb-4">{step.title}</h3>
                <p className="text-text-grey-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="text-lg text-text-grey-light">
            Da fundação ao acabamento, acompanhamos cada etapa do seu projeto
          </p>
          <ProcessAction />
        </div>
      </div>
    </section>
  );
}
