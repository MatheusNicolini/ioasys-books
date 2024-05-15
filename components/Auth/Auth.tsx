"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

import { AuthType } from "./Auth.types";

const Auth = ({ authenticated = false }: AuthType) => {
  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authenticated && !isLogged()) router.push("/");
    if (!authenticated && isLogged()) router.push("/books");
  }, [authenticated, isLogged]);

  return <></>;
};

export default Auth;
