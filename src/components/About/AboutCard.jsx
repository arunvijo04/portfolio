import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            As a BTech Computer Science Engineering student, I am committed to expanding my knowledge and skills in both technical and non-technical domains. My academic journey has been complemented by hands-on projects, problem-solving, and involvement in extracurricular activities that develop leadership and teamwork.

I enjoy coding, developing web applications, and working on innovative projects that solve real-world problems. My technical interests include software development, data structures, algorithms, and emerging technologies. Beyond academics, I actively engage in non-technical activities that foster creativity, communication, and collaboration. I am always eager to learn, grow, and apply my diverse experiences in a challenging environment.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arun Vijo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
