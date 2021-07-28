import { motion } from "framer-motion";

import CustomButton from "../custom-button";
import useForm from "./useForm";
import validate from "./validate-info";

import { fadeInOut } from "../../animations/framer-animations";
import { useScroll } from "../../animations/useScroll";

const ContactForm = ({ submitForm }) => {
  const [element, controls] = useScroll();
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <motion.div
      className="form-container"
      variants={fadeInOut}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <form
        className="form"
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div className="form-inputs">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            type="textarea"
            name="message"
            rows="15"
            className="form-input form-input-message"
            placeholder="Enter your message here..."
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <CustomButton text="Send" type="submit" />
      </form>
    </motion.div>
  );
};

export default ContactForm;
