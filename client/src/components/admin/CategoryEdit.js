import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categoriesAction';
import { addCategory } from '../../actions/categoriesAction';

import CategoryForm from './CategoryForm';

class CategoryEdit extends Component {
    componentDidMount() {
        // get category ID from url
        const categoryId = this.props.match.params.id;
        // fetch category by selected id
        this.props.fetchCategory(categoryId);
    }

    renderCategoryTitle = () => {
        if (this.props.selectedCategory)
            return (
                <h2 className='text-center'>
                    {this.props.selectedCategory.name}
                </h2>
            );
    };

    onSubmit = formVals => {
        // console.log(formVals);
        this.props.addCategory(formVals);
    };

    render() {
        if (this.props.selectedCategory) {
            return (
                <Container>
                    <h1 className='text-center'>Edit Category:</h1>
                    {this.renderCategoryTitle()}
                    <CategoryForm
                        onSubmit={this.onSubmit}
                        initialValues={{
                            categoryName: this.props.selectedCategory.name,
                            categoryID: this.props.selectedCategory.appID
                        }}
                    />
                </Container>
            );
        } else {
            return <div>Loading ...</div>;
        }
    }
}

const mapStateToProps = state => {
    return {
        selectedCategory: state.category.selectedCategory
    };
};

export default connect(
    mapStateToProps,
    { fetchCategory, addCategory }
)(CategoryEdit);
