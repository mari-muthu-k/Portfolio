import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="fwGPT – Agentic AI Assistant"
              description="Led the growth of fwGPT from a simple AI FAQ bot into a powerful, organization-wide intelligent assistant at Comcast. Oversaw development of CIEC LLM, RAG pipelines, and agentic AI systems for automating manual tasks and improving operational efficiency."
              ghLink="https://github.com/mari-muthu-k"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kafka Speed-Up Automation"
              description="Engineered an intelligent Kafka throughput regulation engine for Comcast's largest ingestion pipeline processing 1.5B–4B rows of user data daily. Reduced SLA breaches by 90%, cut 95% of manual effort, and saved up to $60,000 annually. Research submitted to SN Computer Science (Springer)."
              ghLink="https://github.com/mari-muthu-k"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="T2 App Store"
              description="Pitched and led the development of a cross-platform App Store for Mac, Windows, and Linux at Comcast, enabling users to download, publish, and manage desktop applications organization-wide. Backend engineered with Node.js and Golang using S3 for binary storage."
              ghLink="https://github.com/mari-muthu-k"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Robotix – Autonomous Robot Control"
              description="Led development of Robotix with Open-RMF, a research-driven platform for controlling and monitoring autonomous robots, adopted by the Singapore government. Built agentic software in Golang and Python integrated with ROS and ROS2 for seamless fleet communication."
              ghLink="https://github.com/mari-muthu-k"
              demoLink="https://open-rmf.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Clenz AI – AI Skincare App"
              description="Led the full lifecycle development of Clenz.ai, an AI-powered skincare app that analyzes facial skin and provides personalized recommendations. Trained YOLOv8 models for accurate skin condition detection, supervised 10+ team members for data annotation using Roboflow, and managed AWS infrastructure."
              ghLink="https://github.com/mari-muthu-k"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="FormTheta – AI Form Builder"
              description="Founded and led the development of FormTheta, an AI-generated form creation platform for surveys (similar to Typeform and SurveyMonkey). Built with ReactJS, Golang, and TypeScript, containerized with Docker and deployed on AWS."
              ghLink="https://github.com/mari-muthu-k"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
