import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import CategoryForm from './CategoryForm';

class CategoryAdd extends Component {
    componentDidMount() {}

    onSubmit = formVals => {
        console.log(formVals);
    };

    render() {
        return (
            <Container>
                <h1 className='text-center'>Add new category</h1>
                <CategoryForm onSubmit={this.onSubmit} />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedCategory: state.category.selectedCategory
    };
};

export default connect(
    null,
    { }
)(CategoryAdd);
