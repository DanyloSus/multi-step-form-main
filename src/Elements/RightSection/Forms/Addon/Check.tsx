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
    <div className="w-100 h-80px mt-4 d-flex border align-items-center rounded-2 px-3 gap-3">
      <input
        type="checkbox"
        id={props.main}
        name="addons"
        className="form-check-input"
        checked={props.isChecked}
        onChange={props.onChange}
      />
      <div>
        <p className="m-0 fw-bold text-marine-blue">{props.main}</p>
        <p className="m-0">{props.description}</p>
      </div>
      <p className="ms-auto m-0">
        {user.isYear ? `+$${props.price * 10}/yr` : `+$${props.price}/mo`}
      </p>
    </div>
  );
};

export default Check;
