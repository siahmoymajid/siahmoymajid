import React from 'react'
import { ContactForm } from '../components/Form';
import { Col, Row } from 'react-bootstrap';

const Contact = ({ data }) => {
  console.log(data);
  return (
    <Row className='position-relative w-100'>
      <Col className="g-4 justify-content-evenly my-2">
      <ContactForm />
      </Col>
    </Row>
  )
}

export default Contact