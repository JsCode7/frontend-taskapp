import { Task } from "../interfaces/task.interface";

const API = 'http://localhost:3000/api';

export const createTaskRequest = async (task: Task) => {
    const response = await fetch(`${API}/tasks`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    return response.json();
};