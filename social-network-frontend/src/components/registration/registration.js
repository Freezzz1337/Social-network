import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import bgPicture from "../../img/bg.jpg"

const Registration = () => {
    return (
        <section className="vh-100 bg-image" style={{backgroundImage: `url('${bgPicture}'`}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <Container className="h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card style={{borderRadius: '15px'}}>
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <Form>
                                        <Form.Group className="mb-4" controlId="form3Example1cg">
                                            <Form.Control type="text" className="form-control-lg" name="username" />
                                            <Form.Label>Your Username</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3Example3cg">
                                            <Form.Control type="email" className="form-control-lg"  name="email"/>
                                            <Form.Label>Your Email</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3Example4cg">
                                            <Form.Control type="password" className="form-control-lg" name="password"/>
                                            <Form.Label>Password</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3Example4cdg">
                                            <Form.Control type="password" className="form-control-lg"/>
                                            <Form.Label>Repeat your password</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3ExampleAvatar">
                                            <Form.Label>Choose your avatar</Form.Label>
                                            <Form.Control type="file" accept="image/*" className="form-control-lg" name="avatar"/>
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <Button type="button" variant="info" block
                                                    className="btn btn-info btn-lg gradient-custom-4 text-body w-100 rounded-0">Register</Button>
                                        </div>


                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a
                                            href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Registration;