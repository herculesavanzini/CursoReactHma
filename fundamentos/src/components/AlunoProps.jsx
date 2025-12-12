import React from 'react'

function AlunoProps({props}){
  return (
    <div>
      <ul>
        <li>Nome: {props.nome}</li>
        <li>Curso: {props.curso}</li>
        <li>Turma: {props.turma}</li>
      </ul>
    </div>
  )
}

export default AlunoProps
