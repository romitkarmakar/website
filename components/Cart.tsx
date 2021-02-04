import { Drawer } from "@material-ui/core";
import React from "react";
import { getProfile } from "../lib/authentication";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Cart(props: IProps) {
  const [loading, setLoading] = React.useState(false);

  const startPayment = () => {
    setLoading(true);
    getProfile()
      .then(async (profile) => {
        let rawOrderResponse = await fetch(
          process.env.NEXT_PUBLIC_API_ENDPOINT + "/payments",
          {
            method: "POST",
            body: JSON.stringify({
              Status: "NOT_PAID",
              users_permissions_user: profile.id,
              courses: [""],
            }),
            headers: {
              Authorization: `Bearer ${localStorage.jwt}`,
              "Content-Type": "application/json",
            },
          }
        );
        let orderResponse = await rawOrderResponse.json();

        // @ts-ignore
        let rzp1 = new window.Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: 123 * 100,
          currency: "INR",
          name: "props.Name",
          description: "props.ShortDescription",
          image: "https://source.unsplash.com/720x500/?coding",
          order_id: orderResponse.RazorpayOrderId,
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
            setLoading(false);
          },
          prefill: {
            name: profile.username,
            email: profile.email,
            contact: profile.PhoneNumber,
          },
          theme: {
            color: "#3399cc",
          },
        });

        rzp1.on("payment.failed", function (response) {
          // alert(response.error.code);
          alert(response.error.description);
          // alert(response.error.source);
          // alert(response.error.step);
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
          setLoading(false);
        });

        rzp1.open();
      })
      .catch(() => (window.location.href = "/login"));
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <div className="max-w-sm md:max-w-md overflow-x-hidden py-4 px-4">
        <h1 className="text-2xl my-4 mx-4 font-bold">My Cart</h1>
        <div className="flex justify-between px-4 py-4 bg-gray-100 rounded-lg">
          <img
            src="https://source.unsplash.com/720x500/?coding"
            className="h-24 rounded-lg"
          />
          <div className="px-4">
            <h2 className="text-xl font-bold">Full Stack Web Development</h2>
            <p className="text-gray-500 mt-2">Rs. 10,000</p>
          </div>
        </div>
        <div className="absolute bottom-0 py-4 flex flex-col w-full pr-4">
          <div>
            <h3 className="mb-2">Coupon Code</h3>
            <div className="flex w-full">
              <input
                className="flex-grow border-none bg-gray-200 rounded-tl-lg rounded-bl-lg"
                type="text"
                placeholder="Enter Coupon Code"
              />
              <button className="bg-blue-500 mr-4 px-4 rounded-tr-lg rounded-br-lg text-white">
                Apply
              </button>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-gray-900 text-xl py-2">Order Info</h2>
            <div className="flex items-center justify-between mr-4 py-1 text-gray-500">
              <p>Subtotal</p>
              <p>Rs. 10,000</p>
            </div>
            <div className="flex items-center justify-between mr-4 py-1 text-gray-500">
              <p>Discount</p>
              <p>Rs. 1,000</p>
            </div>
            <div className="flex items-center justify-between mr-4 py-1">
              <p className="text-gray-500">Total</p>
              <p className="text-black text-2xl">Rs. 9,000</p>
            </div>
          </div>
          <button className="bg-blue-500 rounded-lg py-2 text-xl text-white mr-4" disabled={loading} onClick={startPayment}>
            {!loading ? (
              "Pay Now"
            ) : (
              <svg
                className="animate-spin mx-auto h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </Drawer>
  );
}
