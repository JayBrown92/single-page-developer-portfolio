import Image from "next/image";
import ringsPattern from "../../../public/pattern-rings.svg";
import Container from "../UI/Container";
import Section from "../UI/Section";

import { FormEvent, useState, ChangeEvent, FocusEvent } from "react";

type FormInputTypes = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormInputTypes>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormInputTypes>({
    name: "",
    email: "",
    message: "",
  });

  const [areFormErrors, setAreFormErrors] = useState<boolean>();
  const [formError, setFormError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error message on input change
  };

  const validateInput = (name: keyof FormInputTypes) => {
    const el = document.querySelector(`#${name}`) as
      | HTMLInputElement
      | HTMLTextAreaElement;

    const isInvalidPattern = el.validity.patternMismatch;
    const isInvalidType = el.validity.typeMismatch;
    const isRequired = el.validity.valueMissing;

    if (isInvalidPattern || isInvalidType || isRequired) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Please enter a valid ${name}.`,
      }));
      el.classList.add("invalid:border-color-disabled");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
      el.classList.remove("invalid:border-color-disabled");
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    validateInput(name as keyof FormInputTypes);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const isValid = formEl.checkValidity();
    const formData = new FormData(formEl);

    if (isValid) {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
        email: "",
        message: "",
      }));
      setFormData((prevState) => ({
        ...prevState,
        name: "",
        email: "",
        message: "",
      }));
      setFormError("Thank you for submitting the form.");
      setAreFormErrors(false);
      formEl.reset();
    } else {
      for (const key of formData.keys()) {
        validateInput(key as keyof FormInputTypes);
      }
      setFormError("Please fix errors in the form.");
      setAreFormErrors(true);
    }
  };

  return (
    <Section id="contact-me-section" className=" bg-secondary-bg">
      <Container className="flex flex-wrap justify-center gap-y-5 text-center  after:absolute after:bottom-0 after:left-4 after:right-4 after:mx-auto after:border-y-[1px] after:border-color-secondary/50 md:gap-10 md:after:left-8 md:after:right-8 lg:justify-between lg:text-left lg:after:left-16 lg:after:right-16">
        <div className="flex w-full max-w-[445px] flex-col gap-y-8 ">
          <h2> Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form
          className="  grid w-full  max-w-[445px] gap-y-8 text-left uppercase text-color-secondary/50"
          onSubmit={handleSubmit}
          noValidate
        >
          {areFormErrors ? (
            <h4 className="text-color-disabled">{formError}</h4>
          ) : (
            <h4>{formError}</h4>
          )}

          <div>
            <input
              className="h-10 w-full border-b-2  border-color-primary/50 bg-secondary-bg  outline-0	placeholder:-translate-y-1.5 placeholder:translate-x-4    focus:border-color-accent active:border-color-accent "
              id="name"
              name="name"
              type="text"
              value={formData.name}
              required
              pattern="^([^0-9]*)$"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="NAME"
            />
            <p className="min-h-6 text-color-disabled">{errors.name}</p>
          </div>
          <div>
            <input
              className="h-10 w-full border-b-2 border-color-primary/50  bg-secondary-bg  outline-0 	placeholder:-translate-y-1.5   placeholder:translate-x-4 focus:border-color-accent focus:bg-secondary-bg active:border-color-accent "
              id="email"
              name="email"
              type="email"
              placeholder="EMAIL"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="h-6 text-color-disabled">{errors.email}</p>
          </div>
          <div>
            <textarea
              className=" h-28 w-full overflow-x-hidden border-b-2 border-color-primary/50 bg-secondary-bg  outline-none placeholder:-translate-y-1.5	  placeholder:translate-x-4 focus:border-color-accent focus:bg-secondary-bg active:border-color-accent "
              id="message"
              placeholder="MESSAGE"
              name="message"
              value={formData.message}
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="min-h-6 text-color-disabled">{errors.message}</p>
          </div>
          <button
            type="submit"
            className="ml-auto whitespace-nowrap	border-b-2 border-color-accent pb-3 font-bold uppercase tracking-widest text-color-secondary transition-colors hover:text-color-accent"
          >
            send message
          </button>
        </form>
        <Image
          src={ringsPattern}
          width={530}
          height={129}
          alt="pattern for hero section design consiting of multiple flat rings"
          className="absolute -left-48 bottom-0  z-10 -translate-y-28 md:-left-96 lg:-bottom-16 "
        />
      </Container>
    </Section>
  );
}
