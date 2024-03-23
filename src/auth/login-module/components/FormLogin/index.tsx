"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../libs/form-schema";
import { z } from "zod";
import "./index.css";
import { loginUser } from "../../libs/api";
import Modal from "@/auth/components/Modal";
import WarningAlert from "../WarningAlert";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    try {
      const response = await loginUser(data);
      console.log(response);
      setError(null);
      setIsLoading(false);
      setSuccess({
        title: "You have successfully logged in",
        description: "You will immediately enter the dashboard page",
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setError("Password or username may be incorrect");
    }
  };

  const handleCloseModal = () => {
    setSuccess(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <WarningAlert onClick={() => setError(null)}>{error}</WarningAlert>
        )}
        <div className="mb-3 d-flex flex-column row-gap-1">
          <label htmlFor="username" className="fw-medium fs-6 text-dark">
            Username
          </label>
          <input
            type="text"
            className="rounded-3 py-1 px-3 input-login"
            id="username"
            aria-describedby="username"
            placeholder="kminchelle"
            autoComplete="off"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-danger error-text">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="mb-3 d-flex flex-column row-gap-1">
          <label htmlFor="password" className="fw-medium fs-6 text-dark">
            Password
          </label>
          <input
            type="password"
            className="rounded-3 py-1 px-3 input-login"
            id="password"
            placeholder="******"
            autoComplete="off"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-danger error-text">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="btn-login rounded-3 fs-6 fw-bold py-2 d-flex align-items-center justify-content-center column-gap-2"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              Submit
              <span className="position-relative wrapper-arrow-icon">
                <Image
                  src={"/images/icon/arrow-right.png"}
                  fill
                  alt="Arrow right"
                  sizes="(max-width: 20px) 20px, 100px"
                />
              </span>
            </>
          )}
        </button>
      </form>
      {success && (
        <Modal
          onClick={handleCloseModal}
          title={success.title}
          description={success.description}
        />
      )}
    </>
  );
};

export default FormLogin;
