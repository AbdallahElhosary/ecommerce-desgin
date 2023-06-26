import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const LoginPage = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="container justify-content-center align-items-center" >
        <Form className='col-12 col-md-6'>
          <h2 className="text-center">Log In</h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="dark" type="submit" className="w-100">
            Submit
          </Button>
          <div className='w-100 text-center py-2'>Have No Account ? <Link to="/register">Register</Link> </div>
        </Form>
      </Row>
      <Row>
        <Link to="/admin">Admin Login</Link>
        <Link to="/user">User Login</Link>
      </Row>
    </Container>

  )
}

export default LoginPage