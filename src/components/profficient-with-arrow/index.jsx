import { motion } from "framer-motion";
import { fadeInLeft } from "../../animations/framer-animations";

const ProfficientWithArrow = ({ minimal }) => (
  <motion.div
    className={`profficient-with-arrow ${!minimal && "large-top-margin"}`}
    variants={fadeInLeft}
  >
    <img src="/assets/icons/arrow.svg" alt="arrow" />
    <p>Proficient With</p>
  </motion.div>
);

export default ProfficientWithArrow;
