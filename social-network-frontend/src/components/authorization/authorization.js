import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import bgPicture from "../../img/bg.jpg";
import icon from "../../img/icon.png"
import {useState} from "react";

const Authorization = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div style={{backgroundImage: `url('${bgPicture}'`}}>
            <Container className="text-center d-flex align-items-center justify-content-center vh-100">
                <Form className="form-signin" onSubmit={handleSubmit}>
                    <img
                        className="mb-4"
                        src={`${icon}`}
                        alt=""
                        width="72"
                        height="72"
                    />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <Form.Group controlId="inputEmail">
                        <Form.Control className="form-control-lg rounded-0" type="email" name="email"
                                      placeholder="Email address" onChange={handleChange} required autoFocus/>
                    </Form.Group>

                    <Form.Group controlId="inputPassword">
                        <Form.Control className="form-control-lg rounded-0" type="password" name="password"
                                      placeholder="Password" onChange={handleChange} required/>
                    </Form.Group>

                    <Button variant="info"  type="submit" className="btn-lg w-100 rounded-0 mt-3">
                        Sign in
                    </Button>


                    <p className="mt-2">
                        Don't have an account? <Link to="/signup">Create a new account.</Link>
                    </p>

                </Form>
            </Container>

        </div>
    )
}

export default Authorization;
