"use client";

import { linkWhatsApp } from "../_utils/utils";
import { Button } from "./ui/button";

export function ProcessAction() {
  return (
    <>
      <Button
        onClick={() =>
          linkWhatsApp("Olá,%20gostaria%20de%20iniciar%20meu%20projeto!")
        }
      >
        Iniciar meu projeto
      </Button>
    </>
  );
}
