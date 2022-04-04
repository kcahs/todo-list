import React from "react";
import { Container } from "react-bootstrap";

const TodoList = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <h3>Open</h3>
      <div className="list-group">
        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          ❗ Buy food for dinner
          <button className="btn btn-primary btn-sm">Check</button>
        </a>
        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          Call Marie at 10.00 PM
          <button className="btn btn-primary btn-sm">Check</button>
        </a>
        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          Write a react blog post
          <button className="btn btn-primary btn-sm">Check</button>
        </a>
      </div>

      <h3 className="mt-3">Completed</h3>
      <div className="list-group">
        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center completed">
          ✔ ❗ Publish a new blog
          <button className="btn btn-sm btn-danger">Uncheck</button>
        </a>
      </div>
    </Container>
  );
};

export default TodoList;
