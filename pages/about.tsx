import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import about1 from "../public/about5.jpg";
import laptopwork from "../public/laptopwork.svg";
import about2 from "../public/craft.svg";
import about3 from "../public/eager.svg";
import about5 from "../public/joy.svg";
import about4 from "../public/excel.svg";
// import femaleavatar from "../public/female.svg";
// import maleavatar from "../public/male.svg";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";
const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <Head>
        <title> About us - Stack citi</title>
        <meta name="description" content="best website agency in Nigeria" />
        <meta
          name="keywords"
          content="Stackciti,  We are a digital agency with a taste for outstanding products best chicago web design agency
best web design agency toronto
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
web design agency in nigeria

"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="about-section" data-aos="fade-up">
        <Container className="about">
          <Row>
            <Col sm>
              <button id="fade-btn">About</button>
              <div>
                <h2>
                  We are a digital agency with a taste for outstanding products
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container className="containers">
          <Row>
            <Col sm>
              <p id="words">
                Driven by both skill , we work with company change-makers and
                visionaries to create the world’s most exciting brand interfaces
              </p>
            </Col>
            <Col sm>
              <Image src={laptopwork} alt="image" width={500} height={350} />
            </Col>
          </Row>
        </Container>
        <Container className="containers">
          <h4 className="title-n" data-aos="fade-up">
            why Stackciti ?
          </h4>
          <p className="title-text" data-aos="fade-up">
            Stackciti is a team of writers, designers, coders, and strategists
            passionate about making real change. We are a design and technology
            agency started by Olamide and Chris. We invent products, experiences
            and environments that stimulate imagination and stir action in your
            audience.
          </p>
        </Container>
        <Container id="values" className="containers">
          <h2 data-aos="fade-up" className="title-n">
            CORE VALUES
          </h2>
          <br />

          <Row>
            <Col sm>
              <div>
                <Image src={about2} alt="image" width={300} height={300} />
              </div>
              <div>
                <h5 id="title">Craft</h5>
                <h6>Never stop learning</h6>
                <p>
                  Treasure our experience and foster the excitement to master
                  the art of everything you do.
                </p>
              </div>
            </Col>
            <Col sm data-aos="fade-down">
              <div>
                <Image src={about3} alt="image" width={300} height={300} />
              </div>
              <div>
                <h5 id="title">Eagerness</h5>
                <h6>{`Keep asking 'why?'`}</h6>
                <p>
                  Pursue an unstoppable drive to make experiences wholesome and
                  an absolute delight to use.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm data-aos="fade-right">
              <div>
                <Image src={about4} alt="image" width={300} height={300} />
              </div>
              <div>
                <h5 id="title">Excellence</h5>
                <h6>Be better & do better</h6>
                <p>
                  Go above and beyond quality and strive for excellence in every
                  aspect of the process and deliverable.
                </p>
              </div>
            </Col>
            <Col sm data-aos="fade-up">
              <div>
                <Image src={about5} alt="image" width={300} height={300} />
              </div>
              <div>
                <h5 id="title">Joy</h5>
                <h6>{`Let’s make something!`}</h6>
                <p>
                  We thrive when the work doesn’t feel like work and results
                  seemingly come without effort.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        {/* <Container>
          <h3>Meet the team</h3>
          <p>
            Our team is jam packed with creative, smart and bubbly people. We
            inspire each other to improve daily, and be the best and happiest we
            can be.
          </p>
          <Row>
            <Col sm>
              <Image src={maleavatar} alt="image" width={100} height={100} />
              <h1>Olamide</h1>
              <h4>Founder</h4>
            </Col>
            <Col sm>
              <Image src={maleavatar} alt="image" width={300} height={300} />
              <h1>chris</h1>
            </Col>
            <Col sm>
              <Image src={maleavatar} alt="image" width={300} height={300} />
              <h1>Shedrack</h1>
            </Col>
            <Col sm>
              <Image src={maleavatar} alt="image" width={300} height={300} />
              <h1>Eniola</h1>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Image src={maleavatar} alt="image" width={300} height={300} />
              <h1>Arnold</h1>
            </Col>
            <Col sm>
              <Image src={maleavatar} alt="image" width={300} height={300} />
              <h1>Daniel</h1>
            </Col>
            <Col sm>
              <Image src={maleavatar} alt="image" width={300} height={300} />
              <h1>Precious</h1>
            </Col>
            <Col sm>
              <Image src={femaleavatar} alt="image" width={300} height={300} />
              <h1>Ifeoluwa</h1>
            </Col>
          </Row>
        </Container> */}
        <Contact />
      </section>
    </>
  );
};

export default About;
