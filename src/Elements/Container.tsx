import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

const Container = () => {
  return (
    <div className="shadow-sm rounded-4 p-3 mh-600px w-100 row bg-white container h-100">
      <div className="col-lg-4 p-0 h-100 d-none d-lg-block">
        <LeftSection />
      </div>
      <div className="col-lg-8 p-0 h-100">
        <RightSection />
      </div>
    </div>
  );
};

export default Container;
