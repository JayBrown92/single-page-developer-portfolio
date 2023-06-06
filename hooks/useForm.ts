import { ChangeEvent, FormEvent, useState } from "react";

export default function useForm(InitialFormState: any, callback: any) {
  const [formData, setFormData] = useState({ InitialFormState });
  const [errors, setErrors] = useState({});

  const validateInput = (name: string, value: string | number) => {
    if (name === "email") {
      if (value.toString().length < 1) {
        setErrors({ ...errors, emailErr: "Please provide a valid email" });
        return false;
      }
    }
    return true;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
    validateInput(name, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInput) {
      console.log("there are errors");
    } else {
      return callback;
    }
  };
  return {
    handleSubmit,
    errors,
    handleChange,
    formData,
  };
}
