import React from "react";
import Head from "next/head";
import AlertBox from "../components/AlertBox";

export default function RegisterPage() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    username: "",
    PhoneNumber: "",
  });
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (res.status == 200) {
          window.location.href = "/login";
        } else if (res.status == 400) {
          setError((await res.json()).message[0].messages[0].message);
          setLoading(false);
        } else {
          setError(await res.text());
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <>
      <Head>
        <title>Create your account</title>
      </Head>
      <div className="container bg-black max-w-full mx-auto md:py-24 px-6">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <img
                  className="mx-auto h-12 mb-6 w-auto"
                  src="/img/bg.png"
                  alt="Workflow"
                />
                <h2 className="text-center text-3xl mb-2 font-bold text-white">
                  Create your account
                </h2>
                <div className="text-center text-sm font-base text-white    ">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-500">
                    Login
                  </a>
                </div>
                <form className="mt-8" onSubmit={onSubmit}>
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Name</span>
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            username: e.target.value,
                          })
                        }
                        className="text-md block px-3 py-2 rounded-lg w-full
          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Email</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="text-md block px-3 py-2 rounded-lg w-full
          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Phone Number
                      </span>
                      <input
                        type="tel"
                        value={formData.PhoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            PhoneNumber: e.target.value,
                          })
                        }
                        className="text-md block px-3 py-2 rounded-lg w-full
          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Password
                      </span>
                      <input
                        type="password"
                        x-model="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        className="text-md block px-3 py-2 rounded-lg w-full
          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Password Confirm
                      </span>
                      <input
                        type="password"
                        x-model="password_confirm"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="text-md block px-3 py-2 rounded-lg w-full
          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        <li className="flex items-center py-1">
                          <div
                            className={
                              "rounded-full p-1 fill-current" +
                              (formData.password == confirmPassword &&
                              formData.password.length > 0
                                ? "bg-green-200 text-green-700"
                                : "bg-red-200 text-red-700")
                            }
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              {formData.password == confirmPassword &&
                              formData.password.length > 0 ? (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              )}
                            </svg>
                          </div>
                          <span
                            className={
                              formData.password == confirmPassword &&
                              formData.password.length > 0
                                ? "text-green-700"
                                : "text-red-700" +
                                  "font-medium text-white text-sm ml-3"
                            }
                          >
                            {formData.password == confirmPassword &&
                            formData.password.length > 0
                              ? "Passwords match"
                              : "Passwords do not match"}
                          </span>
                        </li>
                        <li className="flex items-center py-1">
                          <div
                            className={
                              "rounded-full p-1 fill-current" +
                              (formData.password.length > 7
                                ? "bg-green-200 text-green-700"
                                : "bg-red-200 text-red-700")
                            }
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              {formData.password.length > 7 ? (
                                <path
                                  x-show="password.length > 7"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              ) : (
                                <path
                                  x-show="password.length < 7"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              )}
                            </svg>
                          </div>
                          <span
                            className={
                              formData.password.length > 7
                                ? "text-green-700"
                                : "text-red-700" +
                                  "font-medium text-white text-sm ml-3"
                            }
                          >
                            {formData.password.length > 7
                              ? "The minimum length is reached"
                              : "At least 8 characters required"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-start">
                      <label className="block text-gray-500 font-bold my-4 items-center">
                        <input
                          className="leading-loose text-pink-600 top-0"
                          type="checkbox"
                        />
                        <span className="ml-2 text-sm py-2 text-gray-600 text-left">
                          Accept the&nbsp;
                          <a
                            href="#"
                            className="font-semibold text-white border-b-2 border-gray-200 hover:border-gray-500"
                          >
                            Terms and Conditions of the site
                          </a>
                        </span>
                      </label>
                    </div>
                    <button
                      className="mt-3 text-lg font-semibold
      bg-gray-800 w-full text-white rounded-lg
      px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      disabled={loading}
                    >
                      {loading ? (
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
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </form>
                <div className="text-sm font-semibold block sm:hidden py-6 justify-center">
                  <a
                    href="#"
                    className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"
                  >
                    You're already member?
                    <span className="text-black font-semibold">Login</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertBox message={error} setMessage={setError} />
    </>
  );
}
