import React from "react";
import EditProfile from "../components/dashboard/EditProfile";
import Head from "next/head";
import Navbar from "../components/dashboard/Navbar";
import Courses from "../components/dashboard/Courses";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="32x32"></link>
      </Head>
      <Navbar />
      <div className="my-12 container mx-auto">
        <Courses />
        <EditProfile />
      </div>
    </>
  );
}
