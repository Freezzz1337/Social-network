import {Alert, Button, Col, Container, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {BiSearch} from "react-icons/bi";
import {useState} from "react";
import {getUsersSearch} from "../../services/auth-service";
import {useAuth} from "../../context/auth-context";
import "./search.css";

const Search = () => {
    const {token} = useAuth();
    const [searchLine, setSearchLine] = useState("");
    const [responseError, setResponseError] = useState(null);
    const [responseSearchList, setResponseSearchList] = useState("");

    const handleChange = (e) => {
        setSearchLine(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!searchLine) {
            setResponseError("String cannot be empty");
        } else {
            const searchResult = await getUsersSearch(searchLine, token);
            if (searchResult.length >= 1) {
                console.log(searchResult);
                setResponseSearchList(searchResult);
                setResponseError("");
            } else {
                setResponseError(searchResult.description);
            }
        }
        document.querySelector("input").value = "";
    }

    return (
        <Container>

            <Row className="justify-content-md-center mt-3">
                <Col xs={10} sm={10} lg={8} xl={6} className="mx-auto">
                    <Form.Label className="fw-light">Searching for new people</Form.Label>
                    <InputGroup>
                        <FormControl
                            className={`border rounded-pill ${responseError ? 'is-invalid' : ''}`}
                            type="search"
                            placeholder="search"
                            onChange={handleChange}
                        />


                        <Button
                            variant="outline-secondary"
                            className="bg-white border rounded-pill"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Search <BiSearch/>
                        </Button>
                    </InputGroup>
                </Col>
                {responseError &&
                    <div className="mt-3">
                        <Alert variant="danger" className="text-center">
                            {responseError}
                        </Alert>
                    </div>
                }

                <hr className="mt-3"/>
            </Row>

            {responseSearchList &&

                responseSearchList.map((item, index) => (
                    <Row key={index} className="selected mt-3 ">
                        <Col xs={5}>
                            <Image
                                className="search-user-avatar mb-3 mt-3"
                                src={`data:image/png;base64, ${item.avatar}`}
                                roundedCircle/>
                        </Col>

                        <Col xs={7}
                             className="mt-3 ">
                            <h2>{item.fullName}</h2>
                        </Col>
                    </Row>
                ))}

        </Container>
    );
}
export default Search;