import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions/questionActions';
import QuestionForm from './QuestionForm';

class QuestionAdd extends Component {
    
    onSubmit = formVals => {
        this.props.addQuestion(formVals);
    };

    render() {
        return (
            <div>
                <QuestionForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { addQuestion }
)(QuestionAdd);
