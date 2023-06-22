import React from 'react'

import { Col, Card, Row } from 'react-bootstrap';


const Resume = ({ data, title }) => {
  return (
    <>
      <Row className="d-flex justify-content-between align-items-center w-100 mt-2">
        <Col md={4}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="display pop btn btn-light btn-lg"
          >
            Download Resume
          </a>
        </Col>
        <Col md={8}>
          <h1 className="display-6 display text-secondary text-end ">
            {title}
          </h1>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-4 justify-content-evenly my-3 ">
        <Col>
          <Card bg="dark" className=" shadow-10 p-2 h-100">
            <Card.Header className="display text-uppercase text-center  text-light fs-5 border-bottom border-2 my-3 border-mute">
              {' '}
              Work Experience
            </Card.Header>
            <Card.Body>
              In the full-stack development bootcamp, I engaged in hands-on
              coding exercises, projects, and collaborative learning. I learned
              languages like HTML, CSS, JavaScript, and frameworks like React.js
              and Node.js. I gained experience in databases, server-side
              programming, API integration, and deployment techniques.
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" className=" shadow-10 p-2 h-100">
            <Card.Header className="display text-uppercase text-center  text-light fs-5 border-bottom border-2 my-3 border-mute">
              {' '}
              Skills
            </Card.Header>
            <Card.Body>
              HTML CSS JavaScript React.js (front-end framework) Node.js
              (back-end JavaScript runtime) Express.js (back-end framework) SQL
              (Structured Query Language) NoSQL databases Git (version control)
              API integration Deployment (Heroku) Debugging problem-solving
              Collaboration and teamwork communication, and time management
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" className=" shadow-10 p-2 h-100">
            <Card.Header className="display text-uppercase text-center  text-light fs-5 border-bottom border-2 my-3 border-mute">
              {' '}
              Certifications
            </Card.Header>
            <Card.Body>Full-Stack Development Bootcamp Certificate</Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Resume