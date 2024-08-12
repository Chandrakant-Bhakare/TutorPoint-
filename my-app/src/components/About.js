import './Aboutus.css';
import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon for bullet points

export const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <Container className="my-5">
      <Row>
        <Col>
          <section className="about-section">
            <h1 className="section-title">About Us</h1>
            <ListGroup as="ui">
            <ListGroup.Item as="li"><FaCheckCircle className="icon" /> Welcome to Tutor Point, your premier destination for personalized tuition services. Our mission is to empower students to achieve their academic potential through dedicated, one-on-one tutoring tailored to their individual needs.</ListGroup.Item>
            
              
            </ListGroup>
            
          </section>
          
          <section className="why-tuition-section">
            <h2 className="section-title">Why Tuition Matters</h2>
            <ListGroup as="ul">
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Individual Attention:</strong> In a typical classroom setting, it can be challenging for teachers to give each student the individual attention they need. Tuition provides a focused, one-on-one learning environment where students can ask questions freely and receive immediate feedback.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Customized Learning:</strong> Every student has unique strengths and weaknesses. Our tutors tailor their teaching methods and materials to fit each student's learning style, ensuring a more effective and enjoyable learning experience.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Boosting Confidence:</strong> Struggling with academic concepts can be discouraging for students. Tuition helps to build confidence by reinforcing understanding and improving grades, which in turn fosters a positive attitude towards learning.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Academic Improvement:</strong> Regular, targeted tuition sessions help to solidify foundational knowledge, close learning gaps, and advance students beyond the standard curriculum.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Exam Preparation:</strong> Our tutors are experienced in preparing students for various exams and assessments, providing them with the strategies and practice they need to excel.</ListGroup.Item>
            </ListGroup>
          </section>

          <section className="our-approach-section">
            <h2 className="section-title">Our Approach</h2>
            <ListGroup as="ul">
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Qualified Tutors:</strong> Our tutors are not only subject matter experts but also passionate educators dedicated to making a difference in their students' lives.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Comprehensive Assessment:</strong> We begin with a thorough assessment of each student’s current academic level, learning style, and goals to develop a personalized learning plan.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Interactive Learning:</strong> We use engaging teaching methods and interactive tools to keep students motivated and interested in their studies.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Continuous Support:</strong> We provide ongoing support and regular progress reports to parents to keep them informed about their child’s development.</ListGroup.Item>
              <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Flexible Scheduling:</strong> Our tuition sessions are flexible, allowing students to learn at their own pace and schedule sessions at convenient times.</ListGroup.Item>
            </ListGroup>
          </section>

          <section className="join-us-section">
            <h2 className="section-title" >Join Us Today</h2>
            <ListGroup as="ul">
            <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Flexible Scheduling:</strong> If you're looking to give your child the academic edge they need, Tutor Point is here to help. Contact us today to learn more about our tuition services and how we can assist your child in achieving their academic goals.</ListGroup.Item>
            <ListGroup.Item as="li"><FaCheckCircle className="icon" /> <strong>Flexible Scheduling:</strong> We look forward to partnering with you on this educational journey!</ListGroup.Item>
            </ListGroup>
            </section>
        </Col>
      </Row>
    </Container>
    </>
  );
};
