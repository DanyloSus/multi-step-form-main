import { useSelector } from "react-redux";
import { Store } from "../../../../store/store";

interface Props {
  isChecked: boolean;
  main: string;
  description: string;
  price: number;
  onChange: () => void;
}

const Check = (props: Props) => {
  const user = useSelector((state: Store) => state.user);

  return (
    <div
      className={
        "w-100 h-80px d-flex align-items-center rounded-2 px-3 gap-3 pe-pointer border-hover-purplish-blue " +
        (props.isChecked ? "border-purplish-blue bg-alabaster" : "border")
      }
      onClick={props.onChange}
    >
      <input
        type="checkbox"
        id={props.main}
        name="addons"
        className="form-check-input bg-purplish-blue transition"
        checked={props.isChecked}
        onChange={props.onChange}
        style={{ width: "20px", height: "20px" }}
      />
      <div>
        <p className="m-0 fw-bold text-marine-blue">{props.main}</p>
        <p className="m-0 text-cool-gray">{props.description}</p>
      </div>
      <p className="ms-auto m-0 text-purplish-blue">
        {user.isYear ? `+$${props.price * 10}/yr` : `+$${props.price}/mo`}
      </p>
    </div>
  );
};

export default Check;
