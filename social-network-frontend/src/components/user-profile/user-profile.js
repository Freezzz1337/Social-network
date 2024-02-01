import "./user-profile.css";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getUserData, getMorePosts} from "../../services/auth-service";
import {useAuth} from "../../context/auth-context";
import PostDetails from "../post-details";

const UserProfile = () => {
    const {token} = useAuth();
    const [userData, setUserData] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    const [pageAndButton, setPageAndButton] = useState({
        page: 1,
        buttonState: true
    });


    useEffect(() => {
        const fetchData = async () => {
            const serverResponse = await getUserData(token);
            if (serverResponse) {
                setUserData(serverResponse);
            }
        };

        fetchData();

    }, [token]);

    if (!userData) {
        return <div><h1>Wait a moment!</h1></div>
    }

    const handleGetMorePosts = async () => {
        const {page} = pageAndButton;
        const newPosts = await getMorePosts(token, page);

        if (newPosts && newPosts.length > 0) {

            setUserData({
                ...userData,
                postList: [...userData.postList, ...newPosts]
            });

            setPageAndButton({...pageAndButton, page: (page + 1)});
        }
        if (newPosts.length < 6) {
            setPageAndButton({...pageAndButton, buttonState: false});
        }

    }

    const handleShowModal = (e, data) => {
        e.preventDefault();

        if (data) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = scrollBarWidth + "px";
            setSelectedPost(data);

        }
    }


    return (

        <Container>
            <Row className="mt-5">

                <Col sm={12} md={12}>
                    <Row>
                        <Col sm={12} md={1} className="avatar-container order-md-first first-col">
                            <div className="avatar-frame">
                                <Image className="avatar" src={`data:image/jpg;base64, ${userData.avatar}`}/>
                            </div>
                        </Col>
                        <Col sm={12} md={11} className="order-first ">
                            <h3 className="text-center">{userData.fullName}</h3>
                            <hr className="text-center"/>
                        </Col>
                    </Row>
                </Col>

                <hr className="mt-3"/>
                <div className="w-100 mb-2">
                    <h2 className="text-center ">Posts</h2>
                </div>

                <Col sm={12} md={8} className="w-100">
                    <Row xs={1} md={3}>
                        {userData.postList.map(data => (
                            <Col
                                key={data.id}
                                className="mb-4"
                                onClick={(e) => handleShowModal(e, data)}
                            >
                                <Card key={data.id} className=" col-size shadow-lg">
                                    <Card.Img
                                        src={`data:image/png;base64, ${data.image}`}/>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                {pageAndButton.buttonState && (
                    <Button variant="success"
                            className="text-center"
                            onClick={handleGetMorePosts}>Show more</Button>
                )}

                {selectedPost && (
                    <PostDetails
                        post={selectedPost}
                        onClose={() => {
                            setSelectedPost(null);
                            document.body.style.overflow = "auto"
                            document.body.style.marginRight = ""
                        }}/>
                )}
            </Row>
        </Container>
    )
}

export default UserProfile;