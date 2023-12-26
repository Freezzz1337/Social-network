import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import bgPicture from "../../img/bg.jpg"
import {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {convertFileToBase64} from "../../util/convert-file-to-base64";
import {registration} from "../../services/auth-service";
import {registrationValidation} from "../../util/validation";

const Registration = () => {
    const [fromData, setFromData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: null
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [validErrors, setValidErrors] = useState({});
    const formRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.type === "file") {
            convertFileToBase64(e.target.files[0], (base64String) => {
                setFromData({...fromData, [e.target.name]: base64String})
            });
        } else {
            setFromData({...fromData, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newValidErrors = registrationValidation(fromData);
        setValidErrors(newValidErrors);

        if (Object.keys(newValidErrors).length === 0) {
            try {
                const serverResponse = await registration(JSON.stringify(fromData));
                if (serverResponse.response) {
                    navigate("/authorization");
                } else {
                    setError(serverResponse.description);
                }
            } catch (error) {
                console.log("Login failed:", error);
                setError("Unexpected error occurred.");
            } finally {
                formRef.current.reset();
            }
        }
    }


    return (
        <section className="vh-100 bg-image" style={{backgroundImage: `url('${bgPicture}'`}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
                <Container className="h-100 ">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <Form ref={formRef} onSubmit={handleSubmit}>
                                        <Form.Label>Your Username</Form.Label>

                                        <Form.Group className="mb-4">
                                            <Form.Control type="text"
                                                          className={`form-control-lg ${validErrors.fullName ? 'is-invalid' : ''}`}
                                                          name="fullName"
                                                          onChange={handleChange} required/>
                                            {validErrors.fullName &&
                                                <Form.Control.Feedback
                                                    type="invalid">{validErrors.fullName}</Form.Control.Feedback>}
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control type="email"
                                                          className={`form-control-lg ${validErrors.email ? 'is-invalid' : ''}`}
                                                          name="email"
                                                          onChange={handleChange} required/>
                                            {validErrors.email &&
                                                <Form.Control.Feedback
                                                    type="invalid">{validErrors.email}</Form.Control.Feedback>}
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"
                                                          className={`form-control-lg ${validErrors.password ? 'is-invalid' : ''}`}
                                                          name="password"
                                                          onChange={handleChange} required/>
                                            {validErrors.password &&
                                                <Form.Control.Feedback
                                                    type="invalid">{validErrors.password}</Form.Control.Feedback>}
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Choose your avatar</Form.Label>
                                            <Form.Control type="file"
                                                          accept="image/*"
                                                          className="form-control-lg"
                                                          name="avatar"
                                                          onChange={handleChange}/>
                                        </Form.Group>

                                        {error &&
                                            <div className="mt-3">
                                                <Alert variant="danger">
                                                    {error}
                                                </Alert>
                                            </div>
                                        }

                                        <div className="d-flex justify-content-center">
                                            <Button type="submit" variant="info"
                                                    className="btn btn-info btn-lg gradient-custom-4 text-body w-100 rounded-0">Register</Button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an
                                            account? <Link
                                                to="/authorization" className="fw-bold"><u>Login here</u></Link></p>
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