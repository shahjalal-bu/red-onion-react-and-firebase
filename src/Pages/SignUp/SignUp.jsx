import React, { useState } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { signup } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't match !");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, userName);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed");
    }
  }

  return (
    <Container style={{ minHeight: "65vh", marginTop: 100 }}>
      <div className="row justify-content-center align-items-center">
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                className="p-3"
                type="name"
                placeholder="Enter Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

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
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="p-3"
                type="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms & Conditions"
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              Submit
            </Button>
            {error && <p className="error">{error}</p>}
          </Form>
          <p className="lead mt-3">
            Already have an account?{" "}
            <Link className="text-danger" to="/login">
              Login
            </Link>{" "}
            instead.
          </p>
        </Col>
      </div>
    </Container>
  );
};

export default SignUp;
