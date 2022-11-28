import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
// import { CurrencyNet } from "currencynet";
import ReCAPTCHA from "react-google-recaptcha";


export const ContactUs = () => {
  const firstRef = useRef(null);
  const mailRef = useRef(null);
  const organRef = useRef(null);
  const telRef = useRef(null);
  const projectRef = useRef(null);

  const [firstName, setFirstName] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [project, setProject] = React.useState("");
  const [organ, setOrgan] = React.useState("");
  const [mail, setmail] = React.useState("");
  const [error, setError] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    if (
      firstName.length == 0 ||
      project.length == 0 ||
      telephone.length == 0 ||
      organ.length == 0 ||
      mail.length == 0
    ) {
      setError(true);
    } else {
      setError(false);

      alert("form submitted successfully");
    }
    e.preventDefault();


    emailjs
      .sendForm(
        "service_xt31zth",
        "template_7kmnyjc",
        form.current,
        "M2glm_dxXKwBOIEOJ",
        "g-recaptcha-response"
        
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          console.log("not sent");
        }
      );

    e.target.reset();
  };;

  return (
    <Container data-aos="fade">
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={firstRef}
            type="text"
            className="same name"
            placeholder="Enter Name"
            name="user_name"
            autocomplete="off"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {error && firstName.length <= 0 ? (
            <h6>{`Name can't be Empty`}</h6>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={telRef}
            type="tel"
            autocomplete="off"
            placeholder="Enter Telephone"
            className="same"
            name="user_tel"
            onChange={(e) => setTelephone(e.target.value)}
          />
          {error && telephone.length <= 0 ? (
            <h6>{`Enter a valid  phone number`}</h6>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={mailRef}
            type="email"
            autocomplete="off"
            placeholder="Enter Email"
            className="same"
            name="user_email"
            onChange={(e) => setmail(e.target.value)}
          />
          {error && mail.length <= 0 ? <h6>{`This field is required`}</h6> : ""}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={organRef}
            type="text"
            name="user_organ"
            placeholder="Enter your Organization"
            className="same"
            autocomplete="off"
            onChange={(e) => setOrgan(e.target.value)}
          />
          {error && organ.length <= 0 ? (
            <h6>{`This field is required`}</h6>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={projectRef}
            type="text"
            name="user_description"
            autocomplete="off"
            placeholder="Tell us about your project and budget"
            className="same project"
            onChange={(e) => setProject(e.target.value)}
          />
          {error && project.length <= 0 ? (
            <h6>{`This field is required`}</h6>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          id="services-contact"
        >
          <Form.Label id="interest">
            IN WHICH SERVICES ARE YOU INTERESTED? (CHECK ALL THAT APPLY)
          </Form.Label>
          <br />
          <Row>
            <Col>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  label={`PRODUCT DESIGN`}
                  id={`PRODUCT DESIGN`}
                  value={`PRODUCT DESIGN`}
                  name="user_product_design"
                  autoComplete="off"
                />
              </div>
              <div>
                <Form.Check
                  className="radios"
                  autoComplete="off"
                  type="radio"
                  label={`WEB DEVELOPMENT`}
                  id={`WEB DEVELOPMENT`}
                  value="WEB DEVELOPMENT"
                  name="user_web_dev"
                />
              </div>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  autoComplete="off"
                  label={`GRAPHIC DESIGN`}
                  id={`GRAPHIC DESIGN`}
                  value="GRAPHIC DESIGN"
                  name="user_graphic_design"
                />
              </div>
            </Col>
            <Col>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  autoComplete="off"
                  label={`APP DEVELOPMENT`}
                  id={`APP DEVELOPMENT`}
                  value="APP DEVELOPMENT"
                  name="user_app_dev"
                />
              </div>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  autoComplete="off"
                  label={`SEO`}
                  id={`SEO`}
                  value="SEO"
                  name="user_seo"
                />
              </div>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  label={`BLOCKCHAIN`}
                  id={`BLOCKCHAIN`}
                  autoComplete="off"
                  value="BLOCKCHAIN"
                  name="user_blockchain"
                />
              </div>
            </Col>
            <Col>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  autoComplete="off"
                  label={`ARTIFICIAL INTELLIGENCE`}
                  id={`ARTIFICIAL INTELLIGENCE`}
                  value="ARTIFICIAL INTELLIGENCE"
                  name="user_ai"
                />
              </div>
              <div>
                <Form.Check
                  className="radios"
                  type="radio"
                  autoComplete="off"
                  label={`MACHINE LEARNING`}
                  id={`MACHINE LEARNING`}
                  value="MACHINE LEARNING"
                  name="user_ml"
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>WHAT IS YOUR BUDGET?</Form.Label>
          <br />
          <br />
          <Row>
            <Col>
              <div>
                <button className="prices">I NEED A GUIDANCE</button>
              </div>
              <div>
                <button className="prices">
                  <CurrencyNet
                    buildCurrency="USD"
                    value={0}
                    isfloat={false}
                    shortenCurrency={true}
                  />{" "}
                  -
                  <CurrencyNet
                    buildCurrency="USD"
                    value={500}
                    isfloat={false}
                    shortenCurrency={true}
                  />
                </button>
              </div>
              <div>
                <button className="prices">
                  <CurrencyNet
                    buildCurrency="USD"
                    value={500}
                    isfloat={false}
                    shortenCurrency={true}
                  />{" "}
                  -
                  <CurrencyNet
                    buildCurrency="USD"
                    value={1000}
                    isfloat={false}
                    shortenCurrency={true}
                  />
                </button>
              </div>
            </Col>
            <Col>
              <div>
                <button className="prices">
                  <CurrencyNet
                    buildCurrency="USD"
                    value={1000}
                    isfloat={false}
                    shortenCurrency={true}
                  />{" "}
                  -
                  <CurrencyNet
                    buildCurrency="USD"
                    value={10000}
                    isfloat={false}
                    shortenCurrency={true}
                  />
                </button>
              </div>
              <div>
                <button className="prices">
                  <CurrencyNet
                    buildCurrency="USD"
                    value={10000}
                    isfloat={false}
                    shortenCurrency={true}
                  />{" "}
                  -
                  <CurrencyNet
                    buildCurrency="USD"
                    value={50000}
                    isfloat={false}
                    shortenCurrency={true}
                  />
                </button>
              </div>
              <div>
                <button className="prices">
                  <CurrencyNet
                    buildCurrency="USD"
                    value={100000}
                    isfloat={false}
                    shortenCurrency={true}
                  />{" "}
                  -
                  <CurrencyNet
                    buildCurrency="USD"
                    value={500000}
                    isfloat={false}
                    shortenCurrency={true}
                  />
                </button>
              </div>
            </Col>
          </Row>
        </Form.Group> */}
        <ReCAPTCHA
          sitekey={"6LeyhCEjAAAAAOXrFhz2nB57hYP72qeSN7G0cUpt"}
          ref={mailRef}
        />
        <Button variant="primary" id="sub" type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
