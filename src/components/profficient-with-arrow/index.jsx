import { motion } from "framer-motion";
import { fadeInLeft } from "../../animations/framer-animations";

const ProfficientWithArrow = () => (
  <motion.div className="profficient-with-arrow" variants={fadeInLeft}>
    <img src="/assets/icons/arrow.svg" alt="arrow" />
    <p>Proficient With</p>
  </motion.div>
);

export default ProfficientWithArrow;
