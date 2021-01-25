import React from "react";
import { setTimeout } from "timers";

interface IProps {
  message: string;
  setMessage: (message: string) => void;
}

export default function AlertBox(props: IProps) {
  React.useEffect(() => {
    if (props.message.length > 0) {
      setTimeout(() => props.setMessage(""), 3000);
    }
  }, [props.message]);
  if (props.message.length > 0)
    return (
      <div className="fixed bg-red-400 text-white rounded-lg px-6 py-2 z-20 top-4 right-4 inline-flex">
        <span>{props.message}</span>
        <button
          className="ml-4 focus:outline-none"
          onClick={() => props.setMessage("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-white w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  else return <></>;
}
