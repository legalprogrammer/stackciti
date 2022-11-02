import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import about1 from "../public/about5.jpg";
import about2 from "../public/craft.svg";
import about3 from "../public/eager.svg";
import about5 from "../public/joy.svg";
import about4 from "../public/excel.svg";
import femaleavatar from "../public/female.svg";
import maleavatar from "../public/male.svg";
import Testimonials from "../componnts/testimonials";
import Contact from "../componnts/contact";
const About = () => {
  return (
    <>
      <Head>
        <title> About us - Stack citi</title>
        <meta name="description" content="best website agency in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="about-section">
        <Container className="about">
          <Row>
            <Col sm>
              <button>About</button>
              <div>
                <h2>
                  We are a digital agency with a taste for outstanding products
                </h2>
              </div>
              <div>
                <h4>
                  Stackciti has been delivering top notch digital solutions for
                  over the years. We work with amazing companies, ranging from
                  small startups to heavy weight enterprises. We know we have
                  done our jobs when someones day is a bit better just by using
                  our products.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container className="containers">
          <Image src={about1} alt="image" width={2000} height={1300} />
        </Container>
        <Container id="values" className="containers">
          <h2>CORE VALUES</h2>
          <p>
            Driven by both skill , we work with company change-makers and
            visionaries to create the world’s most exciting brand interfaces
          </p>
          <br />
          <br />
          <br />
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
            <Col sm>
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
            <Col sm>
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
            <Col sm>
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
        <Testimonials />
        <br />
        <br />
        <br />
        <br />
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
