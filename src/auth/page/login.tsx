import React from "react";
import FormLogin from "../login-module/components/FormLogin";
import AuthLayouts from "../components/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
