import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, This is <span className="purple">Mari </span>
            <br />
              A Software Engineer-3 at <span className="purple">Comcast (Freewheel)</span>, from <span className="purple">Tamilnadu, India.</span>
            <br />
              With 4+ years of experience in software development, ML & AI, and data science — led projects saving over <span className="purple">$60K annually</span> through automation and AI innovation.
            <br /><br/>
              Completed a <span className="purple">Post Graduate Certificate in ML & AI</span> from IIT Jodhpur.
            <br/><br/>
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
            "Turning research into technologies that advance human progress!"{" "}
          </p>
          <footer className="blockquote-footer">Mari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
