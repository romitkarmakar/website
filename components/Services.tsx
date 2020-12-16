import React from "react";

const servicesList = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JS and other web technologies from us.",
  },
  {
    title: "Graphic Design",
    description: "Learn HTML, CSS, JS and other web technologies from us.",
  },
  {
    title: "AR/ VR Applications",
    description: "Learn HTML, CSS, JS and other web technologies from us.",
  },
  {
    title: "Application Development",
    description: "Learn HTML, CSS, JS and other web technologies from us.",
  },
  {
    title: "Game Development",
    description: "Learn HTML, CSS, JS and other web technologies from us.",
  },
  {
    title: "Networking",
    description: "Learn HTML, CSS, JS and other web technologies from us.",
  },
];

export default function Services() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Services
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Know about the range of education courses provided by the wonderatax team.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {servicesList.map((v) => (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={v.title}>
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  {v.title}
                </h2>
                <p className="leading-relaxed text-base">{v.description}</p>
              </div>
            </div>
          ))}  
        </div>
      </div>
    </section>
  );
}
