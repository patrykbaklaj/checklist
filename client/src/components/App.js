import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
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
                    <h1>Hello from App</h1>

                    <Route
                        path='/admin/questions/list'
                        component={QuestionList}
                    />
                    <Route
                        path='/admin/questions/new'
                        component={QuestionAdd}
                    />
                    <Route
                        path='/admin/categories/list'
                        component={CategoryList}
                    />
                    <Route
                        path='/admin/category/:id'
                        component={CategoryEdit}
                    />
                    <Route
                        path='/admin/categories/new'
                        component={CategoryAdd}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
