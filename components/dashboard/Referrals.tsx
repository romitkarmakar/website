import React from "react";
import { getProfile } from "../../lib/authentication";

export default function Referrals() {
  const [referralId, setReferralId] = React.useState("");
  const [referrals, setReferrals] = React.useState([]);

  React.useEffect(() => {
    getProfile()
      .then((profile) => {
        setReferralId(profile.ReferralId);
      })
      .catch((err) => console.log(err.message));

    fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/referralsList", {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((response) => setReferrals(response))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6 mb-8">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Referral Coupon Code
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Share to earn money directly in your bank account and people get discount on courses using your coupon code.
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
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="bg-gray-200 py-2 px-4 flex items-center">
                          <span className="text-blue-500">
                            {referralId.length > 0
                              ? `${referralId}`
                              : "Loading..."}
                          </span>
                          <div className="flex-grow" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="mx-2 w-6 h-6 cursor-pointer"
                            stroke="currentColor"
                            onClick={() => {
                              if (navigator.share) {
                                navigator
                                  .share({
                                    title:
                                      "Sign up using this link and earn a 10% discount on any course from us.",
                                    url: `https://wonderatax.com/register/${referralId}`,
                                  })
                                  .then(() => {
                                    console.log("Thanks for sharing!");
                                  })
                                  .catch(console.error);
                              } else {
                                alert(
                                  "Sharing is not supported on this browser!"
                                );
                              }
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="mx-2 w-6 h-6 cursor-pointer"
                            stroke="currentColor"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `${referralId}`
                              );
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Referrals
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Peoples who have signed up using your referral ID.
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
                                Status
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {referrals.map((v) => (
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={"https://ui-avatars.com/api/?name=" + v.username}
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {v.username}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {v.email}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    Claim
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
