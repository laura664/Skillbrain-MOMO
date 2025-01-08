import TaskCard from "./task-card/TaskCard";
import "./TaskViewer.css";

export default function TaskViewer() {
    const data = [
        {
            id: "T-1",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-2",
            name: "12 Create a Design System for Enum Workspace.",
            status: "In Progress",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-3",
            name: "Create a Design System for Enum Workspace.",
            status: "Completed",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-4",
            name: "Create a Design System for Enum Workspace.",
            status: "Done",
            dueDate: new Date(2022, 5, 23),
        },

    ];
    return (
        <div className="task-viewer-container">
            Task Viewer
            <TaskCard
                id={data[0].id}
                status={data[0].status}
                name={data[0].name}
                dueDate={data[0].dueDate}
            />
            <TaskCard
                id={data[1].id}
                status={data[1].status}
                name={data[1].name}
                dueDate={data[1].dueDate}
            />
            <TaskCard
                id={data[2].id}
                status={data[2].status}
                name={data[2].name}
                dueDate={data[2].dueDate}
            />
            <TaskCard
                id={data[3].id}
                status={data[3].status}
                name={data[3].name}
                dueDate={data[3].dueDate}
            />

        </div>
    )
}