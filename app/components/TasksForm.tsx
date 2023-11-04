'use client'
import { ChangeEvent, FormEvent,  useState } from 'react';
import { createTaskRequest } from '../api/task';

function TasksForm() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        done: false
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => { 
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task);
        const data = await createTaskRequest(task);
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='title'
            placeholder="Nueva tarea" 
            className="w-full p-2 my-2 border-2 border-gray-700 rounded-lg bg-zinc-800 block"
            onChange={handleChange} />
            <textarea 
            placeholder="Descripción"
            name='description'
            className="w-full p-2 my-2 border-2 border-gray-700 rounded-lg bg-zinc-800 block" 
            onChange={handleChange}></textarea>
            <label htmlFor="checkbox">
                <input 
                type="checkbox" 
                className="mr-2"
                onChange={(e) => {
                    setTask({...task, done: !task.done})
                }} />
                Completada
            </label>
            <button 
            type="submit" 
            className="w-full p-2 my-2 bg-blue-500 hover:bg-blue-600"
            >Guardar</button>
        </form>
    </div>
  )
}

export default TasksForm