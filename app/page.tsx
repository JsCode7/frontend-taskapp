import TasksForm from "./components/TasksForm"
import TasksList from "./components/TasksList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Tareas por hacer</h1>
        <TasksForm />
        <TasksList />
      </div>
    </main>
  )
}
