"use client";

import { scrollSection } from "../_utils/utils";
import { menuArray } from "../constants/menu";

export function FooterLinks() {
  return (
    <ul className="text-text-grey-light flex flex-col gap-2">
      <li>
        <button
          className="cursor-pointer transition-all hover:text-text-active"
          onClick={() => scrollSection("hero")}
        >
          Início
        </button>
      </li>

      {menuArray.map((menu, index) => (
        <li key={index}>
          <button
            className="cursor-pointer transition-all hover:text-text-active"
            onClick={() => scrollSection(menu.sectionId)}
          >
            {menu.txt}
          </button>
        </li>
      ))}
    </ul>
  );
}
