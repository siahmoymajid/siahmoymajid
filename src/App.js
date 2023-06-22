import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import { Col, Row, Container } from "react-bootstrap";
import jsonData from "./data/data.json";
import { useEffect, useState } from "react";

import Resume from "./pages/Resume";

function App() {
  const [data, setData] = useState(jsonData);
  const { name, role, email, bio, picture } = data.about;
  const { github, linkedin } = data.socials;
  const { projects } = data.projects;
  const { skills } = data.skills;
  const { about, contact, resume, portfolio } = data.pages;

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    data && (
      <BrowserRouter>
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center w-100 my-5">
            <Col
              xs={12}
              lg={10}
              className="px-5 py-2 border-5 rounded-4 bg-dark d-flex flex-column justify-content-center align-items-center text-light"
            >
              <Header name={name} role={role} />
              <Routes>
                <Route
                  path="projects"
                  element={
                    <Projects pageTitle={portfolio} projects={projects} />
                  }
                />
                <Route
                  path="contact"
                  element={<Contact data={contact} title={contact} />}
                />
                <Route
                  path="resume"
                  element={
                    <Resume data={resume} skills={skills} title={resume} />
                  }
                />
                <Route
                  path="/"
                  element={
                    <About
                      title={about}
                      bio={bio}
                      name={name}
                      role={role}
                      picture={picture}
                    />
                  }
                />
                {/* <Route path="*" element={<ErrorPage />} /> */}
              </Routes>
              <Footer github={github} linkedin={linkedin} email={email} />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    )
  );
}

export default App;
