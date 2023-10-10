'use client'
import { useState, FC } from 'react';
import { derangement } from '../script/DP_Derangement';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup, Container, Row, Col, Alert } from 'react-bootstrap';

const DP_Derangement: React.FC = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const derangementResult  = derangement(parseInt(input));
    setResult(derangementResult);
  };

  return (
    <Container style={{ padding: '2rem' }}>
          <Row className="justify-content-md-center">
              <br />
              <Col xs lg="6">
                  <Form>
                      <Form.Group controlId="startTime">
                          <Form.Label>Start Time</Form.Label>
                          <Form.Control
                              type="number"
                              value={input}
                              onChange={e => {
                                setInput(e.target.value);
                                setResult(null);
                            }}                            
                              placeholder="Enter Number for Derangement" />
                      </Form.Group>
                      <br />
                  </Form>

                  <Button variant="success" type="button" onClick={calculate} className="mt-3">
                      Calculate
                  </Button>

                  {result != null &&  (
                      <Alert variant="info" className="mt-3">
                          !{input} = {result}
                      </Alert>
                  )}
              </Col>
          </Row>
      </Container>
  );
};

export default DP_Derangement;
