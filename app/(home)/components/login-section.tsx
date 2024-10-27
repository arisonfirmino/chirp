"use client";

import { useState } from "react";
import Copyright from "./copyright";
import SignInApple from "./signin-apple";
import SignInGoogle from "./signin-google";

const LoginSection = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <section className="relative flex w-full flex-col items-center md:w-auto md:flex-row">
      <Copyright />
      <div className="w-full space-y-10 rounded-xl border border-solid border-gray-200 bg-white p-10 shadow-md md:w-[448px]">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">
            {signUpMode ? "Cadastre-se" : "Faça login"}
          </h1>
          <p className="text-gray-400">para acessar a aplicação</p>
        </div>

        <div className="space-y-3">
          <SignInApple />
          <SignInGoogle />
        </div>

        <div className="text-gray-400">
          {signUpMode ? "já tem uma conta?" : "ainda não tem uma conta?"}{" "}
          <button
            onClick={() => setSignUpMode(!signUpMode)}
            className="text-blue-700 underline active:text-gray-400"
          >
            {signUpMode ? "Fazer login" : "Criar conta"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
