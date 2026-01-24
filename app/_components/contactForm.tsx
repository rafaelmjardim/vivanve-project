"use client";

import { LuLoaderCircle, LuMailCheck, LuSend } from "react-icons/lu";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { maskPhone } from "../_utils/utils";

type Inputs = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

export function ContactForm() {
  const [loaderSend, setLoaderSend] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendEmail(data);
  };

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = async (data: Inputs) => {
    setLoaderSend(true);

    if (!serviceID || !templateID || !publicKey) {
      throw new Error(
        "Necessário configurar variaveis de ambiente, as mesmas estão retornando undefined.",
      );
      return;
    }

    try {
      await emailjs.send(serviceID, templateID, data, publicKey);
      reset();
      setSuccessAlert(true);
      setLoaderSend(false);
      resetSuccessAlert();
    } catch (error) {
      console.log("Erro ao enviar email: ", error);
    } finally {
      setLoaderSend(false);
      resetSuccessAlert();
    }
  };

  const resetSuccessAlert = () => {
    setTimeout(() => {
      setSuccessAlert(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl p-4 sm:p-6 lg:8 shadow-md flex flex-col gap-4 sm:gap-6"
    >
      <div className="flex flex-col">
        <label className="text-text-label text-sm mb-2">Nome completo</label>
        <input
          className="border border-stroke-default rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-icon-active transition-all"
          type="text"
          placeholder="Seu nome"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <p className="text-[.75rem] text-red-600 mt-0.5">
            O nome é obrigatório.
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-text-label text-sm mb-2">E-mail</label>
        <input
          className="border border-stroke-default rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-icon-active transition-all"
          type="email"
          placeholder="exemplo@email.com"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <p className="text-[.75rem] text-red-600 mt-0.5">
            O e-mail é obrigatório.
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-text-label text-sm mb-2">Telefone</label>
        <input
          className="border border-stroke-default rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-icon-active transition-all"
          type="text"
          placeholder="(51) 99999-9999"
          {...register("phone", {
            required: true,
            onChange: (e) => {
              e.target.value = maskPhone(e.target.value);
            },
          })}
        />
        {errors.phone?.type === "required" && (
          <p className="text-[.75rem] text-red-600 mt-0.5">
            O telefone é obrigatório.
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-text-label text-sm mb-2">Mensagem</label>

        <textarea
          className="border border-stroke-default rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-icon-active transition-all"
          placeholder="Conte-nos sobre seu projeto..."
          rows={4}
          {...register("message", { required: true })}
        />
        {errors.message?.type === "required" && (
          <p className="text-[.75rem] text-red-600 mt-0.5">
            A mensagem é obrigatório.
          </p>
        )}
      </div>
      <Button className="transition-all">
        {!loaderSend && successAlert
          ? "Mensagem Enviada com sucesso"
          : "Enviar mensagem"}
        {!loaderSend && !successAlert && <LuSend size={20} />}
        {!loaderSend && successAlert && (
          <LuMailCheck size={20} className="animate-scale-pulse" />
        )}
        {loaderSend && !successAlert && (
          <LuLoaderCircle size={20} className="animate-spin" />
        )}
      </Button>
    </form>
  );
}
