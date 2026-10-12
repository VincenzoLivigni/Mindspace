export default function TaskForm({
    handleSubmit,

    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    priority,
    setPriority,
}) {

    return (
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
    )
}