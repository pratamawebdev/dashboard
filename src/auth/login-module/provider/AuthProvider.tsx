"use client";

import { redirect, usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const pathname: string = usePathname();

  useEffect(() => {
    const token: string | null = localStorage?.getItem("token");

    if ((!token || token === "undefined") && pathname !== "/auth/login") {
      redirect("/auth/login");
    }

    if (token && pathname === "/auth/login") {
      redirect("/");
    }
  }, [pathname]);

  return <div> {children} </div>;
};

export default AuthProvider;
