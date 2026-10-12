export default function TaskCard({ task }) {

    return (
        <div>
            <div>
                <h3>{task.title}</h3>
                <span>{task.description}</span>
            </div>

            <div>
                <div>{task.category}</div>
                <div>{task.priority}</div>
            </div>
        </div>
    )
}