import '../App.css';

import React, { Component } from 'react'
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

