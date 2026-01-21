"use client";

import { BsWhatsapp } from "react-icons/bs";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import { linkWhatsApp } from "../_utils/utils";

export function FooterSocialMedia() {
  const openLink = (url: string) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  const instagranLink = "https://www.instagram.com/vivanceincorporadora";
  const facebookeLink = "";
  const linkedinLink = "";

  return (
    <div className="text-text-inverse flex items-center gap-4">
      <LuFacebook
        className="cursor-pointer hover:text-text-active transition"
        size={22}
        onClick={() => openLink(facebookeLink)}
      />
      <LuInstagram
        className="cursor-pointer hover:text-text-active transition"
        size={22}
        onClick={() => openLink(instagranLink)}
      />
      <LuLinkedin
        className="cursor-pointer hover:text-text-active transition"
        size={22}
        onClick={() => openLink(linkedinLink)}
      />
      <BsWhatsapp
        className="cursor-pointer hover:text-text-active transition"
        size={22}
        onClick={() => linkWhatsApp()}
      />
    </div>
  );
}
