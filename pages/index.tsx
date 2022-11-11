import Head from "next/head";
import Hero from "../components/hero";
import HeroTwo from "../components/herotwo";
import Process from "../components/process";
import Works from "../components/work";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <>
      <Head>
        <title>Stack citi - Design website agency</title>
        <meta
          name="description"
          content="We are a digital agency with a taste for outstanding products"
        />
        <meta
          name="keywords"
          content="best digital agency with a taste for outstanding products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-aos="fade-up">
        <Hero />
        <HeroTwo />
        <Process />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
