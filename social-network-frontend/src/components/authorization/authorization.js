import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import bgPicture from "../../img/bg.jpg";
import icon from "../../img/icon.png"

    const Authorization = () => {
    return (
        <div style={{backgroundImage: `url('${bgPicture}'`}}>
            <Container className="text-center d-flex align-items-center justify-content-center vh-100" >
                <Form className="form-signin">
                    <img
                        className="mb-4"
                        src={`${icon}`}
                        alt=""
                        width="72"
                        height="72"
                    />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <Form.Group controlId="inputEmail">
                        <Form.Control className="form-control-lg rounded-0" type="email" placeholder="Email address" required autoFocus />
                    </Form.Group>

                    <Form.Group controlId="inputPassword">
                        <Form.Control className="form-control-lg rounded-0" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group controlId="rememberMe" className="checkbox mt-1 mb-2 d-flex justify-content-center">
                        <Form.Check type="checkbox" label="Remember me" className="mr-2"/>
                    </Form.Group>

                    <Button  variant="info"   block type="submit"  className="btn-lg w-100 rounded-0">
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