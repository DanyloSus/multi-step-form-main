import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Addons, setAddons } from "../../../store/features/userSlice";
import { backStep, nextStep } from "../../../store/features/stepSlice";
import * as Yup from "yup";
import Check from "./Addon/Check";
import { Store } from "../../../store/store";

const Addon = () => {
  const user = useSelector((state: Store) => state.user);

  const formik = useFormik({
    initialValues: {
      addonF: user.addonF,
      addonS: user.addonS,
      addonT: user.addonT,
    },
    validationSchema: Yup.object({
      addonF: Yup.boolean(),
      addonS: Yup.boolean(),
      addonT: Yup.boolean(),
    }),
    onSubmit: (values: Addons) => {
      alert(JSON.stringify(values, null, 2));
      handleChange(values);
      nextStepDispatch();
    },
  });

  const dispatch = useDispatch();

  const handleChange = (values: Addons) => {
    dispatch(setAddons(values));
  };

  const nextStepDispatch = () => {
    dispatch(nextStep());
  };

  const backStepDispatch = () => {
    dispatch(backStep());
  };

  const handleFChange = () => {
    formik.values.addonF = !formik.values.addonF;
  };

  const handleSChange = () => {
    formik.values.addonS = !formik.values.addonS;
  };

  const handleTChange = () => {
    formik.values.addonT = !formik.values.addonT;
  };

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column h-100">
      <div className="d-flex flex-column gap-3">
        <Check
          main="Online service"
          description="Access to multiplayer games"
          price={1}
          isChecked={Boolean(formik.values.addonF)}
          onChange={handleFChange}
        />
        <Check
          main="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          isChecked={Boolean(formik.values.addonS)}
          onChange={handleSChange}
        />
        <Check
          main="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          isChecked={Boolean(formik.values.addonT)}
          onChange={handleTChange}
        />
      </div>
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

export default Addon;
