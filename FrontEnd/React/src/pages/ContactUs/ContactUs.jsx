import React from "react";

function ContactUs() {
  return (
    <div
      className="w-[90%] mx-auto space-y-10 bg-slate-300 bg-opacity-60 rounded-3xl border border-black shadow-2xl py-4 px-3"
      style={{
        margin: "0.5rem",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        classNameName="p-5 flex-1 h-[85%] bg-opacity-50 bg-slate-300 rounded-3xl"
        id="content"
      >
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p>
          Have questions or need assistance? We're here to help! Reach out to us
          using the following methods:
        </p>

        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <ul className="list-disc pl-5">
          <li>
            <img
              src="https://img.icons8.com/ios-filled/20/000000/email.png"
              alt="Email Icon"
              className="inline mr-2"
            />
            <strong>Email:</strong>
            <a href="mailto:info@techverse.com" className="text-blue-500">
              info@techverse.com
            </a>{" "}
            - We aim to respond within one business day.
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/20/000000/phone.png"
              alt="Phone Icon"
              className="inline mr-2"
            />
            <strong>Phone:</strong>
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>{" "}
            - Call us during business hours.
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/20/000000/twitter.png"
              alt="Social Media Icon"
              className="inline mr-2"
            />
            <strong>Social Media:</strong> Follow us on
            <a href="https://facebook.com/techverse" className="text-blue-500">
              Facebook
            </a>
            ,
            <a href="https://twitter.com/techverse" className="text-blue-500">
              Twitter
            </a>
            , and
            <a
              href="https://linkedin.com/company/techverse"
              className="text-blue-500"
            >
              LinkedIn
            </a>
            .
          </li>
        </ul>
        <h2 className="text-xl font-semibold">Visit Us</h2>
        <p>Our office is located at:</p>
        {/* <address className="pl-5">
        TechVerse Headquarters<br>
        123 Innovation Drive<br>
        Silicon Valley, CA 94043<br>
        USA
    </address> */}
        <h2 className="text-xl font-semibold">Business Hours</h2>
        <p>We’re open:</p>
        <ul className="list-disc pl-5">
          <li>Monday to Friday: 9 AM - 6 PM</li>
          <li>Saturday: 10 AM - 4 PM</li>
          <li>Sunday: Closed</li>
        </ul>
        <p>We look forward to connecting with you!</p>
      </div>
    </div>
  );
}

export default ContactUs;
