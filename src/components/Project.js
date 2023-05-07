import React from 'react'
import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'

const Project = ({ project, i }) => {
  console.log(project);
  return (
    project &&


    <Col>
      <Card bg="dark" className=" shadow-10 p-2 h-100">
        <Card.Header className='display text-uppercase text-center  text-light fs-5'>  {project.title}</Card.Header>
        <Card.Img className='sepia' variant="bottom" src={`/assets/images/${project.image}`} />
        <Card.Body>

          <ButtonGroup className="mb-2 w-100">
            <Button href={project.url} target="_blank"  rel="noopener noreferrer" variant="secondary" className='w-50 border-light border-2'>Demo</Button>
            <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary" className='w-50 border-light border-2'>GitHub</Button>
          </ButtonGroup>
          <Card.Text>
            {project.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>



  )
}

export default Project