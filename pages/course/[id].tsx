import React from "react";
import Navbar from "../../components/training/Navbar";
import Hero from "../../components/courses/Hero";
import Pricing from "../../components/courses/Pricing";
import Copyright from "../../components/Copyright";
import Testimonials from "../../components/courses/Testimonials";
import Team from "../../components/courses/Team";
import { GetServerSideProps } from 'next'

const syllabusList = [
  {
    title: "Data Modeling",
    description:
      "Learn to create relational and NoSQL data models to fit the diverse needs of data consumers. Use ETL to build databases in PostgreSQL and Apache Cassandra.",
  },
  {
    title: "Cloud Data Warehouses",
    description:
      "Sharpen your data warehousing skills and deepen your understanding of data infrastructure. Create cloud-based data warehouses on Amazon Web Services (AWS).",
  },
  {
    title: "Spark and Data Lakes",
    description:
      "Sharpen your data warehousing skills and deepen your understanding of data infrastructure. Create cloud-based data warehouses on Amazon Web Services (AWS).",
  },
];

export default function CoursePage(props: any) {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Hero {...props} />
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl">What you will learn</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            {syllabusList.map((v, index) => (
              <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-8 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  {index + 1}
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-white mb-1 text-xl">
                      {v.title}
                    </h2>
                    <p className="leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center justify-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  {props.EstimatedMonths} months
                </h2>
                <p className="leading-relaxed">Estimated Time</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  3600
                </h2>
                <p className="leading-relaxed">People already enrolled</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  Intermediate SQL
                </h2>
                <p className="leading-relaxed">Prerequisites</p>
              </div>
            </div>
          </div>
        </section>
        <Pricing {...props} />
        <Team />
        <Testimonials />
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-12 mx-auto flex items-center md:flex-row flex-col">
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                Start Learning Today
              </h2>
              <h1 className="md:text-3xl text-2xl font-medium title-font text-white">
                Enroll at {props.Name}
              </h1>
            </div>
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0">
              <button className="bg-indigo-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-300 focus:outline-none">
                <span className="title-font font-medium text-white">
                  Enroll Now
                </span>
              </button>
              <a href={"https://api.wonderatax.com" + props.SyllabusLink.url} target="_blank" className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-300 focus:outline-none">
                <span className="title-font font-medium">
                  Download Syllabus
                </span>
              </a>
            </div>
          </div>
        </section>
        <Copyright />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let res = await fetch(`https://api.wonderatax.com/courses/${context.params.id}`)
    let response = await res.json();
    
    return {
        props: response, 
    }
}