import React, { useState } from "react";
import * as tf from '@tensorflow/tfjs';


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const simpleModel = (text) => {
    // A mock "model" which is just a rule-based system for demo
    const words = text.toLowerCase().split(' ');
    const work_related = ['work', 'job', 'project'];
    
    for (let word of words) {
      if (work_related.includes(word)) return 'Work';
    }
    return 'Personal';
  };

  const addTask = () => {
    const category = simpleModel(task);
    setTasks([...tasks, { task, category }]);
    setTask("");
  };

  return (
    <div className="App p-10 ">
      <h1 className="text-4xl mb-5 text-center text-blue-300">AI Organizational App</h1>
      <div className="flex gap-4 mb-7 justify-center items-center">
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ul className="list-inside list-disc text-center">
        {tasks.map((t, index) => (
          <li key={index} className="mb-2">
            {t.task} - <strong className="font-semibold">{t.category}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;







