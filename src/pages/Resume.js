import React from 'react'

import { Col, Card, Row } from 'react-bootstrap';


const Resume = ({ data, title }) => {
  return (
    <>
    <Row className='d-flex justify-content-between align-items-center w-100 mt-2'>
      <Col md={4}>
      <a href="http://" target="_blank" rel="noopener noreferrer" className='display pop btn btn-light btn-lg'  >Download Resume</a>
      </Col>
      <Col md={8}>
      
      <h1 className="display-6 display text-secondary text-end ">{title}</h1>
      </Col>
    </Row>
    <Row xs={1} md={3} className="g-4 justify-content-evenly my-3 ">
      <Col>
        <Card bg="dark" className=" shadow-10 p-2 h-100">
          <Card.Header className='display text-uppercase text-center  text-light fs-5 border-bottom border-2 my-3 border-mute'> Work Experience 
          </Card.Header>
          <Card.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam vero, consequuntur asperiores quod minima totam suscipit eum unde maxime?
          </Card.Body>
        </Card>
        
      </Col>
     <Col>
        <Card bg="dark" className=" shadow-10 p-2 h-100">
          <Card.Header className='display text-uppercase text-center  text-light fs-5 border-bottom border-2 my-3 border-mute'> Skills
         

          </Card.Header>
          <Card.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam vero, consequuntur asperiores quod minima totam suscipit eum unde maxime?
          </Card.Body>
        </Card>
        
      </Col>
      <Col>
        <Card bg="dark" className=" shadow-10 p-2 h-100">
          <Card.Header className='display text-uppercase text-center  text-light fs-5 border-bottom border-2 my-3 border-mute'> Certifications 
          </Card.Header>
          <Card.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam vero, consequuntur asperiores quod minima totam suscipit eum unde maxime?
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
    

  )
}

export default Resume