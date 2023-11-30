import { useSelector } from "react-redux";
import { Store } from "../../store/store";
import { ReactNode } from "react";

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
      <div className="w-450px h-100 pt-lg-5 pb-lg-3">
        <legend>{props.legend}</legend>
        <div>{props.formText}</div>
        {props.children}
      </div>
    )
  );
};

export default Form;
