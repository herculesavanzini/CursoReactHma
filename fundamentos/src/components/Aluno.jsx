import React from 'react'

function Aluno({nome, curso, turma}){
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Curso: {curso}</li>
        <li>Turma: {turma}</li>
      </ul>
    </div>
  )
}

export default Aluno
