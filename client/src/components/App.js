import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import QuestionAdd from './admin/QuestionAdd';
import QuestionList from './admin/QuestionList';

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
                        path='/admin/questions/add'
                        component={QuestionAdd}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
