import React from "react";
import { raleway } from "../font";

const Contact = () => {
  return (
    <div className="w-full min-h-screen -mt-28 lg:-mt-36 flex flex-row flex-wrap bg-gradient-hack-background">
      <div className="w-full  lg:w-1/2  p-[50px] pt-36 lg:pt-80 lg:pb-20">
        <h3 className="text-4xl text-primary font-semibold">
          CONTACT US. LET&apos;S GET YOUR PROJECT STARTED
        </h3>
        <p className={`text-xl text-black  mt-8 ${raleway.className}`}>
          Build your next innovation. It’s time to redefine what awesome really
          looks like.
        </p>
        <p className={`text-xl text-black  mt-4 ${raleway.className}`}>
          And remember: We cherish every interaction and love to hear great
          initiatives. Share your ideas with us today and we&apos;ll get back to
          you as soon as possible to establish how best we can work together to
          make your project shine.
        </p>
        <h3 className="text-4xl text-secondary font-bold mt-12 ">
          We&apos;re looking forward to hearing from you
        </h3>
      </div>
      <div className="w-full lg:w-1/2  p-[50px] pt-36 lg:pt-80 lg:pb-20">
        <form className="w-full text-white text-lg">
          <div className=" w-full flex flex-wrap justify-between">
            <label className="w-[48%] inline-block">
            First Name
            <input
              type="text"
              name="first_name"
              placeholder="John"
              className=" text- black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
              </label>
            <label className="w-[48%] inline-block">
            Last Name
            <input
              type="text"
              name="last_name"
              placeholder="Doe"
              className=" text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
              </label>
          </div>
            <label className="w-full inline-block mt-8">
            Email
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className=" text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
              </label>
            <label className="w-full inline-block mt-8">
          How can we help?
              <textarea rows="5" className="text-black w-full rounded-md"/>
              </label>
              <div className="text-right w-full">

          <button type="submit" className="px-4 py-2 mt-8 bg-primary rounded ">Submit</button>
              </div>
        </form>
      </div>
      <div className="w-full lg:w-3/4 m-auto  text-center py-20 bg-light rounded">
        <h3 className={`text-3xl text-primary font-semibold `}>
        INTERESTED IN JOINING THE SCOPIC FAMILY?
        </h3>
        <p className="text-xl mt-4">
        Head on over to our careers page and show us what you&apos;re made of!
        </p>
        <button className="text-xl px-4 py-2 bg-secondary text-white mt-4">Check Careers</button>
      </div>
    </div>
  );
};

export default Contact;
