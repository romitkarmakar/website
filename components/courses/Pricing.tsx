import React from "react";

// @ts-ignore
function Wrong() {
  return (
    <svg
      fill="none"
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      className="w-5 h-5 text-gray-500"
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function Correct() {
  return (
    <span className="w-5 h-5 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
      <svg
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        className="w-3 h-3"
        viewBox="0 0 24 24"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function Pricing(props: any) {
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/4 mt-48 hidden lg:block">
          <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
            <p className="bg-gray-900 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">
              Time duration
            </p>
            <p className="text-white h-12 text-center px-4 flex items-center justify-start -mt-px">
              24 x 7 Support
            </p>
            <p className="bg-gray-900 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">
              Certificate
            </p>
          </div>
        </div>
        <div className="flex lg:w-2/3 w-full flex-wrap lg:border border-gray-300 rounded-lg">
          
          <div className="lg:w-3/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
              POPULAR
            </span>
            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest">TOTAL</h3>
              <h2 className="text-5xl text-white font-medium flex items-center justify-center leading-none mb-4 mt-2">
                Rs.{props.Price} 
                <span className="text-white text-base ml-1">/mo</span>
              </h2>
              {/* <span className="text-sm text-white">Charging Rs.456 per year</span> */}
            </div>
            <p className="bg-gray-900 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              {props.EstimatedMonths} months
            </p>
            <p className="text-white text-center h-12 flex items-center justify-center">
              <Correct />
            </p>
            <p className="bg-gray-900 text-white text-center h-12 flex items-center justify-center">
              <Correct />
            </p>
            <div className="p-6 text-center border-t border-gray-300">
              <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                Enroll Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Literally you will never regret it.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
