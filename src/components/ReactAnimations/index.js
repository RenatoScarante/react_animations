import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import { Row, Col } from 'reactstrap';

const Bounce1 = styled.div`animation: 3s ${keyframes `${bounce}`} infinite`;
const Bounce2 = styled.div`animation: 4s ${keyframes `${bounce}`} infinite`;
const Bounce3 = styled.div`animation: 5s ${keyframes `${bounce}`} infinite`;

const Animation_ReactAnimations = () => {
  return (
    <section className="vw-100 vh-100">
      <Row className="vh-100 vw-100 align-middle">
        <Col className="text-center align-self-center">
          <Bounce1>
            <h1>react-animations bounce</h1>
          </Bounce1>   
        </Col>
        <Col className="text-center align-self-center">
          <Bounce2>
            <h1>react-animations bounce</h1>
          </Bounce2>   
        </Col>
        <Col className="text-center align-self-center">
          <Bounce3>
            <h1>react-animations bounce</h1>
          </Bounce3>   
        </Col>
      </Row>
    </section>
  )
}

export default Animation_ReactAnimations;