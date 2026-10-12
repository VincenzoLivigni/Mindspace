import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import TaskCard from "../components/TaskCard"
import TaskForm from "../components/TaskForm"

export default function Inbox() {

    const {
        taskList,

        handleSubmit,
        title,
        setTitle,
        description,
        setDescription,
        category,
        setCategory,
        priority,
        setPriority } = useContext(GlobalContext)

    return (
        <>
            <h1>Inbox</h1>

            <TaskForm
                handleSubmit={handleSubmit}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                category={category}
                setCategory={setCategory}
                priority={priority}
                setPriority={setPriority} />

            <section>
                {
                    taskList.map((t) => (
                        <TaskCard
                            key={t.id}
                            task={t}
                        />
                    ))
                }
            </section>
        </>
    )
}