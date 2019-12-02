import React, { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import './styles.css'

import { Container, Row, Col, Button } from 'reactstrap';

const Animation_ReactTransitionGroup = () => {
  const [items, setItems] = useState([]);

  function handleAdd() {
    const newItems = items.concat([
      prompt('Enter some text')
    ]);
    setItems(newItems);
  }

  function handleRemove(i) {
    let newItems = items.slice();
    newItems.splice(i, 1);
    setItems(newItems);
  }

  return(
    <section className="vw-100 vh-100">
      <Container fluid className="vw-100 vh-100" > 
        <Row className="h-100 align-middle">
          <Col className="text-center align-self-center">
          <div>
            <Button className="btn-secondary" onClick={handleAdd}>Add Item</Button>
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {items.map((item, i) => (
                  <div key={item} onClick={() => handleRemove(i)}>
                    {item}
                  </div>
                ))
                }
              </CSSTransitionGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Animation_ReactTransitionGroup;
