import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../../redux/slices/tasksSlice";

function Task({ taskData }) {
    const dispatch = useDispatch();
    return (
        <div>
            <input type="checkbox" />
            <Link to={`/tasks/${taskData.id}`}>{
                <i>{taskData.title}</i>
            }</Link>
            <Link to={`/tasks/${taskData.id}/edit`}>
                <button type="submit">Edit</button>
            </Link>
            <Link to={'/'}>
                <button type="button" onClick={() => {
                    dispatch(deleteTask(taskData.id));
                }}>Delete</button>
            </Link>
        </div>
    )
}

export default Task;