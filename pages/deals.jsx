import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { CurrencyNet } from "currencynet";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Dealform } from "../components/dealform.jsx";


const Deals = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <>
      <Head>
        <title>Flash sales - Stackciti Technologies</title>
        <meta
          name="description"
          content="Get up to 40% off our different website design packages + free maintenance for 6 months as low as 90,000 naira"
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
      <div className="deals-page" data-aos="fade-up">
        <div className="deals">
          <Container>
            <div className="box">
              <div>
                <div className="top">
                  <h2 className="">Black Friday Deals</h2>
                  <p>
                    Get up to 40% off our different website design packages +
                    free maintenance for 6 months
                  </p>
                  <h1>
                    <CurrencyNet
                      buildCurrency="USD"
                      value={204}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </h1>
                  <div>
                    <h4 className="offer">Offer ends January 2,2023 </h4>
                  </div>
                  <div>
                    <a href="#options">
                      <Button>View deals</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="video">
                  <video
                    autoPlay
                    loop
                    muted
                    style={{ width: "700px", height: "640px" }}
                    src={
                      "https://trigienit.com/wp-content/uploads/2022/11/final-sales.mp4"
                    }
                  ></video>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="options" id="options">
          <Container>
            <div>
              <h6>Choose your web design option</h6>
            </div>
            <div>
              <Row>
                <Col className="thumb" sm>
                  <div>
                    <h2>standard business website</h2>
                  </div>
                  <div>
                    <h3>
                      Look professional with a state of the art website for your
                      business
                    </h3>
                  </div>
                  <div className="off">
                    <span>
                      {" "}
                      <CurrencyNet
                        buildCurrency="USD"
                        value={300}
                        isfloat={false}
                        shortenCurrency={true}
                      />
                      &nbsp; &nbsp; &nbsp; &nbsp;
                    </span>
                    <small>
                      <Button>40% off</Button>
                    </small>
                  </div>
                  <div className="price">
                    <CurrencyNet
                      buildCurrency="USD"
                      value={204}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </div>
                  <div className="btns">
                    <a href="#deal-form">
                      <Button>Get Deal</Button>
                    </a>
                  </div>
                  <div className="gifts">
                    <h5>What you get</h5>
                    <div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>
                          Hosting & SSL Certificate For the first Year{" "}
                        </small>
                      </div>

                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Domain Name</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Free logo</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>5 informative pages</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>social media integration</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>live chat</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>professional emails</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Basic SEO setup</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>6 months free maintenance</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Five revisions</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="thumb" sm>
                  <div>
                    <h2>standard E-commerce website</h2>
                  </div>
                  <div>
                    <h3>
                      Get a state of the art online store for your business
                    </h3>
                  </div>
                  <div className="off">
                    <span>
                      {" "}
                      <CurrencyNet
                        buildCurrency="USD"
                        value={576}
                        isfloat={false}
                        shortenCurrency={true}
                      />
                      &nbsp; &nbsp; &nbsp; &nbsp;
                    </span>
                    <small>
                      <Button>40% off</Button>
                    </small>
                  </div>
                  <div className="price">
                    <CurrencyNet
                      buildCurrency="USD"
                      value={338}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </div>
                  <div className="btns">
                    <a href="#deal-form">
                      <Button>Get Deal</Button>
                    </a>
                  </div>
                  <div className="gifts">
                    <h5>What you get</h5>
                    <div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>
                          Hosting & SSL Certificate For the first Year{" "}
                        </small>
                      </div>

                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Domain Name</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Online store features</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>informative pages</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>payment gateway </small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>live chat</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>admin backend management</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>professional emails</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>SEO setup</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Product reviews</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>6 months free maintenance</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Five revisions</small>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="thumb" sm>
                  <div>
                    <h2>Advanced E-commerce website</h2>
                  </div>
                  <div>
                    <h3>
                      Turn your store into a sales funnel with our different
                      marketing automation
                    </h3>
                  </div>
                  <div className="off">
                    <span>
                      {" "}
                      <CurrencyNet
                        buildCurrency="USD"
                        value={788}
                        isfloat={false}
                        shortenCurrency={true}
                      />
                      &nbsp; &nbsp; &nbsp; &nbsp;
                    </span>
                    <small>
                      <Button>40% off</Button>
                    </small>
                  </div>
                  <div className="price">
                    <CurrencyNet
                      buildCurrency="USD"
                      value={497}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </div>
                  <div className="btns">
                    <a href="#deal-form">
                      <Button>Get Deal</Button>
                    </a>
                  </div>
                  <div className="gifts">
                    <h5>What you get</h5>
                    <div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Everything in the standard package</small>
                      </div>

                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Automation tools such as facebook </small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>handover training on website management</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>payment tracking </small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>Coupon code setup </small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>live chat</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>unlimited professional emails</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>SEO setup</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>12 months free maintenance</small>
                      </div>
                      <div className="thumbnail">
                        <span>. &nbsp;&nbsp;&nbsp;</span>
                        <small>ten revisions</small>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="deal-form" id="deal-form">
          <Dealform />
        </div>
      </div>
    </>
  );
};

export default Deals;
