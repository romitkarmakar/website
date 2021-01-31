import React from "react";
import { getProfile } from "../../lib/authentication";
import AlertBox from "../AlertBox";

export default function Courses() {
  const [enrolledCourses, setEnrolledCourses] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    getProfile()
      .then((profile) => {
        setEnrolledCourses(profile.EnrolledCourses);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Enrolled Courses
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              List of all the courses you are currently enrolled in.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      {enrolledCourses.length == 0 ? (
                        <div className="inline-flex justify-center w-full">
                          <span className="text-sm text-gray-500 mx-auto italic">
                            No courses applied.{" "}
                            <a href="/training" className="text-blue-500">
                              Find now
                            </a>
                          </span>
                        </div>
                      ) : (
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Title
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Status
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                  <span className="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {enrolledCourses.map((v) => (
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0 h-10 w-10">
                                        {v.course.Icon ? (
                                          <img
                                            className="h-10 w-10 rounded-full"
                                            src={
                                              "https://api.wonderatax.com" +
                                              v.course.Icon.url
                                            }
                                          />
                                        ) : (
                                          <img
                                            className="h-10 w-10 rounded-full"
                                            src={
                                              "https://cdn.iconscout.com/icon/free/png-512/php-27-226042.png"
                                            }
                                          />
                                        )}
                                      </div>
                                      <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                          {v.course.Name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          {v.course.ShortDescription}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    {v.Progress != 100 ? (
                                      <>
                                        <div className="text-sm text-gray-900 mb-2">
                                          {v.Progress}% Completed
                                        </div>
                                        <div className="shadow w-full bg-gray-300">
                                          <div
                                            className="bg-blue-500 text-xs leading-none py-1 text-center text-white"
                                            style={{ width: `${v.Progress}%` }}
                                          ></div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="text-sm text-gray-900">
                                        <span className="w-5 h-5 inline-flex mr-2 items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
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
                                        Completed
                                      </div>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      Enrolled
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {v.Progress == 0 ? (
                                      <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Start Learning
                                      </a>
                                    ) : v.Progress == 100 ? (
                                      <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        View Certificate
                                      </a>
                                    ) : (
                                      <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Resume Learning
                                      </a>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AlertBox message={error} setMessage={setError} />
    </>
  );
}
