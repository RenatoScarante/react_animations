import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import {Row, Col } from 'reactstrap';

const Animation_ScrollAnimation = () => { 
  return (
    <section className="vw-100 vh-100">
      <Row className="vh-100 vw-100 align-middle">
        <Col className="text-center align-self-center">
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <h1>ScrollAnimation</h1> 
            <a href="https://dbramwell.github.io/react-animate-on-scroll/#home">https://dbramwell.github.io/react-animate-on-scroll/#home</a>
          </ScrollAnimation>
        </Col>
      </Row>
    </section>
  )
}

export default Animation_ScrollAnimation