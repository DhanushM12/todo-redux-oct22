import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

 class TodoList extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
          <tr>
            {
              this.props.tasks.map((task, index) => 
                <Todo key={index} task={task} />
              )
            }
          </tr>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}


export default connect(mapStateToProps)(TodoList);