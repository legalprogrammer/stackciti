import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import starIcon from "../public/star.png";
import starrIcon from "../public/starr.png";
import customer1 from "../public/dialadi.png";
import customer2 from "../public/bola.png";
import customer3 from "../public/beefit.png";
import customer4 from "../public/roche.png";
import customer5 from "../public/nexapay.png";
import customer6 from "../public/gb.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container>
        <div>
          <h3 data-aos="fade-up">Relationships based on trust.</h3>
        </div>
        <Container className="thumbnail-section">
          <Row data-aos="fade-up">
            <Col sm className="thumbnails">
              <article className="article" data-aos="fade-down">
                <div className="star">
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    This company provides customers with great solution, that
                    makes them the best support , like i have never seen before
                    , thanks for everything
                  </p>
                </div>
                <div className="customer">
                  <div className="customer-posting">
                    <div>
                      <small>
                        {" "}
                        <Image
                          src={customer2}
                          alt="dolu"
                          width={40}
                          height={40}
                        />
                      </small>
                    </div>
                    <div>
                      <small>Danaldi tech</small> <br />
                      <small id="gray">CEO</small>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
            <Col className="thumbnails" sm>
              <article className="article lower" data-aos="fade-down">
                <div className="star">
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    Superb services from the guys at Stackciti. Working with you
                    on our brand was such a breeze and the delivery was
                    excellent.
                  </p>
                </div>
                <div className="customer">
                  <div className="customer-posting">
                    <div>
                      <small>
                        {" "}
                        <Image
                          src={customer1}
                          alt="dolu"
                          width={40}
                          height={40}
                        />
                      </small>
                    </div>
                    <div>
                      <small>Bola Cosmetics</small> <br />
                      <small id="gray">Owner</small>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
            <Col className="thumbnails" sm>
              <article className="article" data-aos="fade-up">
                <div className="star">
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    No matter how many times we came back for revisions, you
                    were very gracious and accommodating with our feedback.
                    Thanks a lot.
                  </p>
                </div>
                <div className="customer">
                  <div className="customer-posting">
                    <div>
                      <small>
                        {" "}
                        <Image
                          src={customer3}
                          alt="dolu"
                          width={40}
                          height={40}
                        />
                      </small>
                    </div>
                    <div>
                      <small>Beefit Real Estate Agency</small> <br />
                      <small id="gray">Managing Director</small>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
        <Container className="thumbnail-section">
          <Row>
            <Col className="thumbnails" data-aos="fade-down">
              <article className="article">
                <div className="star">
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    {`
                    I just want to point out that we love our new look and can't
                    wait to see more of the amazing things we can do together.
                    Thumbs up!  `}
                  </p>
                </div>
                <div className="customer">
                  <div className="customer-posting">
                    <div>
                      <small>
                        {" "}
                        <Image
                          src={customer4}
                          alt="dolu"
                          width={40}
                          height={40}
                        />
                      </small>
                    </div>
                    <div>
                      <small>Rochewears</small> <br />
                      <small id="gray">CEO</small>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
            <Col className="thumbnails" sm>
              <article className="article lower" data-aos="fade-up">
                <div className="star">
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    This team is completely world class. Working side by side
                    for 4 weeks was no issues. And support is great as well
                  </p>
                </div>
                <div className="customer">
                  <div className="customer-posting">
                    <div>
                      <small>
                        {" "}
                        <Image
                          src={customer5}
                          alt="dolu"
                          width={40}
                          height={40}
                        />
                      </small>
                    </div>
                    <div>
                      <small>Nexapay</small> <br />
                      <small id="gray">CTO</small>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
            <Col className="thumbnails">
              <article className="article" data-aos="fade-down">
                <div className="star">
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={16} height={16} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={16} height={16} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    Thanks for all you did to help us get our app off the
                    ground. We are extremely impressed with your consistent
                    suggestions that worked beautifully
                  </p>
                </div>
                <div className="customer">
                  <div className="customer-posting">
                    <div>
                      <small>
                        {" "}
                        <Image
                          src={customer6}
                          alt="dolu"
                          width={40}
                          height={40}
                        />
                      </small>
                    </div>
                    <div>
                      <small>GB Clothings</small> <br />
                      <small id="gray">CEO</small>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Testimonials;
