import React from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageNavigation from "../components/PageNavigation";
import { BASE_URL } from "./utils";
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  Class: Yup.string().required("Class is required"),
  Age: Yup.number().required("Age is required"),
  PhoneNumber: Yup.string().required("Phone Number is required"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  Pay: Yup.string().required("Payment details are required"),
  terms: Yup.boolean()
    .oneOf([true], "Terms must be accepted")
    .required("Terms must be accepted"),
});
const onSubmit = (values) => {
  fetch(`${BASE_URL}/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...values }),
  })
    .then((res) => res.json())
    .then((data) => console.log())
    .catch((err) => console.log(err));
};

function BookEvent() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      Class: "",
      Age: "",
      PhoneNumber: "",
      Email: "",
      Pay: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <PageNavigation />
      <div className="mt-5">
        <h2>BOOK NOW!</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3 flex-column">
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="auto" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                name="Age"
                value={formik.values.Age}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.Age}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.Age}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="auto" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone Number"
                name="PhoneNumber"
                value={formik.values.PhoneNumber}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.PhoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.PhoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="auto" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.Email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.Email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="auto" controlId="formPay">
              <Form.Label>Payment Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Payment Details"
                name="Pay"
                value={formik.values.Pay}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.Pay}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.Pay}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms and Conditions"
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.terms}
                feedback={formik.errors.terms}
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default BookEvent;
