import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const credentials = {
  serviceId: "service_ecjp9a7",
  templateId: "template_h1x1fsj",
  userId: "user_Kjch3Nx11XW2cZFsKzeeq",
};

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    emailjs
      .sendForm(
        credentials.serviceId,
        credentials.templateId,
        e.target,
        credentials.userId
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
