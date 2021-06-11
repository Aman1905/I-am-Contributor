import React from 'react'
import Card from 'react-bootstrap/Card'
import "./Card.css"
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Cards = (props) => {
  return (
    <>
    <Container className ="aman-container">
    <Row >
    <Col className="d-flex flex-wrap">
    <div>
      <CardDeck>
        <Card>
        <Card.Body>
          <Card.Text>
            <h6>Hello Everyone 👋</h6>
          </Card.Text>
          
            <h3>{props.sname}</h3>
            <h6>My Skills are :-</h6>
            <Card.Text>
              <ul>
              <h6>
                <li>{props.skill1}</li>
                <li>{props.skill2}</li>
                <li>{props.skill3}</li>
                <li>{props.skill4}</li>
              </h6>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Row>
            <div className="m-2">
              <a href={props.l_link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href={props.g_link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href={props.t_link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            </Row>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
    </Col>
    </Row>
    </Container>
    
    </>
  )
}

export default Cards
