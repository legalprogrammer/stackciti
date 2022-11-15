import { CurrencyNet } from "currencynet";
import { Col, Container, Row } from "react-bootstrap";

const Careers = () => {
  return (
    <>
      <div className="price-section">
        <h3>Careers</h3>
        <Container>
          <Row>
            <Col>
              <div className="price">
                <div>
                  <h2>blog</h2>
                </div>
                <div>
                  <h2>
                    <CurrencyNet
                      buildCurrency="USD"
                      value={450}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </h2>
                </div>
                <div>
                  <ul>
                    <li>Single page</li>
                    <li>Free domain name</li>
                    <li>1yr support</li>
                    <li>Free hosting</li>
                    <li>Free mails</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              <div className="price">
                <div>
                  <h2>blog</h2>
                </div>
                <div>
                  <h4>
                    <CurrencyNet
                      buildCurrency="USD"
                      value={450}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </h4>
                </div>
                <div>
                  <ul>
                    <li>Single page</li>
                    <li>Free domain name</li>
                    <li>1yr support</li>
                    <li>Free hosting</li>
                    <li>Free mails</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              <div className="price">
                <div>
                  <h2>blog</h2>
                </div>
                <div>
                  <h2>
                    <CurrencyNet
                      buildCurrency="USD"
                      value={450}
                      isfloat={false}
                      shortenCurrency={true}
                    />
                  </h2>
                </div>
                <div>
                  <ul>
                    <li>Single page</li>
                    <li>Free domain name</li>
                    <li>1yr support</li>
                    <li>Free hosting</li>
                    <li>Free mails</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Careers;
