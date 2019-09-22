import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const ContactInfo = () => {
  const { darkMode, dark, light } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  return (
    <div className={`px-6 pt-8 lg:py-12 lg:w-1/2 ${theme.fg}`}>
      <p className="mb-4">
        Feel free to give us a call on the numbers below or use the enquiry form
        to drop us an email.
      </p>
      <div className="mb-4">
        <p className="font-bold">
          Phone:
          <span className="font-normal tracking-wide"> 012 345 6789 </span>
        </p>
        <p className="font-bold">
          Fax:
          <span className="font-normal tracking-wide"> 012 345 6789 </span>
        </p>
        <p className="font-bold">
          Email:
          <span className="font-normal tracking-wide"> mail@email.co.nz </span>
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold">Opening Hours</h1>
        <p>Monday to Friday 08:30am - 05:00pm</p>
        <p>Saturday 10.00am - 02:00pm</p>
      </div>
    </div>
  );
};

export default ContactInfo;
