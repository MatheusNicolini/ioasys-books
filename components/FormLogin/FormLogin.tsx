"use client";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormLoginType } from "./FormLogin.types";

import Auth from "../Auth/Auth";

import { useAuth } from "@/hooks/useAuth";

import { Input } from "../Input";
import { Button } from "../Button";

import S from "./FormLogin.module.css";

const loginSchema = yup
  .object({
    email: yup.string().email().required("E-mail obrigatório!"),
    password: yup.string().required("Senha obrigatório!"),
  })
  .required();

export const FormLogin = () => {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormLoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: FormLoginType) => {
    const { email, password } = data;
    if (email === "desafio@ioasys.com.br" && password === "12341234") {
      login();
      return;
    }
    setError("email", {
      type: "manual",
      message: "E-mail e/ou senha incorretos!",
    });
  };

  return (
    <>
      <Auth />
      <form className={S.form} onSubmit={handleSubmit(handleLogin)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input label="Email" type="email" {...field} />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              label="Senha"
              type="password"
              tooltipContent={errors.email?.message || errors.password?.message}
              {...field}
              actionButton={<Button type="submit">Entrar</Button>}
            />
          )}
        />
      </form>
    </>
  );
};
