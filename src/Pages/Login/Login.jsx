import React, { useState } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { login } = useAuth();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.replace(from);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login");
    }
  }
  return (
    <Container style={{ minHeight: "65vh", marginTop: 100 }}>
      <div className="row justify-content-center align-items-center">
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="p-3"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="p-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              Submit
            </Button>
            {error && <p className="error">{error}</p>}
          </Form>
          <p className="lead mt-3">
            Don't have an account?
            <Link className="text-danger mx-2" to="/signup">
              SignUp
            </Link>
            instead.
          </p>
        </Col>
      </div>
    </Container>
  );
};

export default Login;
