import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Register = () => {
    return (
        <Container>
            <Row className="container justify-content-center align-items-center" style={{ height: "70vh" }}>
                <Form className='col-12 col-md-6'>
                    <h2 className="text-center">Sign Up</h2>
                    <FloatingLabel
                        controlId="floatingName"
                        label="User Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingConfirm" label="Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="dark" type="submit" className="w-100">
                        Submit
                    </Button>
                    <div className='w-100 text-center py-2'>Have Account ? <Link to="/login">Login</Link> </div>
                </Form>
            </Row>
        </Container>

    )
}

export default Register
