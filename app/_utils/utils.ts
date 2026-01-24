export function scrollSection(id?: string) {
  console.log("rodou");

  if (!id) return;

  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
}

export function linkWhatsApp(customMessage?: string) {
  const number = 5551998747124;
  const defaultMessage = "Olá,%20gostaria%20de%20mais%20informações!";

  const url = `https://wa.me/${number}?text=${customMessage ?? defaultMessage}`;
  window.open(url, "_blank");
}

export function maskPhone(value: string): string {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
}
