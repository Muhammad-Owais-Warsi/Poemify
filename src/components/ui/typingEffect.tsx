import React from "react";
import { ReactTyped } from "react-typed";
// import "./home.css";

const TypingEffect = () => {
  return (
    <div className="  text-white flex items-center pt-5">
      <div className="container text-center p-5 ">
        <p className=" text-purple-500 font-bold  font-sans tracking-widest">
          Generate a poem for my
        </p>
        <ReactTyped
          strings={[
            "Beautiful wife",
            "Girlfriend who loves dogs",
            "School homework about nature",
            "Poetic Husband",
            "Mom for Mother's Day",
            "10-year anniversary",
            "Dad - My Super Hero",
            "Mom's eulogy",
            "English Homework",
            "Sister's birthday",
          ]}
          typeSpeed={30}
          backSpeed={50}
          loop
          className="text-lg md:text-3xl"
          style={{ fontWeight: "900" }}
        />
      </div>
    </div>
  );
};

export default TypingEffect;
