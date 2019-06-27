import React, { Component } from 'react';
import QuestionAdd from './admin/QuestionAdd';
import QuestionList from './admin/QuestionList';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello from App</h1>
                <QuestionList />
                <QuestionAdd />
            </div>
        );
    }
}

export default App;
