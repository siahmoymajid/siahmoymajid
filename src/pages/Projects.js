import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Project from '../components/Project'

const Projects = ({ projects, pageTitle }) => {
  console.log(projects);
  return (
    projects &&
    <>
      <h1 className="display-6 display text-success text-end w-100">{pageTitle}</h1>
      <Row xs={1} md={3} className="g-4 justify-content-evenly my-2">
        {projects.map((p, i) => (
          <Project key={i} project={p} i={i} />
        ))}
      </Row>
    </>
  )
}

export default Projects