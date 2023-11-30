import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  Plan as PlanInterface,
  setPlan,
} from "../../../store/features/userSlice";
import { nextStep, backStep } from "../../../store/features/stepSlice";
import * as Yup from "yup";
import { Store } from "../../../store/store";
import Check from "./Plan/Check";
import { useState } from "react";

const Plan = () => {
  const user = useSelector((state: Store) => state.user);

  const [planID, setPlanID] = useState(Number(user.plan));
  const [isYear, setIsYear] = useState(Boolean(user.isYear));

  const formik = useFormik({
    initialValues: {
      plan: planID,
      isYear: isYear,
    },
    validationSchema: Yup.object({
      plan: Yup.number(),
      isYear: Yup.boolean(),
    }),
    onSubmit: (values) => {
      handleChange(values);
      nextStepDispatch();
    },
  });

  const dispatch = useDispatch();

  const handleChange = (values: PlanInterface) => {
    dispatch(setPlan(values));
  };

  const nextStepDispatch = () => {
    dispatch(nextStep());
  };

  const backStepDispatch = () => {
    dispatch(backStep());
  };

  const handleChangeID = (id: number) => {
    setPlanID(id);
    formik.values.plan = id;
  };

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column h-100">
      <div className="content mt-4">
        <div className="row row-cols-lg-3 flex-nowrap justify-content-between flex-column flex-lg-row gap-3">
          <Check
            img="icon-arcade.svg"
            name="Arcade"
            monthPrice={9}
            isYear={isYear}
            isSelected={planID === 1}
            onClick={() => {
              handleChangeID(1);
            }}
          />
          <Check
            img="icon-advanced.svg"
            name="Advanced"
            monthPrice={12}
            isYear={isYear}
            isSelected={planID === 2}
            onClick={() => {
              handleChangeID(2);
            }}
          />
          <Check
            img="icon-pro.svg"
            name="Pro"
            monthPrice={15}
            isYear={isYear}
            isSelected={planID === 3}
            onClick={() => {
              handleChangeID(3);
            }}
          />
        </div>
      </div>
      <div className="mt-4 bg-magnolia d-flex gap-4 w-100 fw-bold justify-content-center align-items-center rounded-3 py-2">
        <p className={(isYear && "text-cool-gray") + " m-0"}>Monthly</p>
        <div className="form-check form-switch m-0">
          <input
            className="form-check-input pe-pointer"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={isYear}
            onChange={(e) => {
              setIsYear(e.target.checked);
              formik.values.isYear = e.target.checked;
            }}
          />
        </div>
        <p className={(!isYear && "text-cool-gray") + " m-0"}>Yearly</p>
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

export default Plan;
