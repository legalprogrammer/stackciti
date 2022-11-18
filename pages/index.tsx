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
        <title>Stack citi Technologies - Digital agency</title>
        <meta
          name="description"
          content="We are a digital agency with a taste for outstanding products"
        />
        <meta
          name="keywords"
          content="best digital agency with a taste for outstanding products best web design agency toronto
ecommerce web design agency london
best chicago web design agency
best web design agency toronto
montana web design agency
element 8 web design agency
best web design digital agency
bespoke web design agency
deep digital web design agency wordpress theme nulled
brisbane web design agency
best web design agency in india
web design agency durham
web design creative agency
web design agency china
agency web design services
fitness web design agency
vermont web design agency
web design agency in abuja
web design agency colorado
tokyo web design agency
best web design agency australia
interactive web design agency
freelance web design agency
web design agency scotland
brighton web design agency
ottawa web design agency
branding web design agency
web design professional agency
graphic and web design agency
crafton web design agency
glasgow web design agency
marketing agency and web design
digital marketing and web design agency
web design agency indonesia
the travel web design agency
web design agency milwaukee
creative web design agency london
web design agency in hyderabad
web design agency in san jose
web design agency in chennai
top 10 web design agency
web design and build agency
best web design agency los angeles
web design agency lancaster pa
web design template for travel agency
web design agency in pune
the web design agency
best web design agency in usa
web design agency uae
design web agency
edinburgh web design agency
web design agency in melbourne
web design agency wellington
web design agency for law firms
web design agency brighton
best web design agency new york
best web design agency in london
restaurant web design agency
web design agency in nigeria"
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
