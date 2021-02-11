import React from "react";
import Navbar from "../../components/training/Navbar";
import Hero from "../../components/courses/Hero";
import Pricing from "../../components/courses/Pricing";
import Copyright from "../../components/Copyright";
import Testimonials from "../../components/courses/Testimonials";
import Team from "../../components/courses/Team";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Cart from "../../components/Cart";
import { useRouter } from "next/dist/client/router";

// const syllabusList = [
//   {
//     title: "Front-End",
//     description:
//       "Learn the basics of HTML/CSS/JS and the React.js Framework",
//   },
//   {
//     title: "Back-end",
//     description:
//       "Take your Journey forward by learning Node.js and Express",
//   },
//   {
//     title: "Database and Hosting",
//     description:
//       "Ever heard of NoSQL?We'll help you learn MongoDB and also host your first website",
//   },
// ];

export default function CoursePage(props: any) {
  const [cart, setCart] = React.useState(false);
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{props.Name} | WonderataX Course</title>
        <meta name="description" content={props.ShortDescription}></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.Name} />
        <meta property="og:description" content={props.Description} />
        <meta
          property="og:image"
          content="https://source.unsplash.com/720x500/?coding"
        />
        <meta property="og:url" content={"https://wonderatax.com" + router.asPath} />
        <meta property="og:site_name" content="WonderataX" />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <div className="bg-black">
        <Navbar />
        <Hero {...props} setCart={setCart} />
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center justify-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  {props.EstimatedMonths} months
                </h2>
                <p className="leading-relaxed">Estimated Time</p>
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
              <button
                className="bg-indigo-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-300 focus:outline-none"
                onClick={() => setCart(true)}
              >
                <span className="title-font font-medium text-white">
                  Enroll Now
                </span>
              </button>
              <a
                href={"https://api.wonderatax.com" + props.SyllabusLink.url}
                target="_blank"
                className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-300 focus:outline-none"
              >
                <span className="title-font font-medium">
                  Download Syllabus
                </span>
              </a>
            </div>
          </div>
        </section>
        <Copyright />
      </div>
      <Cart open={cart} setOpen={(d) => setCart(d)} course={props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let res = await fetch(
    `https://api.wonderatax.com/courses/${context.params.id}`
  );
  let response = await res.json();

  return {
    props: response,
  };
};
