import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Addons, setAddons } from "../../../store/features/userSlice";
import { backStep, nextStep } from "../../../store/features/stepSlice";
import * as Yup from "yup";
import Check from "./Addon/Check";
import { Store } from "../../../store/store";
import { useState } from "react";

const Addon = () => {
  const user = useSelector((state: Store) => state.user);

  const [addonF, setAddonF] = useState(user.addonF);
  const [addonS, setAddonS] = useState(user.addonS);
  const [addonT, setAddonT] = useState(user.addonT);

  const formik = useFormik({
    initialValues: {
      addonF: addonF,
      addonS: addonS,
      addonT: addonT,
    },
    validationSchema: Yup.object({
      addonF: Yup.boolean(),
      addonS: Yup.boolean(),
      addonT: Yup.boolean(),
    }),
    onSubmit: (values: Addons) => {
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
    setAddonF(!addonF);
    formik.values.addonF = !addonF;
  };

  const handleSChange = () => {
    setAddonS(!addonS);
    formik.values.addonS = !addonS;
  };

  const handleTChange = () => {
    setAddonT(!addonT);
    formik.values.addonT = !addonT;
  };

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column h-100">
      <div className="d-flex flex-column gap-3 pt-4">
        <Check
          main="Online service"
          description="Access to multiplayer games"
          price={1}
          isChecked={Boolean(addonF)}
          onChange={handleFChange}
        />
        <Check
          main="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          isChecked={Boolean(addonS)}
          onChange={handleSChange}
        />
        <Check
          main="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          isChecked={Boolean(addonT)}
          onChange={handleTChange}
        />
      </div>
      <div className="d-flex w-100 position-lg-static position-xs-fixed bottom-0 right-0 mt-auto p-lg-0 p-3 bg-white">
        <button
          className="btn-outline transition"
          type="button"
          onClick={backStepDispatch}
        >
          Back Step
        </button>
        <button className="btn ms-auto transition" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Addon;
