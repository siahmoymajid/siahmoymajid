import React, { useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
//add here your service ID and template ID from emailjs
// https://www.emailjs.com/docs/examples/reactjs/
        emailjs
          .sendForm(
            "service_7y323iu",
            "template_yj71rtj",
            form.current,
            "H1Jc3NSNtF3V_4fqz"
          )
          .then(
            (result) => {
              console.log(result.text);
              setMessage("Message sent successfully!");
            },
            (error) => {
              console.log(error.text);
              setMessage("An error occurred, please try again");
            }
          );
    };

    return (
        <Row className='justify-content-center align-items-baseline'>
            <Col lg={8}>
                <h1 className="display-6 display text-secondary text-end">Contact</h1>
                
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" size="md" name="user_name" className='text-primary-emphasis bg-dark push border-dark text-light rounded-3' />
                    </Form.Group>
                    <Form.Group className="mb-3" size="md" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="user_email" size="md" className='text-primary-emphasis bg-dark border-dark push text-light rounded-3' /></Form.Group>
                    <Form.Group className="mb-3" size="md" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" size="md" className='text-primary-emphasis push bg-dark border-dark  text-light rounded-3' /></Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant='success' type="submit" className='mt-2 pop' size="md">Submit</Button></div>
                    <p className='text-light text-center my-4'>{message}</p>
                        
                </Form>
            </Col>
        </Row>
    );
};