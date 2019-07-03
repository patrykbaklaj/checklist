import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, deleteQuestion } from '../../actions/questionActions';
import {
    Container,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    Badge,
    Button
} from 'reactstrap';

class QuestionList extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    handleDeleteClick = (e) => {
        this.props.deleteQuestion(e.target.dataset.id);
    }

    renderListGroupItem = () => {
        return this.props.questions.map(question => {
            return (
                <ListGroupItem className='mb-2' key={question._id}>
                    <ListGroupItemHeading>{question.name}</ListGroupItemHeading>
                    <ListGroupItemText>ID: {question._id}</ListGroupItemText>
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
                    <Row>
                        <Col>
                            <Button outline color='warning' size='sm' block>
                                Edit
                            </Button>
                        </Col>
                        <Col>
                            <Button outline color='danger' size='sm' block onClick={this.handleDeleteClick} data-id={question._id}>
                                Delete
                            </Button>
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
    { fetchQuestions, deleteQuestion }
)(QuestionList);
