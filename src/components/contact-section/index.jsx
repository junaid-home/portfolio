import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "./contact-form";
import FormSuccess from "./form-success";
import SectionWave from "../section-wave";

import { fadeInOut } from "../../animations/framer-animations";
import { useScroll } from "../../animations/useScroll";

const ContactSection = () => {
  const [element, controls] = useScroll();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        <span>C</span>ontact
      </motion.h2>
      <motion.p
        className="contact-section-message"
        variants={fadeInOut}
        initial="hidden"
        animate={controls}
        ref={element}
      >
        Fell free to drop me a message, I will respond as soon as possible!
      </motion.p>
      {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />}
      <SectionWave secondary />
    </section>
  );
};

export default ContactSection;
