import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import mockData from "./data/mockData";

function App() {
  const [data, setData] = useState(mockData);

  return (
    <Container style={{ marginTop: "3rem", maxWidth: "800px" }}>
      <Header />
      <Form />
      <TodoList />
    </Container>
  );
}

export default App;
