import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}from 'react-redux'
import TodoList from './TodoList';
import RRTodoList from './ReactReduxToDoList'
import {store} from './store'
const App = (
    <Provider store={store}>

        <TodoList />  { /*未使用react-redux*/ }

        <RRTodoList/> { /*使用react-redux*/ }
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

