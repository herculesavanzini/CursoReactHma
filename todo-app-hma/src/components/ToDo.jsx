import React, { useEffect, useRef, useState } from 'react'
import Task from './Task.jsx'
import './ToDo.css'


function ToDo() {
    const testeTask = { "id":1, "text": "Tarefa de exemplo","done": true};
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState(false); //Status da aplicação Editando
    const [editId, setEditId] = useState(null); // Armazenar o ID da tarefa editada
    const [editText, setEditText] = useState(''); //Armazenar o texto da tarefa editada

    const inputAddRef = useRef(null);
    const inputEditRef = useRef(null);

    useEffect(() => {
         //aqui vai a chamada para api para buscar as tarefas
         fetch('http://localhost:3001/tasks')
         .then(response => response.json())
         .then(data => setTasks(data))
         .catch(error => console.error('Error fetching tasks:', error));
         if(inputAddRef.current){   
            inputAddRef.current.focus();
         }
    }, []);

    useEffect(() => {
      if(inputEditRef.current){
        inputEditRef.current.focus();
      }
    }, [editTask]);

    const handleAddTask = () => {
      if (newTask.trim() === '') return;

      const taskData = {
        text: newTask,
        done: false,
      };

      fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })
      .then(response => response.json())
      .then(addedTask => {
        setTasks([...tasks, addedTask]);
        setNewTask('');
      })
      .catch(error => console.error('Error adding task:', error));
      if(inputAddRef.current){   
        inputAddRef.current.focus();
      }
    };  

    const handleEditTask = (id, currentText) => {
      setEditTask(true);
      setEditText(currentText);
      setEditId(id);
    }

    const handleDeleteTask = (id) => {
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => console.error('Error delete task:', error));
    };

    const handleCheckTaskDone = (id, done) => {
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({done: !done}),
      })
      .then(response => response.json())
      .then(() => {
        setTasks(tasks.map(task => task.id === id ? {...task, done: !done} : task));
      })
      .catch(error => console.error('Error updating task:', error));
    };
    const handleEditSave = () => {
      if (editText.trim() === '') return;

      fetch(`http://localhost:3001/tasks/${editId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: editText}),
      })
      .then(response => response.json())
      .then(() => {
        setTasks(tasks.map(task => task.id === editId ? {...task, text: editText} : task));
        setEditTask(false);
        setEditId(null);
        setEditText('');
      })
      .catch(error => console.error('Error updating task:', error));
    };

    const doneCount = tasks.filter(task => task.done).length;

  return (
    <div className='container'>
      <header>
        <input type='checkbox' checked readOnly />
        <span className='logo'>ToDo App HMA</span>
      </header>
      <div className='status-card'>
        <div className="status-title">Concluídas</div>
        <div className="status-sub">Continu assim, não desista!</div>
        <div className="circle">
          <b>{doneCount}/{tasks.length}</b>
        </div>
      </div>
      {!editTask ? 
      <div className="add-task">
        <label >Digite sua nova tarefa</label>
        <div className="input-row">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Qual tarefa você vai fazer hoje?"  
            ref={inputAddRef}
          />
          <button onClick={handleAddTask}><i className='bx  bx-plus-circle'></i> </button>
        </div>
      </div>
      :
      <div className="edit-task">
        <label>Edite sua nova tarefa</label>
        <div className="input-row">
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            ref={inputEditRef}  
          />
          <button onClick={handleEditSave}><i className ='bx  bx-checks'></i>  </button>
        </div>
      </div>
}
      <div>
        {tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={() => handleDeleteTask(task.id)}
            onToggleDone={() => handleCheckTaskDone(task.id, task.done)}
            onEdit={() => handleEditTask(task.id, task.text)}
          />
        ))} 
      </div>
    </div>
  )
}

export default ToDo
