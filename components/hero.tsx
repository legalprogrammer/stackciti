import { Button } from "react-bootstrap";
import Image from "next/image";
import vector1 from "../public/heroimg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-5 hero" data-aos="fade-up">
      <div>
        <div id="hero-container">
          <div>
            <h2>
              <span>Make</span> your project our next obsession
            </h2>
            <p>
              Stackciti, we transform your Perception into an excellent website
              & application.Simple and effective process for 100% satisfaction
            </p>
            <div className="btns" id="none">
              <strong>
                <Link href="/contact">
                  <Button>Get Started</Button>
                </Link>
              </strong>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <small>
                <Link href="/works">
                  <Button>Latest works</Button>
                </Link>
              </small>
            </div>
            <div className="btn-mobile">
              <div>
                <Link href="/contact">
                  <button id="start">Get Started</button>
                </Link>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div>
                <button id="works">Latest works</button>
              </div>
            </div>
          </div>
          <div className="img">
            <Image src={vector1} alt="img" width={400} height={480} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
