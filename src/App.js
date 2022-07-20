import React, { Component } from 'react';

import './App.css';
import TodoList from './containers/todo_list';
import Bar from './containers/addbar';

class App extends Component {
  state = { 
    ListItems : [
      {id:1 , text:"Sample1"},
      {id:2 , text:"Sample2"}
    ]
   }
   handleDelete = (id)=> {
     const ListItems = this.state.ListItems.filter(list => list.id !== id)
     this.setState({ListItems})
   } 
   handleAdd = (text) => {
     console.log('handled',text)
     const items = {id:this.state.ListItems.length+1, text:text}
     const ListItems = [...this.state.ListItems,items]
     console.log(ListItems)
     this.setState({ListItems})
   }
   handleEdit = (list , text) => {
     if (text){
      const ListItems = [...this.state.ListItems];
      const index = ListItems.indexOf(list);
      ListItems[index].text = text;
      this.setState({ListItems});
      console.log('Edited to',text);
     }



   }
  render() { 
    return (
        <>
        <Bar
        onAdd = {this.handleAdd}
        />
        <TodoList
        ListItems = {this.state.ListItems}
        onDelete = {this.handleDelete}
        onEdit = {this.handleEdit}
        />
        </>
    );
  }
}
 
export default App;

