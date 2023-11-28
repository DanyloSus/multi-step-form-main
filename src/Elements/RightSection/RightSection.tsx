import Form from "./Form";
import Addon from "./Forms/Addon";
import Info from "./Forms/Info";
import Plan from "./Forms/Plan";
import Summary from "./Forms/Summary";

const RightSection = () => {
  return (
    <div className="w-100 h-500px d-flex align-items-center justify-content-center">
      <Form
        legend="Personal info"
        step={1}
        formText="Please provide your name, email address, and phone number."
      >
        <Info />
      </Form>
      <Form
        legend="Select your plan"
        step={2}
        formText="You have the option of monthly or yearly billing."
      >
        <Plan />
      </Form>
      <Form
        legend="Pick add-ons"
        step={3}
        formText="Add-ons help enhance your gaming experience."
      >
        <Addon />
      </Form>
      <Form
        legend="Finishing up"
        step={4}
        formText="Double-check everything looks OK before confirming."
      >
        <Summary />
      </Form>
    </div>
  );
};

export default RightSection;
