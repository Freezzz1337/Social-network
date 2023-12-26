import {Alert, Button, Card, Container, Form, Row} from "react-bootstrap";
import {useRef, useState} from "react";
import {convertFileToBase64} from "../../util/convert-file-to-base64";
import {createNewPost} from "../../services/auth-service";
import {useAuth} from "../../context/auth-context";
import {useNavigate} from "react-router-dom";

const PostCreate = () => {
    const {token} = useAuth();
    const [formData, setFormData] = useState({
        caption: "",
        image: null
    });
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertError, setAlertError] = useState(false);

    const handleAlertClose = () => {
        if (alertSuccess) {
            setAlertSuccess(false);
            navigate("/userProfile");
        }
        setAlertError(false);
    }

    const handleChange = (e) => {
        if (e.target.type === "file") {
            convertFileToBase64(e.target.files[0], (base64String) => {
                setFormData({...formData, [e.target.name]: base64String})
            });
        } else {
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const serverResponse = await createNewPost(JSON.stringify(formData), token);

            if (serverResponse.response) {
                setAlertSuccess(true);
            }
        } catch (error) {
            console.log("Something went wrong: ", error);
            setAlertError(true);
        } finally {
            formRef.current.reset();
        }
    }

    return (
        <Container className="text-center d-flex align-items-center justify-content-center">
            <Row>

                <Alert
                    show={alertError}
                    onClose={handleAlertClose}
                    className="mt-5"
                    variant="danger"
                    dismissible
                >
                    <Alert.Heading>Error!</Alert.Heading>
                    <p>There was an error while creating the post.</p>
                </Alert>

                <Alert
                    show={alertSuccess}
                    onClose={handleAlertClose}
                    className="mt-5"
                    variant="success"
                    dismissible
                >
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>Your post has been created successfully.</p>
                </Alert>

                <Card col={12} className="form-signin shadow-lg mx-auto mt-5" style={{width: '400px'}}>
                    <Card.Body>
                        <Card.Title>Create new post</Card.Title>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    accept="image/*"
                                    name="image"
                                    type="file"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Caption</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    className="form-control-lg rounded-0"
                                    name="caption"
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>

                            <Button variant="info" type="submit" className="btn-lg w-100 rounded-0 mt-3">
                                Create
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}


export default PostCreate;