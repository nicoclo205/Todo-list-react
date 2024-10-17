const TodoItem = ({ task, onDelete }) => {
    return (
        <li>
            {task}
            <button onClick={onDelete} className="bg-red-500 rounded-md text-white p-1 m-4">Delete</button>
            <br />
        </li>
    )};

export default TodoItem;