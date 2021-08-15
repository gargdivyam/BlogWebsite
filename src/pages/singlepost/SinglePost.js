import { Row, Col } from "reactstrap";
import AboutMe from "../../components/aboutMe/AboutMe";
import PostDetial from "../../components/postdetail/PostDetail";
const SinglePost = () =>{
    return(
        <div className="singlepost-main">
            <Row style={{margin: 0}}>
                <Col md={9}>
                    <PostDetial />
                </Col>
                <Col md={3}>
                    <AboutMe />
                </Col>
            </Row>
        </div>
    )
}

export default SinglePost;