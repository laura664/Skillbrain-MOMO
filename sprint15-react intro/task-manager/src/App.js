import "./App.css";
import TaskViewer from "./components/TaskViewer";


function App() {
  return (
    <div className="app">
      <p>Task Manager</p>
      <TaskViewer></TaskViewer>
    </div>
  );
}

export default App;