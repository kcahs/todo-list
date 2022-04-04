import React from "react";
import { Container } from "react-bootstrap";

const Form = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <form className="row g-3">
        <div className="col">
          <input
            type="text"
            class="form-control"
            placeholder="New Todo..."
          ></input>
        </div>
        <div class="col-auto">
          <button type="submit" className="btn btn-primary fw-bold">
            +
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
