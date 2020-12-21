import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Services from "../components/Services";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";

export default function IndexPage() {
  React.useEffect(() => {
    // @ts-ignore
    particlesJS(
      "particles-js",

      {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      }
    );
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>WonderataX</title>
        <link rel="shortcun icon" type="image/png" href="img/bg.png" />
        <link rel="stylesheet" href="css/styles.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/particles.js"></script>
      </Head>
      <Navbar />
      <div id="particles-js">
        <div
          id="home"
          className="intro route bg-image "
          style={{ backgroundImage: "url(img/logo.webp)", width: "auto" }}
        ></div>
      </div>
      <div className="container">
        <div className="padding">
          <section id="about" className="about">
            <div className="section-title">
              <h2>ABOUT US</h2>
            </div>
            <div className="about-info col-md-10">
              WonderataX Solutions ,Despite it's technical name it was but a
              mere idea which we wanted to take forward and turn into a reality
              . We wanted to provide the rest of the world with what we have to
              offer . And as nothing comes for free these days we wanted to make
              these services available to clients in an easier and affordable
              way. Aiming to make a cooperative community of both learning and
              sharing at the same time keeping the business aspect to it alive
              too we want to provide interested clients with in-demand services
              like web development , game development, graphic designing and
              even AR/VR development . We want to make a cooperative team and
              teach people around us things they want to train in so they can
              take a step towards their future too.
            </div>
          </section>
        </div>
      </div>
      <Services />
      <Team />
      <ContactUs />
      <Copyright />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        $("#criticalbtn").click(function() {
          $(this).toggleClass('active ');
          $("#criticalbtn2").removeClass('active');
          $("#criticalbtn3").removeClass('active');
          $("#criticalbtn4").removeClass('active');
        });
        $("#criticalbtn2").click(function() {
          $(this).toggleClass('active ');
          $("#criticalbtn").removeClass('active');
          $("#criticalbtn3").removeClass('active');
          $("#criticalbtn4").removeClass('active');
        });
        $("#criticalbtn3").click(function() {
          $(this).toggleClass('active ');
          $("#criticalbtn").removeClass('active');
          $("#criticalbtn2").removeClass('active');
          $("#criticalbtn4").removeClass('active');
        });
        $("#criticalbtn4").click(function() {
          $(this).toggleClass('active ');
          $("#criticalbtn").removeClass('active');
          $("#criticalbtn2").removeClass('active');
          $("#criticalbtn3").removeClass('active');
        });
        $("#invalidbtn").click(function() {
          $("#criticalbtn").removeClass('active');
            $("#criticalbtn3").removeClass('active');
          $("#criticalbtn2").removeClass('active');
          $("#criticalbtn4").removeClass('active');
        });
        `,
        }}
      />
    </>
  );
}
