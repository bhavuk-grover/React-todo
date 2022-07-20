import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './list.css'

class List extends Component {
    state = { 
        text : "",
        editfield: true
     } 
     handleChange = event => {
        this.setState({text:event.target.value});
      };
     handleEditB = () =>{
         const editfield = false;
         this.setState({editfield})
     }
     handleKey = (event) => {
        if (event.keyCode === 13){
            this.props.onEdit(this.props.list, this.state.text);
            const editfield = true;
            this.setState({editfield})
        }
    }
    render() { 
        return (
            <div className='container'>
                <button onClick={()=>this.props.onDelete(this.props.list.id)}>
                    <FontAwesomeIcon icon={faTrashCan} className ='btn' />
                </button>
                <button onClick={this.handleEditB}>
                    <FontAwesomeIcon icon={faEdit} className ='btn' />
                </button>
                
                {this.state.editfield && <span>{this.props.list.text}</span>}
                {!this.state.editfield && <input 
                                                defaultValue= {this.props.list.text}
                                                onChange = {this.handleChange}
                                                onKeyDown = {this.handleKey}
                                                />}

            </div>
        );
    }
}
 
export default List;