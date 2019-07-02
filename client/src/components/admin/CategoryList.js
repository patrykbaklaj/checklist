import React, { Component } from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categoriesAction';
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
    
    onDeleteClick = () => {};
    
    onEditClick = (e) => {
        history.push(`/admin/category/${e.target.dataset.id}`);
    };

    componentDidMount() {
        this.props.fetchCategories();
    }

    renderListGroupItem = () => {
        return this.props.categories.map(category => {
            return (
                <ListGroupItem className='mb-2' key={category._id}>
                    <ListGroupItemHeading>{category.name}</ListGroupItemHeading>
                    <ListGroupItemText>ID: {category._id}</ListGroupItemText>
                    <Row>
                        <Col md='6'>App ID: {category.appID}</Col>
                        <Col md='6' className='d-flex justify-content-between'>
                            <div>
                                Questions:{' '}
                                <Badge>{category.questions.length}</Badge>
                            </div>
                            <div>
                                <Button
                                    className='ml-3'
                                    size='sm'
                                    color='warning'
                                    data-id={category._id}
                                    onClick={this.onEditClick}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className='ml-3'
                                    size='sm'
                                    color='danger'
                                    data-id={category._id}
                                >
                                    Delete
                                </Button>
                            </div>
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
        categories: state.category.categories
    };
};

export default connect(
    mapStateToProps,
    { fetchCategories }
)(QuestionList);
