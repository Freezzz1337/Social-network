import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import './post-details.css';

const PostDetails = ({post, onClose}) => {

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={8}  xl={7}>
                            <Image src={`data:image/png;base64, ${post.image}`} className="modal-image"/>
                        </Col>
                        <Col sm={12} md={4} xl={5} className="modal-description">
                            <h2>Caption</h2>
                            <hr/>
                            <p>{post.caption}</p>

                        </Col>
                        <Button
                            variant="outline-danger"
                            className="mt-3"
                            onClick={onClose}>Close</Button>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default PostDetails;
