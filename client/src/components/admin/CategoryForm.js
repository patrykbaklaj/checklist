import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormGroup, Label, Input, Button, Row, Col, Form } from 'reactstrap';
// import { fetchQuestions } from '../../actions/questionActions';

class CategoryForm extends Component {
    renderInput = ({ input, label, meta, type }) => {
        return (
            <FormGroup className='mb-4'>
                <Label for={input.name}>
                    <strong>{label}</strong>
                </Label>
                <Input
                    {...input}
                    type={type}
                    id={input.name}
                    placeholder={`Enter ${label}`}
                />
            </FormGroup>
        );
    };

    renderCurrentQuestions = ({ input, label, meta }) => {
        if (this.props.selectedCategory) {
            return this.props.selectedCategory.questions.map(question => {
                return (
                    <FormGroup check key={question._id}>
                        <Label check>
                            {/* <Input type='checkbox' {...input} />
                        {question._id}: <strong>{question.name}</strong> */}
                            <Field
                                name={`qid-${question._id}`}
                                id={question._id}
                                component='input'
                                type='checkbox'
                            />
                            {question._id}: <strong>{question.name}</strong>
                        </Label>
                    </FormGroup>
                );
            });
        } else return <div />;
    };

    renderAllQuestions = () => {
        if (this.props.questions.length !== 0) {
            return this.props.questions.map(question => {
                return (
                    <FormGroup check key={question._id}>
                        <Label check>
                            <Field
                                name={`qid-${question._id}`}
                                id={question._id}
                                component='input'
                                type='checkbox'
                            />
                            {question._id}: <strong>{question.name}</strong>
                        </Label>
                    </FormGroup>
                );
            });
        } else {
            return <div>Loading</div>;
        }
    };

    handleSubmit = formVals => {
        this.props.onSubmit(formVals);
    };

    render() {
        return (
            <div>
                <div className='mt-5 mb-5 shadow p-4'>
                    <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <Field
                            label='Category Name'
                            name='categoryName'
                            type='text'
                            component={this.renderInput}
                        />
                        <Field
                            label='Category ID'
                            name='categoryID'
                            type='text'
                            component={this.renderInput}
                        />
                        <h5>Current questions</h5>

                        <Field
                            component={this.renderCurrentQuestions}
                            name='currentQuestions'
                        />
                        <h5 className='mt-4'>All Questions</h5>
                        <Field
                            component={this.renderAllQuestions}
                            name='AllQuestions'
                        />
                        <Button color='dark' block size='sm' className='mt-4'>
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedCategory: state.category.selectedCategory,
        questions: state.question.questions
    };
};

const formWrapped = reduxForm({ form: 'categoryForm' })(CategoryForm);

export default connect(mapStateToProps)(formWrapped);
