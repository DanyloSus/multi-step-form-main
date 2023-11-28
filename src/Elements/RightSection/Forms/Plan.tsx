import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  Info as InfoInterface,
  setInfo,
} from "../../../store/features/userSlice";
import { nextStep, backStep } from "../../../store/features/stepSlice";
import * as Yup from "yup";

const Plan = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      phoneNumber: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleChange(values);
      nextStepDispatch();
    },
  });

  const dispatch = useDispatch();

  const handleChange = (values: InfoInterface) => {
    dispatch(setInfo(values));
  };

  const nextStepDispatch = () => {
    dispatch(nextStep());
  };

  const backStepDispatch = () => {
    dispatch(backStep());
  };

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column h-100">
      <div className="d-flex mt-auto">
        <button
          className="btn-outline"
          type="button"
          onClick={backStepDispatch}
        >
          Back Step
        </button>
        <button className="btn ms-auto" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Plan;
