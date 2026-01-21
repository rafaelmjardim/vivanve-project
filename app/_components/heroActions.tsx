"use client";

import { HiArrowSmallRight } from "react-icons/hi2";
import { linkWhatsApp, scrollSection } from "../_utils/utils";
import { Button } from "./ui/button";

export function HeroActions() {
  return (
    <div className="flex items-center gap-4 flex-col sm:flex-row">
      <Button className="w-full sm:w-fit" onClick={() => linkWhatsApp()}>
        Solicitar orçamento
        <HiArrowSmallRight size={20} />
      </Button>
      <Button
        className="w-full sm:w-fit"
        isTransparent={true}
        onClick={() => scrollSection("projectCatalog")}
      >
        Ver catálogo
      </Button>
    </div>
  );
}
