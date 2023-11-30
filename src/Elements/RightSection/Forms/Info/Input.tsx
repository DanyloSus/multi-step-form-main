import { ChangeEventHandler } from "react";

interface InputProps {
  type: "email" | "text";
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  id: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        {props.error && props.touched && (
          <label className="form-label text-danger">{props.error}</label>
        )}
      </div>
      <input
        type={props.type}
        className={
          (props.error && props.touched && "border-danger") +
          " form-control border-hover-purplish-blue"
        }
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
