import Todo from './Todo'

const TodoList = () => {
    return (
        <div style={{pading: '5 px 0'}}>
            <p>Todo List</p>
            <Todo />
            <Todo done />
            <Todo />
            <Todo done />
            <Todo />
            <Todo done />
        </div>
    )
};

export default TodoList;