import { data } from "./data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const Workhumbnails = () => {
  const [work] = React.useState(data);

  return (
    <>
      {work.map((workinfo) => (
        <>
          <div className="thumb">
            <Container key={workinfo.key}>
              <div id="work-thumb">
                <div>
                  <div>
                    <Image
                      src={workinfo.image}
                      alt="work-img"
                      width={400}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <div className="work-text">
                    <h4>Akeredolu studios</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur, ducimus! Deleniti alias quasi repudiandae
                      repellendus beatae assumenda quod maiores! Nesciunt esse
                      voluptatum voluptas reiciendis recusandae natus a cumque,
                      consequuntur eum?
                    </p>
                    <div>
                      <span id="category">{workinfo.category}</span>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                      <Link href={workinfo.links}>visit website</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </>
      ))}
    </>
  );
};

export default Workhumbnails;
