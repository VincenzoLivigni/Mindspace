import { useState } from "react"

export default function Inbox() {

    const [taskList, setTaskList] = useState([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("seleziona")
    const [priority, setPriority] = useState("bassa")

    function handleSubmit(e) {
        e.preventDefault()

        if (!title.trim() || category === "seleziona") {
            return
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
            category,
            priority
        }

        setTaskList(prev => [...prev, newTask])

        setTitle("")
        setDescription("")
        setCategory("seleziona")
        setPriority("bassa")
    }
    return (
        <>
            <h1>Inbox</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Aggiungi obiettivo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Aggiungi descrizione"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="seleziona">Seleziona</option>
                    <option value="carriera">Carriera</option>
                    <option value="personale">Personale</option>
                    <option value="progetti">Progetti</option>
                    <option value="studio">Studio</option>
                </select>

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="bassa">Bassa</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>

                <button type="submit">Aggiungi</button>
            </form>

            <section>
                {
                    taskList.map((t) => (
                        <div key={t.id}>
                            <div>
                                <h3>{t.title}</h3>
                                <span>{t.description}</span>
                            </div>

                            <div>
                                <div>{t.category}</div>
                                <div>{t.priority}</div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}