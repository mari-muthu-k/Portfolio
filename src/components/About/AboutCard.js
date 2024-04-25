import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, This is <span className="purple">Marimuthu Kaliraj </span>
            <br />
              An Self-Taught software developer from <span className="purple"> Tamilnadu, India.</span>
            <br />
              With a passion for <span className="purple">innovation</span> and a desire to make a difference 
              , I am constantly seeking out new ideas and approaches to drive business growth and achieve success.
            <br/>
            Apart from programming, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Reading tech news
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new opensource projects on github
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning something new ( My ADHD won't allow me to be idle 😅 )
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Stargazing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
