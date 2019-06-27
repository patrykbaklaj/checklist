import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class QuestionForm extends Component {
    renderInput = ({ input, label, meta, type }) => {
        // console.log(meta);
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

    onSubmit = formVals => {
        this.props.onSubmit(formVals);
    };

    render() {
        return (
            <Row className='d-flex justify-content-center'>
                <Col md='6'>
                    <div className='mt-5 mb-5 shadow p-4'>
                        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                label='Question content'
                                name='questionTitle'
                                type='text'
                                component={this.renderInput}
                            />
                            <Field
                                label='Question ID'
                                name='questionID'
                                type='text'
                                component={this.renderInput}
                            />
                            <Field
                                label='Question points'
                                name='questionPoints'
                                type='number'
                                component={this.renderInput}
                            />
                            <Button
                                color='dark'
                                block
                                size='sm'
                                className='mt-4'
                            >
                                Add new question
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    form: 'questionForm'
})(QuestionForm);
