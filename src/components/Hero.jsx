import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Jumbotron style={{ background: "darkred", marginTop: "3rem" }} fluid>
      <Container bg="dark">
        <h1>The live long book club</h1>
        <p>
          Welcome to world of the living legends bookstore. Only life long
          achievers are welcome here...
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
