import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaExemplo from './components/ListaExemplo'
import CalculadoraMedia from './components/CalculadoraMedia'
import CalculadoraVolume from './components/CalculadoraVolume'
import Aluno from './components/Aluno'
import AlunoProps from './components/AlunoProps'
import Caixa from './components/Caixa'
import BotaoIncrementar from './components/BotaoIncrementar'


function App() {
  const Alunos = [
    {nome: "João", curso: "Informática", turma: "A"},
    {nome: "Maria", curso: "Administração", turma: "B"},
    {nome: "Maria", curso: "Informática", turma: "A"},
    {nome: "Pedro", curso: "Contabilidade", turma: "C"}
  ]
  const [contador, setContador] = useState(0);
  function incrementarContador(){
    setContador(contador + 1)
  }

  
  
  return (
    <>
    {/**
      <CalculadoraMedia />
      <CalculadoraVolume />
      <ListaExemplo />
      * 
      <Aluno key={index} nome={aluno.nome} curso={aluno.curso} turma={aluno.turma}></Aluno>
      <h2>Alunos por props</h2>
      {Alunos.map((aluno, index) => (
        <AlunoProps key={index} props={aluno}></AlunoProps>
        ))}
        <h2>Alunos por destructuring</h2>
        {Alunos.map((aluno, index) => (
          <Aluno key={index} nome={aluno.nome} curso={aluno.curso} turma={aluno.turma}></Aluno>
          ))}
          
          <h2>Alunos por componente</h2>
          <Aluno nome="João" curso="Informática" turma="A"></Aluno>
          <Aluno nome="Maria" curso="Administração" turma="B"></Aluno>
          <Aluno nome="Pedro" curso="Contabilidade" turma="C"></Aluno>
          <Caixa >
          <h3>Informação importante</h3>
          <p>Este compomente mostra como usar prop <code>children</code></p>
          </Caixa>
          */}
      <h1>Voce clicou {contador} vezes no botao</h1>
      <BotaoIncrementar funcao={incrementarContador} />   
    </>
  )
}

export default App
