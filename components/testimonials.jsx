import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import starIcon from "../public/star.png";
import starrIcon from "../public/starr.png";
import customer1 from "../public/customer1.png";
import customer2 from "../public/customer2.png";
import customer3 from "../public/customer3.png";
import customer4 from "../public/customer4.png";
import customer5 from "../public/customer5.png";

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
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={20} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    I recommend this agency Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, quis viverra ornare, eros
                    dolor interdum.
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
                      <small>Olamide</small> <br />
                      <small id="gray">Managing Director</small>
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
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={20} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    I recommend this agency Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, quis viverra ornare, eros
                    dolor interdum.
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
                      <small>Olamide</small> <br />
                      <small id="gray">Managing Director</small>
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
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={20} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    I recommend this agency Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, quis viverra ornare, eros
                    dolor interdum.
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
                      <small>Olamide</small> <br />
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
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={20} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    I recommend this agency Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, quis viverra ornare, eros
                    dolor interdum.
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
                      <small>Olamide</small> <br />
                      <small id="gray">Managing Director</small>
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
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={20} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    I recommend this agency Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, quis viverra ornare, eros
                    dolor interdum.
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
                      <small>Olamide</small> <br />
                      <small id="gray">Managing Director</small>
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
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={20} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starIcon} alt="dolu" width={18} height={18} />
                  </small>
                  <small>
                    {" "}
                    <Image src={starrIcon} alt="dolu" width={18} height={18} />
                  </small>
                </div>
                <div className="text">
                  <p>
                    I recommend this agency Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, quis viverra ornare, eros
                    dolor interdum.
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
                      <small>Olamide</small> <br />
                      <small id="gray">Managing Director</small>
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
