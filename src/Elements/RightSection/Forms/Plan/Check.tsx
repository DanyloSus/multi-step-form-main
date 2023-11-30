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
        "col-lg-35 rounded-3 p-lg-3 p-2 d-flex d-lg-block gap-2 gap-lg-3 align-items-center " +
        (props.isSelected ? "border-purplish-blue bg-alabaster" : "border")
      }
      onClick={props.onClick}
    >
      <img
        src={props.img}
        alt={`Image of ${props.name}`}
        className="mb-lg-4 w-40px h-40px"
      />
      <div>
        <p className="m-0 fw-bold text-marine-blue">{props.name}</p>
        {props.isYear ? (
          <>
            <p className="text-cool-gray m-0">${props.monthPrice * 10}/yr</p>
            <p className="text-marine-blue m-0">2 months free</p>
          </>
        ) : (
          <p className="text-cool-gray m-0">${props.monthPrice}/mo</p>
        )}
      </div>
    </div>
  );
};

export default Check;
