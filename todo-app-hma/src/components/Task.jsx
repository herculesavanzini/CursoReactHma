import React from 'react'

function Task({task, onToggleDone, onDelete, onEdit}) {
  return (
    <div className={`task ${task.done ? 'done' : ''}`}>
      <span className={`circle-task ${task.done ? 'circle-done' : ''}`} onClick={() => onToggleDone()}></span>
      <span className="task-text" onClick={onToggleDone}>
        {task.done?<s>{task.text}</s>:task.text}
      </span>
      <span className="actions" >
            <button className="edit-btn" title='Editar'  onClick={() => onEdit()}><i class='bx  bx-pencil-draw'></i></button>
            <button className='delete-btn' title='Excluir' onClick={onDelete}><i class='bx  bx-trash-x'></i> </button>
       </span> 

      
    </div>
  )
}

export default Task
