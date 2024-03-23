import React, { ReactNode } from "react";
import "./index.css";
import Image from "next/image";
import Link from "next/link";

type LayoutType = "login" | "register";

interface AuthLayoutProps {
  children: ReactNode;
  type: LayoutType;
}

const AuthLayouts: React.FC<AuthLayoutProps> = ({ children, type }) => {
  return (
    <div className="container-fluid auth-layouts">
      <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column row-gap-2 align-items-center">
          <div>
            <div className="d-flex align-items-center column-gap-3">
              <div className="position-relative wrapper-logo">
                <Image
                  src={"/images/logo/logo.png"}
                  fill
                  alt="Logo"
                  sizes="(max-width: 46px) 46px, 100px"
                />
              </div>
              <span className="text-logo">WorkFlow</span>
            </div>
          </div>
          <div>
            {type === "login" ? (
              <p className="text-dark fw-semibold">
                Please enter your login details
              </p>
            ) : (
              <p className="text-dark fw-semibold">
                Please enter your register details
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 container">
          {children}
          {type === "login" ? (
            <Link
              href={"/auth/register"}
              className="mx-auto direct-auth text-dark d-flex justify-content-center align-items-center w-100 text-center mt-3"
            >
              Don't have an account? <span>Create an account</span>
            </Link>
          ) : (
            <Link
              href={"/auth/login"}
              className="mx-auto direct-auth text-dark d-flex justify-content-center align-items-center w-100 text-center mt-3"
            >
              Already have an account? <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
