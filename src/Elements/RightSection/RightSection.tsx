import { useState } from "react";
import Form from "./Form";
import Addon from "./Forms/Addon";
import Info from "./Forms/Info";
import Plan from "./Forms/Plan";
import Summary from "./Forms/Summary";
import { AnimatePresence, motion } from "framer-motion";

const RightSection = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return isConfirmed ? (
    <AnimatePresence>
      <motion.div
        className="h-100 w-100 d-flex align-items-center justify-content-center text-center flex-column p-lg-0 px-3 py-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-lg-450px">
          <img
            src="icon-thank-you.svg"
            alt="Thank You icon"
            className="w-lg-80px h-lg-80px h-56px w-56px"
          />
          <h3 className="fw-bold text-marine-blue my-lg-0 my-3">Thank You!</h3>
          <p className="text-cool-gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <div className="w-100 h-lg-500px d-flex align-items-center justify-content-center">
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
        <Summary setIsConfirmed={setIsConfirmed} />
      </Form>
    </div>
  );
};

export default RightSection;
