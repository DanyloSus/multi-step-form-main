import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  Info as InfoInterface,
  setInfo,
} from "../../../store/features/userSlice";
import { nextStep } from "../../../store/features/stepSlice";
import * as Yup from "yup";
import Input from "./Info/Input";
import { Store } from "../../../store/store";

const Info = () => {
  const user = useSelector((state: Store) => state.user);

  const formik = useFormik({
    initialValues: {
      name: String(user.name),
      email: String(user.email),
      phoneNumber: String(user.phoneNumber),
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be a number")
        .required("Required"),
    }),
    onSubmit: (values) => {
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

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column h-100">
      <Input
        type="text"
        label="Name"
        error={formik.errors.name}
        touched={formik.touched.name}
        id="name"
        placeholder="e.g. Stephen King"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input
        type="email"
        label="Email Address"
        error={formik.errors.email}
        touched={formik.touched.email}
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        type="text"
        label="Phone Number"
        error={formik.errors.phoneNumber}
        touched={formik.touched.phoneNumber}
        id="phoneNumber"
        placeholder="e.g. +1 234 567 890"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      <div className="d-flex mt-auto">
        <button className="btn ms-auto" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Info;
