import Form from "./Form";
import Addon from "./Forms/Addon";
import Info from "./Forms/Info";
import Plan from "./Forms/Plan";
import Summary from "./Forms/Summary";

const RightSection = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center">
      <Form
        legend="Personal info"
        step={1}
        formText="Please provide your name, email address, and phone number."
      >
        <Info />
      </Form>
      <Form
        legend="Personal info"
        step={2}
        formText="Please provide your name, email address, and phone number."
      >
        <Plan />
      </Form>
      <Form
        legend="Personal info"
        step={3}
        formText="Please provide your name, email address, and phone number."
      >
        <Addon />
      </Form>
      <Form
        legend="Personal info"
        step={4}
        formText="Please provide your name, email address, and phone number."
      >
        <Summary />
      </Form>
    </div>
  );
};

export default RightSection;
