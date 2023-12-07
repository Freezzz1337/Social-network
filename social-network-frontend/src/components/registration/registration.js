import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import bgPicture from "../../img/bg.jpg"
import {useState} from "react";

const Registration = () => {

    const [fromData, setFromData] = useState({
        username: "",
        email: "",
        password: "",
        avatar: null
    });

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setFromData({...fromData, [e.target.name]: e.target.files[0]});
        } else {
            setFromData({...fromData, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(fromData);

    }

    return (
        <section className="vh-100 bg-image" style={{backgroundImage: `url('${bgPicture}'`}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <Container className="h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card style={{borderRadius: '15px'}}>
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-4" controlId="form3Example1cg">
                                            <Form.Control type="text" className="form-control-lg" name="username"
                                                          onChange={handleChange}/>
                                            <Form.Label>Your Username</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3Example3cg">
                                            <Form.Control type="email" className="form-control-lg" name="email"
                                                          onChange={handleChange}/>
                                            <Form.Label>Your Email</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3Example4cg">
                                            <Form.Control type="password" className="form-control-lg" name="password"
                                                          onChange={handleChange}/>
                                            <Form.Label>Password</Form.Label>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="form3ExampleAvatar">
                                            <Form.Label>Choose your avatar</Form.Label>
                                            <Form.Control type="file" accept="image/*" className="form-control-lg"
                                                          name="avatar" onChange={handleChange}/>
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <Button type="submit" variant="info"
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