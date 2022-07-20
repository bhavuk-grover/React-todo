import React, { Component } from 'react';
import List from './list';

class TodoList extends Component {
    state = { 
        lists:[]
     } 
     handleEdit = (list , text) => {
        this.props.onEdit(list ,text)
      }
    render() { 
        return (
            <>
            {
                this.props.ListItems.map(
                    list => <List
                    key = {list.id}
                    list = {list}
                    onDelete = {this.props.onDelete}
                    onEdit = {this.handleEdit}
                    />
                )
            }
            </>
        );
    }
}
 
export default TodoList;