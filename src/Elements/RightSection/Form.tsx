import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store/store";
import { nextStep, backStep } from "../../store/features/stepSlice";
import { ReactNode, FormEvent } from "react";
import { Formik } from "formik";

interface Props {
  legend: string;
  formText: string;
  children: ReactNode;
  step: number;
}

const Form = (props: Props) => {
  const step = useSelector((state: Store) => state.step);
  const dispatch = useDispatch();

  const nextStepDispatch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(nextStep());
  };

  const backStepDispatch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(backStep());
  };

  return (
    step == props.step && (
      <div className="w-450px pt-5 pb-3">
        <legend>{props.legend}</legend>
        <div>{props.formText}</div>
        {props.children}
      </div>
    )
  );
};

export default Form;
