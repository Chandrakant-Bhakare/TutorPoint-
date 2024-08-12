import React from 'react';
import NavBar from './NavBar';
import './Aboutus.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const ContactDetails = () => {
  return (
    <>
    <NavBar/>
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1160926571/photo/portrait-of-male-elementary-school-teacher-standing-in-classroom.jpg?s=1024x1024&w=is&k=20&c=N4z2THM5X9oqyV7qXeBYwyUtkvYh4VqfRleiTTzm4Wg=" alt="Person Image" />
            <Card.Body className='BodyGard'>
              <Card.Title>Paras Gupta</Card.Title>
              <Card.Text>
               <strong>Email:</strong> parasgupta@gmail.com<br />
                <strong>Phone:</strong> +91 6388 402 884<br />
                <strong>Address:</strong>86, Palm Beach Rd, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614, India
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1307615661/photo/smiling-indian-business-man-working-on-laptop-at-home-office-young-indian-student-or-remote.jpg?s=1024x1024&w=is&k=20&c=PAJ4lGy0j_zeXNeinxSuyS_dtrceKU9jLvKKAoHgnBQ=" alt="Person Image" />
            <Card.Body className='BodyGard'>
              <Card.Title>Chandrakant Bhakare</Card.Title>
              <Card.Text >
                    <strong>Email:</strong> chandrakantbhakare@gmail.com<br />
                <strong>Phone:</strong>+91 9881969633<br />
                <strong>Address:</strong>K Star Hotel, L1, Palm Beach Rd, Sector 19, Vashi, Navi Mumbai, Maharashtra 400703, India
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md={4}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src='https://media.istockphoto.com/id/1346505886/photo/cheerful-primary-school-teacher.jpg?s=1024x1024&w=is&k=20&c=jGsWngunX4yt6VaLEU4SN8lNFrjwpB6SPRbSu7SoIZs=' alt="Company Image" />
            <Card.Body className='BodyGard'>
              <Card.Title>Kamesh Sahu</Card.Title>
              <Card.Text className='text'>
                <strong>Email:</strong>kameshsahu@gmail.com<br />
                <strong>Phone:</strong>+91 83196 06483<br />
                <strong>Address:</strong>Plot No. 99, Sector 8, Vashi, Navi Mumbai, Maharashtra 400703, India
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};



