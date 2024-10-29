import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const FormTextarea = ({ placeholder, register, error }: FormTextareaProps) => {
  return (
    <textarea
      rows={1}
      placeholder={placeholder}
      {...register}
      className={`w-full resize-none border-b border-solid bg-transparent p-2.5 outline-none [&::-webkit-scrollbar]:hidden ${error ? "border-red-600" : "border-gray-400"}`}
    ></textarea>
  );
};

export default FormTextarea;
