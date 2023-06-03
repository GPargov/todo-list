import './ToDoItem.styles.css';
import { Component } from 'react';

class ToDoItem extends Component{

    render(){
        const {item, deleteItem, id} = this.props;
        return (
            <li onClick={() => {
                deleteItem(id);
            }}>{item}</li>
        );
    }
}



export default ToDoItem;