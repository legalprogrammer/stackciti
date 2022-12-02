import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import about1 from "../public/about5.jpg";
import laptopwork from "../public/laptopwork.svg";
import about2 from "../public/craft.svg";
import about3 from "../public/eager.svg";
import about5 from "../public/joy.svg";
import ola from "../public/ola.png";
import chris from "../public/chris.png";
import piper from "../public/piper.png";
import Timi from "../public/timi2b.png";
import ds from "../public/ds1.png";
import de from "../public/de.png";
import may from "../public/may.png";
import about4 from "../public/excel.svg";
import femaleavatar from "../public/female.svg";
import maleavatar from "../public/male.svg";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Aos from "aos";
import React from "react";
import "aos/dist/aos.css";
import Link from "next/link";
const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <Head>
        <title> About us - Stackciti Technologies</title>
        <meta
          name="description"
          content=" We are a digital agency with a taste for outstanding products"
        />
        <link rel="icon" href="/favicon.ico" />

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
        <Container className="containerss">
          <h2>Professional Metaverse Solutions Tailored for your Brand.</h2>
        </Container>

        <Container className="containerss">
          <Row>
            <Col sm>
              <p className="title-textt" data-aos="fade-up">
                Stackciti Technologies is a creative full service Metaverse
                Solution provider, specializing in helping E-Commerce and Web
                3.0 brands with entering the Metaverse.
              </p>
            </Col>
            <Col sm>
              <p className="title-textt" data-aos="fade-up">
                Bringing E-Commerce and Blockchain together, Stackciti
                Technologies is at the forefront of emerging technologies and
                the future of online shopping in the Metaverse.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="containerss">
          <Row>
            <Col sm>
              <p className="title-textt" data-aos="fade-up">
                Think of us like a Plug-and-Play technical department, ready to
                join your business and help you succeed, with our expertise.
              </p>
            </Col>
            <Col sm>
              <p className="title-textt" data-aos="fade-up">
                Companies we have worked with range from startups with that
                spark that can turn into a billion dollar empire, all the way to
                Fortune 500 companies.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="containerss">
          <Row>
            <Col sm>
              <p className="title-textt" data-aos="fade-up">
                Stackciti Technologies has already been able to work with over
                20 companies from all over the world. We then take everything we
                have learned from working with these brands and create platforms
                that make it simple for anyone to enter the world of Web 3.0.
              </p>
            </Col>
            <Col sm>
              <p className="title-textt" data-aos="fade-up">
                Ready to enter the Metaverse? We are a full team of Developers,
                Designers, Marketers and Content Producers ready to help your
                brand deploy in a Metaverse Solution with ease.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="containers">
          <h4 className="title-n" data-aos="fade-up">
            Our Story
          </h4>
          <p className="title-text" data-aos="fade-up">
            We give Life to your imaginations!
          </p>
          <p className="title-text" data-aos="fade-up">
            It takes one who has experienced a challenge to understand how to
            solve the challenge.
          </p>
          <p className="title-text" data-aos="fade-up">
            Brought together by strings of design, these two friends, Olamide
            and Chris, were able to hone in on their skills perfectly and carve
            a niche for themselves.
          </p>
          <p className="title-text" data-aos="fade-up">
            But, after all these, there was still a void_ They only had skills
            but had not branded the face behind the skills. This phase took them
            on a journey into the unseen mysteries of branding.
          </p>
          <p className="title-text" data-aos="fade-up">
            They were lost in this fog for months before they were finally able
            to hack it. On the cold journey, they discovered mistakes of brand
            owners and the disadvantages of poor branding. And, they decided to
            create a channel to help businesses build a good brand image.
            Stackciti is the product of their decision.
          </p>
          <p className="title-text" data-aos="fade-up">
            Stackciti is a branding agency that translates your ideas into
            reality. There are many businesses but there are fewer brands and
            only good brands survive the storms of the market. Branding is king
            in business, if not everything and if your business will at all
            thrive, it needs good branding.
          </p>
          <p className="title-text" data-aos="fade-up">
            At stackciti, we have a brilliant team of creative minds on board to
            transform your imaginations into reality. Stackciti offers a wide
            range of services from soft development services such as Web
            development and web designs for your website to UI/UX design to give
            your target audience the perfect user experience, Blockchain
            development, SEO services and more. Stackciti is committed to making
            your business win through the perfect branding.
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
        <Container className="team">
          <h3>Meet the team</h3>
          <p>
            Our team is jam packed with creative, smart and bubbly people. We
            inspire each other to improve daily, and be the best and happiest we
            can be.
          </p>
          <Row>
            <Col sm>
              <Image src={ola} alt="image" width={100} height={100} />
              <h1>Sotunde Olamide</h1>
              <h4>Founder,CEO</h4>
            </Col>
            <Col sm>
              <Image src={maleavatar} alt="image" width={100} height={100} />
              <h1>Chris</h1>
              <h4>Co-Founder & CTO </h4>
            </Col>
            <Col sm>
              <Image src={femaleavatar} alt="image" width={100} height={100} />
              <h1>Otun Rhodiat</h1>
              <h4>Product manager</h4>
            </Col>
            <Col sm>
              <Image src={de} alt="image" width={100} height={100} />
              <h1>Agu Godsdelight</h1>
              <h4>Chief marketing officer</h4>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Image src={piper} alt="image" width={100} height={100} />
              <h1>Sophie piper</h1>
              <h4>Blockchain developer</h4>
            </Col>
            <Col sm>
              <Image src={chris} alt="image" width={100} height={100} />
              <h1>Chris Luhrs</h1>
              <h4>Product design lead</h4>
            </Col>
            <Col sm>
              <Image src={may} alt="image" width={100} height={100} />
              <h1>Adewale Mayowa</h1>
              <h4>Product designer</h4>
            </Col>
            <Col sm>
              <Image src={Timi} alt="image" width={100} height={100} />
              <h1>Timi Oyelumade</h1>
              <h4>Graphic designer</h4>
            </Col>
          </Row>
          <Row>
         
            <Col sm>
              <Image src={ds} alt="image" width={100} height={100} />
              <h1>Daniel Orobode</h1>
              <h4>Sales manager</h4>
            </Col>
   
          </Row>
        </Container>
      
        <Contact />
      </section>
    </>
  );
};

export default About;
