import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Todo.css'

class Todo extends Component {
    state = {
        done: false
    }

    render() {
        return (
            <div className={`todo-container ${this.state.done ? 'dim-completed' : ''}`}>
                <p className="list-item">Tarea por hacer</p>
                <button onClick={() => this.setState({done: true})} className="delete">Borrar</button>
            </div>
        )
    }
};

Todo.PropTypes  = {
    done: PropTypes.bool
}

export default Todo;



