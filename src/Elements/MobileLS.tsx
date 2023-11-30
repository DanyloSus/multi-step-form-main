import Step from "./LeftSection/Step";

const MobileLS = () => {
  return (
    <div className="d-lg-none d-block position-absolute top-0 left-0 w-100">
      <img
        src="bg-sidebar-mobile.svg"
        alt="Background of the mobile sidebar"
        className="position-absolute top-0 left-0 w-100 image-fluid"
      />
      <div className="d-flex justify-content-center align-items-center z-1 position-relative w-100 h-100 pt-5 px-5">
        <Step stepNum={1} name="your info" />
        <Step stepNum={2} name="select plan" />
        <Step stepNum={3} name="add-ons" />
        <Step stepNum={4} name="summary" />
      </div>
    </div>
  );
};

export default MobileLS;
