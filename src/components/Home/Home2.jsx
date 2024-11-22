import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            THANK YOU FOR <span className="purple"> VISITING! </span>
            </h1>
            <p className="home-about-body">
            It's been an amazing journey sharing my work and passions with you. 🚀
              <br />
              <br /> I’m a <i><b className="purple">curious developer</b></i> who loves exploring and building 
        <b className="purple"> Web Technologies</b>, creating innovative <b className="purple">Products</b>, 
        and diving into fields like <b className="purple">Blockchain</b>.
              <br />
        Throughout this portfolio, I’ve showcased my skills in
        <b className="purple"> C++, JavaScript, and Go</b>, along with my experience in frameworks like 
        <b className="purple"> React.js</b> and <b className="purple">Next.js</b>.
              <br />
              As I continue to grow, my focus remains on delivering impactful solutions and developing with 
        technologies like <b className="purple">Node.js</b> and modern frameworks.
        <br />
        Feel free to reach out or connect if you'd like to collaborate or learn more about my work. 
        <b className="purple"> Let’s build something amazing together!</b>
      </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arunvijo04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/arunvijo04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arunvijo04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arunvijo04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
