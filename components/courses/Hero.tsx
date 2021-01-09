import React from "react";
import Timer from "./Timer";

export default function Hero(props: any) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Become a {props.Name}
          </h1>
          <p className="mb-2 leading-relaxed text-white">
            {props.Description}
          </p>
          <p className="mb-4 leading-relaxed text-white">
            Time remaining for enrollment:
          </p>
          <Timer {...props} />
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Enroll Now
            </button>
            <a href={"https://api.wonderatax.com" + props.SyllabusLink.url} target="_blank" className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Download Syllabus
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://source.unsplash.com/720x500/?coding"
          />
        </div>
      </div>
    </section>
  );
}
