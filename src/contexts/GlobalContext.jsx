import { createContext, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    // TASK LIST
    const [taskList, setTaskList] = useState([])

    // FORM
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
        <GlobalContext.Provider value={{
            taskList,

            handleSubmit,
            title,
            setTitle,
            description,
            setDescription,
            category,
            setCategory,
            priority,
            setPriority

        }}>
            {children}
        </GlobalContext.Provider>
    )
}