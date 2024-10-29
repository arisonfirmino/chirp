"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoaderCircleIcon, SendHorizontalIcon } from "lucide-react";
import { createNewPost } from "@/app/actions/post";
import { FormData } from "@/app/types";

const schema = yup.object({
  post: yup
    .string()
    .required("Escreva algo para compartilhar com a comunidade.")
    .min(3, "Sua publicação deve ter ao menos 3 caracteres."),
});

const Form = () => {
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
  const onSubmit = async (data: FormData) => {
    const formData = {
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      image: session?.user?.image ?? "",
      text: data.post,
    };

    setLoading(true);

    try {
      await createNewPost(formData);
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
      <textarea
        rows={1}
        placeholder="O que está pensando ?"
        {...register("post")}
        className={`w-full resize-none border-b border-solid bg-transparent p-2.5 outline-none [&::-webkit-scrollbar]:hidden ${errors.post ? "border-red-600" : "border-gray-400"}`}
      ></textarea>
      <div className="flex items-center justify-between p-2.5">
        <p
          className={`text-xs md:text-sm ${errors.post ? "text-red-600" : "text-gray-400"}`}
        >
          {errors.post
            ? `${errors.post.message}`
            : "Compartilhe suas ideias com a comunidade."}
        </p>
        <button
          type="submit"
          disabled={loading}
          className={`text-blue-700 ${loading ? "cursor-not-allowed" : ""}`}
        >
          {loading ? (
            <LoaderCircleIcon size={16} className="animate-spin" />
          ) : (
            <SendHorizontalIcon size={20} />
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
