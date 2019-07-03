import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/categoriesAction';
import { fetchQuestions } from '../../actions/questionActions';

import CategoryForm from './CategoryForm';

class CategoryAdd extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    onSubmit = formVals => {
        this.props.addCategory(formVals);
    };

    render() {
        if (this.props.questions.length > 0) {
            return (
                <Container>
                    <h1 className='text-center'>Add new category</h1>
                    <CategoryForm onSubmit={this.onSubmit} />
                </Container>
            );
        } else {
            return <div>Loading</div>;
        }
    }
}

const mapStateToProps = state => {
    return {
        selectedCategory: state.category.selectedCategory,
        questions: state.question.questions
    };
};

export default connect(
    mapStateToProps,
    { addCategory, fetchQuestions }
)(CategoryAdd);
