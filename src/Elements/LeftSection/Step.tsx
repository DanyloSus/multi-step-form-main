import { useSelector } from "react-redux";
import { Store } from "../../store/store";

interface Props {
  stepNum: number;
  name: string;
}

const Step = (props: Props) => {
  const step = useSelector((state: Store) => state.step);

  return (
    <div className="container mb-32px">
      <div className="row align-items-center">
        <div
          className={
            (step == props.stepNum
              ? "bg-pastel-blue text-marine-blue"
              : "text-white border border-white") +
            " col-lg-1 rounded-circle w-33px h-33px d-flex align-items-center justify-center fw-bold"
          }
        >
          {props.stepNum}
        </div>
        <div className="col-lg-9 ms-2 p-0">
          <div className="container p-0 w-100">
            <div className="row w-100">
              <div className="col text-light-blue">Step {props.stepNum}</div>
            </div>
            <div className="row w-100">
              <div className="col fw-bold text-white text-uppercase">
                {props.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
