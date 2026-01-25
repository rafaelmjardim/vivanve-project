"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { menuArray } from "@/app/constants/menu";
import { scrollSection } from "@/app/_utils/utils";
import { LuChevronDown } from "react-icons/lu";
import { MenuSheet } from "../menuSheet";
import { useState } from "react";

export function Header() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const openSelect = () => {
    setIsOpenOptions(!isOpenOptions);
  };

  return (
    <header className="py-6 px-4 container sm:px-24 mx-auto absolute z-20 top-0 left-0 right-0 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Image
          className="w-auto h-8 sm:h-10"
          src={logo}
          alt="Logo do Vivance Incorporadora"
        />
        <span className="inline-flex lg:hidden xl:inline-flex text-lg lg:text-2xl text-text-inverse">
          Vivance Incorporadora
        </span>
      </div>

      <ul className="hidden lg:inline-flex tems-center text-text-inverse gap-8">
        {menuArray.map((menu, index) => (
          <li className="z-10 relative transition-all" key={index}>
            <button
              onClick={() =>
                menu.isSelect ? openSelect() : scrollSection(menu?.sectionId)
              }
              className="z-10 cursor-pointer transition-all hover:text-text-active flex items-center gap-2"
            >
              {menu.txt}
              {menu.isSelect && <LuChevronDown size={20} />}
            </button>

            {menu.isSelect && isOpenOptions && (
              <>
                <ul className="z-10 px-4 py-3 absolute top-8 right-0 bg-[#272727]  rounded-md shadow-lg">
                  <li className="cursor-pointer p-1 hover:text-text-active transition text-nowrap border-b border-[#444]">
                    Obras de infraestrutura
                  </li>
                  <li className="cursor-pointer p-1 hover:text-text-active transition text-nowrap border-b border-[#444]">
                    Obras de saneamento
                  </li>
                  <li className="cursor-pointer p-1 hover:text-text-active transition text-nowrap border-b border-[#444]">
                    Obras civis e industriais
                  </li>
                  <li className="cursor-pointer p-1 hover:text-text-active transition text-nowrap">
                    Terraplanagem e Pavimentação
                  </li>
                </ul>
              </>
            )}
          </li>
        ))}
        {isOpenOptions && (
          <div
            className="bg-black/20 w-full h-screen fixed top-0 left-0"
            onClick={() => setIsOpenOptions(false)}
          ></div>
        )}
      </ul>

      <div className="lg:hidden">
        <MenuSheet />
      </div>
    </header>
  );
}
