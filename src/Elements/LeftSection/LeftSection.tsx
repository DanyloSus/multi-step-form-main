import Step from "./Step";

const LeftSection = () => {
  return (
    <div className="w-274px position-relative p-0 h-100 p-0">
      <img
        src="./bg-sidebar-desktop.svg"
        alt="Sidebar"
        className="position-absolute top-0 left-0 image-fluid w-100 h-100"
      />
      <div className="container w-100 h-100 p-5 z-1 position-relative g-5 p-0">
        <Step stepNum={1} name="your info" />
        <Step stepNum={2} name="select plan" />
        <Step stepNum={3} name="add-ons" />
        <Step stepNum={4} name="summary" />
      </div>
    </div>
  );
};

export default LeftSection;
