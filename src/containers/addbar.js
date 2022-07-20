import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './addbar.css';


class Bar extends Component {
    constructor (props){
        super(props);
        this.state = {text:""}
    }
    
    handleChange = event => {
        this.setState({text:event.target.value});
        
      };
    handleClick = () => {
        this.props.onAdd(this.state.text)
      };
    handleKey = (event) => {
        if (event.keyCode === 13){
            this.handleClick();
        }
    }
    render() { 
        return (
            <div className = 'container2'>
                <input 
                    
                    type='text'  
                    placeholder="Add Todo Item" 
                    className='box'
                    onChange={this.handleChange}
                    onKeyDown = {this.handleKey}
                >
                </input>
                <button onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faPlus} className ='btn'/>
                </button>
            </div>
        );
    }
}
 
export default Bar;