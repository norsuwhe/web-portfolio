import { motion } from "framer-motion";
import "./AnimatedMain.scss";

const AnimatedMain = ({ children }) => {
  return (
    <motion.main
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="main-container"
    >
      {children}
    </motion.main>
  );
};

export default AnimatedMain;
