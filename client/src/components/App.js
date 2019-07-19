import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Navbar from './Navbar';
import QuestionAdd from './admin/QuestionAdd';
import QuestionList from './admin/QuestionList';
import CategoryList from './admin/CategoryList';
import CategoryEdit from './admin/CategoryEdit';
import CategoryAdd from './admin/CategoryAdd';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <h1>Hello from App</h1>

                    <Route
                        exact
                        path='/admin/questions/list'
                        component={QuestionList}
                    />
                    <Route
                        exact
                        path='/admin/questions/new'
                        component={QuestionAdd}
                    />
                    <Route
                        exact
                        path='/admin/categories/list'
                        component={CategoryList}
                    />
                    <Route
                        exact
                        path='/admin/category/:id'
                        component={CategoryEdit}
                    />
                    <Route
                        exact
                        path='/admin/categories/new'
                        component={CategoryAdd}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
