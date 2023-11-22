import { Form, redirect, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../redux/slices/tasksSlice";
import store from '../redux/store';

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    updates.id = params.taskId;
    store.dispatch(updateTask(updates));
    return redirect(`/tasks/${params.taskId}`);
}

function EditTask() {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const tasks = useSelector(state => state.tasksReducer);
    const selectedTask = tasks.find(task => task.id === taskId);
    if (selectedTask === undefined) return;
    return (
        <>
            <Form method="post" id="contact-form">
                <label>
                    Title: <input name="title" type="text" defaultValue={selectedTask.title} />
                </label>
                <label>
                    Description: <input name="description" type="text" defaultValue={selectedTask.description} />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={() => {
                        navigate(-1);
                    }}>Cancel</button>
            </Form>
        </>
    );
}

export default EditTask;