import React from 'react';
import { Fade } from 'react-reveal'

import { Row, Col } from 'reactstrap';

const animatedList = [1, 2, 3]

const ReactReveal = () => {
  return (
    <section className="vw-100 vh-100">
      {
        animatedList.map((item, key) => (
          <Row className="bg-light vh-100 align-middle border" key={key}>
            <Col className="text-center align-self-center">
              <Fade top>
                <h1>Item {item}</h1>
              </Fade>
            </Col>
          </Row>
        ))
      }
    </section>
  );
}

export default ReactReveal;