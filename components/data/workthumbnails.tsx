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
                      width={workinfo.width}
                      height={workinfo.height}
                    />
                  </div>
                </div>
                <div>
                  <div className="work-text">
                    <h4>{workinfo.title}</h4>
                    <p>{workinfo.text}</p>
                    <div>
                      <span id="category">{workinfo.category}</span>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                      <Link href={workinfo.links}>
                        <a target="_blank" rel="noopener noreferrer">
                          visit website
                        </a>
                      </Link>
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
