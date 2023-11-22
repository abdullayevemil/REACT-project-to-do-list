import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasksSlice";

function AddTaskForm() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        dispatch(addTask({
            id: crypto.randomUUID(),
            title: formData.get('title'),
            description: formData.get('description'),
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title: 
                <input type="text" name="title" />
            </label>
            <label>
                Description: 
                <input type="text" name="description" />
            </label>
            <button type="submit">Add task</button>
        </form>
    )
}

export default AddTaskForm;