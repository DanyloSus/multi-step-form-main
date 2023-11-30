import { useSelector } from "react-redux";
import { Store } from "../../store/store";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  legend: string;
  formText: string;
  children: ReactNode;
  step: number;
}

const Form = (props: Props) => {
  const step = useSelector((state: Store) => state.step);

  return (
    step == props.step && (
      <AnimatePresence>
        <motion.div
          className="w-450px h-100 pt-lg-5 pb-lg-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <legend>{props.legend}</legend>
          <div>{props.formText}</div>
          {props.children}
        </motion.div>
      </AnimatePresence>
    )
  );
};

export default Form;
