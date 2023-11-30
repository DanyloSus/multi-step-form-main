import { useDispatch, useSelector } from "react-redux";
import { backStep } from "../../../store/features/stepSlice";
import { Store } from "../../../store/store";
import Check from "./Summary/Check";

interface Props {
  setIsConfirmed: (arg0: boolean) => void;
}

const Summary = (props: Props) => {
  const user = useSelector((state: Store) => state.user);

  const dispatch = useDispatch();

  const setStep = () => {
    backStepDispatch();
    backStepDispatch();
  };

  const backStepDispatch = () => {
    dispatch(backStep());
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="d-flex flex-column gap-3 mt-4 w-100 bg-magnolia rounded-2 p-3">
        <div className="w-100 d-flex align-items-center">
          <div className="me-auto">
            <h5 className="m-0 text-marine-blue fw-bold">
              {user.plan == 1 ? "Arcade" : user.plan == 2 ? "Advanced" : "Pro"}
            </h5>
            <a href="#" className="text-cool-gray m-0" onClick={setStep}>
              Change
            </a>
          </div>
          <p className="m-0 text-marine-blue fw-bold">
            $
            {user.isYear &&
              `${
                user.plan == 1 ? 9 * 10 : user.plan == 2 ? 12 * 10 : 15 * 10
              }/yr`}
            {!user.isYear &&
              `${user.plan == 1 ? 9 : user.plan == 2 ? 12 : 15}/mo`}
          </p>
        </div>
        <hr className="m-0" />
        <Check
          is={Boolean(user.addonF)}
          name="Online service"
          price={1}
          isYear={Boolean(user.isYear)}
        />
        <Check
          is={Boolean(user.addonS)}
          name="Large storage"
          price={2}
          isYear={Boolean(user.isYear)}
        />
        <Check
          is={Boolean(user.addonT)}
          name="Customizable profile"
          price={2}
          isYear={Boolean(user.isYear)}
        />
      </div>
      <div className="p-3 d-flex justify-content-between align-items-center">
        <p className="text-cool-gray">
          Total (per {user.isYear ? "year" : "month"})
        </p>
        <h5 className="text-purplish-blue fw-bold">
          $
          {((user.plan == 1 ? 9 : user.plan == 2 ? 12 : 15) +
            (user.addonF ? 1 : 0) +
            (user.addonS ? 2 : 0) +
            (user.addonT ? 2 : 0)) *
            (user.isYear ? 10 : 1)}
          /{user.isYear ? "yr" : "mo"}
        </h5>
      </div>
      <div className="d-flex w-100 position-lg-static position-xs-fixed bottom-0 right-0 mt-auto p-lg-0 p-3 bg-white">
        <button
          className="btn-outline transition"
          type="button"
          onClick={backStepDispatch}
        >
          Back Step
        </button>
        <button
          className="btn btn-purplish-blue ms-auto transition"
          type="submit"
          style={{ backgroundColor: "hsl(243, 100%, 62%)" }}
          onClick={() => props.setIsConfirmed(true)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
