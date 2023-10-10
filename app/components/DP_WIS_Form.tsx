'use client'
import { useState, FC } from 'react';
import { weightedIntervalScheduling } from '../script/DP_Weighted_Interval_Scheduling';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup, Container, Row, Col, Alert } from 'react-bootstrap';


interface List {
  startTime: number;
  endTime: number;
  weight: number;
}

const DP_Weighted_Interval_Scheduling_Form: FC = () => {
  const [inputStart, setInputStart] = useState<string>("");
  const [inputEnd, setInputEnd] = useState<string>("");
  const [inputWeight, setInputWeight] = useState<string>("");

  const [lists, setlist] = useState<List[]>([]);
  const [optimalLists, setOptimalLists] = useState<List[]>([]);
  const [maxWeight, setMaxWeight] = useState<number>(0);

  const addToList = () => {
    const Start = parseInt(inputStart);
    const End = parseInt(inputEnd);
    const Weight = parseInt(inputWeight);

    if (!isNaN(Start) && !isNaN(End) && !isNaN(Weight) && Start < End) {
        setlist(prevEntries => {
        const newEntries = [...prevEntries, { startTime: Start, endTime: End, weight: Weight }];
        return newEntries.sort((a, b) => a.startTime - b.startTime);
      });

      setInputStart("");
      setInputEnd("");
      setInputWeight("");
    }
    else {
      alert("Please enter valid numbers for all fields and ensure start time is less than end time.");
    }
    setOptimalLists([]);
    setMaxWeight(0);
  };

  const clearList = () => {
    setlist([]);
    setOptimalLists([]);
    setMaxWeight(0);
  };

  const calculate = () => {
    const mappedForCal = lists.map(list => ({
        startTime: list.startTime,
        endTime: list.endTime,
        weight: list.weight
      }));
    const { optimalList, maxWeight } = weightedIntervalScheduling(mappedForCal);
    console.log(optimalLists);
    setOptimalLists(optimalList);
    setMaxWeight(maxWeight);
  };

  return (
    <Container style={{ padding: '2rem' }}>
      <Row className="justify-content-md-center">
        <br/>
        <Col xs lg="6">
          <Form>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="number"
                value={inputStart}
                onChange={e => setInputStart(e.target.value)}
                placeholder="Enter start time"
              />
            </Form.Group>
            
            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="number"
                value={inputEnd}
                onChange={e => setInputEnd(e.target.value)}
                placeholder="Enter end time"
              />
            </Form.Group>

            <Form.Group controlId="weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                value={inputWeight}
                onChange={e => setInputWeight(e.target.value)}
                placeholder="Enter weight"
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="button" onClick={addToList}>
              Add to List
            </Button>
            <Button variant="secondary" type="button" onClick={clearList} className="ml-2">
              Clear List
            </Button>
          </Form>

          {lists.length > 0 && (
            <>
              <h5 className="mt-4">Lists :</h5>
              <ListGroup>
                {lists.map((list, index) => (
                  <ListGroup.Item key={index}>
                    Start Time: {list.startTime}, End Time: {list.endTime}, Weight: {list.weight}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}

          <Button variant="success" type="button" onClick={calculate} className="mt-3">
            Calculate
          </Button>

          {maxWeight !== 0 && (
            <Alert variant="info" className="mt-3">
              OPT({lists.length}) = {maxWeight}
            </Alert>
          )}

          {optimalLists.length > 0 && (
            <>
              <h5 className="mt-4">Optimal lists:</h5>
              <ListGroup>
                {optimalLists.map((list, index) => (
                  <ListGroup.Item key={index}>
                    Start Time: {list.startTime}, End Time: {list.endTime}, Weight: {list.weight}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DP_Weighted_Interval_Scheduling_Form;

