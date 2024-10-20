import React from "react";

function Home() {
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
        className="p-5 flex-1 h-[85%] bg-opacity-50 bg-slate-300 rounded-3xl"
        id="content"
      >
        <h1 className="text-2xl font-bold">Welcome to TechVerse</h1>
        <p>
          At TechVerse, we are revolutionizing the software development
          landscape. Our mission is to empower businesses with innovative
          solutions that drive growth and efficiency.
        </p>

        <h2 className="text-xl font-semibold">
          Who We Are
          <img
            src="https://img.icons8.com/ios-filled/20/000000/teamwork.png"
            alt="Team Icon"
            className="inline"
          />
        </h2>
        <p>
          We are a passionate team of developers, engineers, and visionaries
          dedicated to delivering cutting-edge technology. From building
          advanced robots to creating user-friendly websites and apps, we
          specialize in transforming ideas into reality.
        </p>

        <h2 className="text-xl font-semibold">
          Our Services
          <img
            src="https://img.icons8.com/ios-filled/20/000000/services.png"
            alt="Services Icon"
            className="inline"
          />
        </h2>
        <p>We offer a comprehensive range of services, including:</p>
        <ul className="list-disc pl-5">
          <li>
            <img
              src="https://img.icons8.com/ios-filled/15/000000/checkmark.png"
              alt="Check Icon"
              className="inline"
            />
            Custom Software Development
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/15/000000/checkmark.png"
              alt="Check Icon"
              className="inline"
            />
            Robotics Solutions
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/15/000000/checkmark.png"
              alt="Check Icon"
              className="inline"
            />
            Website Design and Development
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/15/000000/checkmark.png"
              alt="Check Icon"
              className="inline"
            />
            Mobile App Development
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-filled/15/000000/checkmark.png"
              alt="Check Icon"
              className="inline"
            />
            Maintenance and Support
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Why Choose Us? </h2>
        <p>
          With a focus on quality, innovation, and customer satisfaction,
          TechVerse is your ideal partner for software solutions. We work
          closely with our clients to ensure their vision is realized, providing
          ongoing support and expertise every step of the way.
        </p>

        <p>
          Join us on this exciting journey and let’s build the future together!
        </p>
      </div>
    </div>
  );
}

export default Home;
