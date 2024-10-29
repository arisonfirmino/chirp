"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import FormTextarea from "./form-textarea";
import SubmitButton from "./submit-button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  text: yup
    .string()
    .required("Escreva algo para compartilhar com a comunidade.")
    .min(3, "Sua publicação deve ter ao menos 3 caracteres."),
});

interface FormData {
  name: string;
  email: string;
  image: string;
  text: string;
  postId: string;
}

interface FormProps {
  placeholder: string;
  handleSubmitForm: (formData: FormData) => void;
  postId?: string;
}

const Form = ({ placeholder, handleSubmitForm, postId }: FormProps) => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { text: string }) => {
    const formData = {
      postId: postId ?? "",
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      image: session?.user?.image ?? "",
      text: data.text,
    };

    setLoading(true);

    try {
      await handleSubmitForm(formData);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-solid border-gray-200 bg-white p-2.5 shadow"
    >
      <FormTextarea
        placeholder={placeholder}
        register={{ ...register("text") }}
        error={errors.text}
      />
      <div className="flex items-center justify-between p-2.5">
        <p
          className={`text-xs md:text-sm ${errors.text ? "text-red-600" : "text-gray-400"}`}
        >
          {errors.text
            ? `${errors.text.message}`
            : "Compartilhe suas ideias com a comunidade."}
        </p>
        <SubmitButton loading={loading} />
      </div>
    </form>
  );
};

export default Form;
