interface Props {
  img: string;
  name: string;
  monthPrice: number;
  isYear: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const Check = (props: Props) => {
  console.log(props.isSelected);

  return (
    <div
      className={
        "col-35 rounded-3 ps-3 py-3 " +
        (props.isSelected ? "border-purplish-blue bg-alabaster" : "border")
      }
      onClick={props.onClick}
    >
      <img
        src={props.img}
        alt={`Image of ${props.name}`}
        className="mb-4 w-40px h-40px"
      />
      <p className="m-0 fw-bold text-marine-blue">{props.name}</p>
      {props.isYear ? (
        <>
          <p className="text-cool-gray m-0">${props.monthPrice * 10}/yr</p>
          <p className="text-marine-blue">2 months free</p>
        </>
      ) : (
        <p className="text-cool-gray m-0">${props.monthPrice}/mo</p>
      )}
    </div>
  );
};

export default Check;
