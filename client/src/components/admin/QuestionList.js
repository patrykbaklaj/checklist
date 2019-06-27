import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/questionActions';
import {
    Container,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    Badge
} from 'reactstrap';

class QuestionList extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    renderListGroupItem = () => {
        return this.props.questions.map(question => {
            return (
                <ListGroupItem className='mb-2' key={question._id}>
                    <ListGroupItemHeading>{question.name}</ListGroupItemHeading>
                    <ListGroupItemText>ID:  {question._id}</ListGroupItemText>
                    <Row>
                        <Col md='6'>App ID: {question.appID}</Col>
                        <Col
                            md='6'
                            className='text-right justify-content-between'
                        >
                            <p>
                                Points: <Badge>{question.points}</Badge>
                            </p>
                        </Col>
                    </Row>
                </ListGroupItem>
            );
        });
    };

    render() {
        return (
            <Container className='mt-5 mb-4'>
                <ListGroup>{this.renderListGroupItem()}</ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.question.questions
    };
};

export default connect(
    mapStateToProps,
    { fetchQuestions }
)(QuestionList);
