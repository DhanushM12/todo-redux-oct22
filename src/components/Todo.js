import React, { Component } from 'react'
import { deleteTask } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    return (
      <div>
        <td>{this.props.task}</td>
        <td><button onClick={() => this.props.deleteTask(this.props.id)}>Delete</button></td>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTask}, dispatch);
}

export default connect(()=> {}, mapDispatchToProps)(Todo);