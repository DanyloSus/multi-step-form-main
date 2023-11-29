interface Props {
  is: boolean;
  name: string;
  price: number;
  isYear: boolean;
}

const Check = (props: Props) => {
  return (
    props.is && (
      <div className="d-flex align-items-center" style={{ fontSize: "14px" }}>
        <p className="m-0 text-cool-gray me-auto">{props.name}</p>
        <p className="m-0 text-marine-blue">
          +${props.price * (props.isYear ? 10 : 1)}/{props.isYear ? "yr" : "mo"}
        </p>
      </div>
    )
  );
};

export default Check;
