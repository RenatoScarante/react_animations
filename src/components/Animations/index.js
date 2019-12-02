import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Button, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const Item = (linkTo, text) => (
  <ListGroupItem>
    <Link to={linkTo}>
      <Button className="btn-primary">{text}</Button>
    </Link>
  </ListGroupItem>
)

const Animations = () => { 
  return (
    <section className="vw-100 vh-100">
      <Container fluid className="vw-100 vh-100" > 
        <Row>
          <Col className="text-center align-self-center">
            <ListGroup>
              {Item("/animations/react-animations", "ReactAnimations")}
              {Item("/animations/scroll-animation", "ScrollAnimation")}
              {Item("/animations/react-reveal", "ReactReveal")}
              {Item("/animations/react-transition-group", "TransitionGroup")}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Animations