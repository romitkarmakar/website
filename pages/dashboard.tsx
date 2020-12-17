import React from "react";
import EditProfile from "../components/EditProfile";
import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="32x32"></link>
      </Head>
      <div className="my-12 container mx-auto">
        <EditProfile />
      </div>
    </>
  );
}
