import React, { useState, useEffect } from 'react'
import './Game.css'
import Flag from './Flag'
import Test from './Test'

function Game() {
    //Codigo e nome da bandeiras
    const [flags, setFlags] = useState({});
    //opcoes de bandeiras sorteadas
    const [options, setOptions] = useState([]);
    //bandeira correta
    const [coorectFlag, setCorrectFlag] = useState('');
    //url da bandeira 
    const [flagUrl, setFlagUrl] = useState('');
    //mensagem de acerto ou erro
    const [message, setMessage] = useState('');
    //contador de acertos
    const [correctCount, setCorrectCount] = useState(0);
    //contador de erros
    const [wrongCount, setWrongCount] = useState(0);
    //varavel de controle para desabilitar as opcoes apos a resposta
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        fetch('https://flagcdn.com/pt/codes.json')
        //promisse da chamada do fetch  
            .then(response => response.json())
        //promisse da chamada do response.json  
            .then(data =>  setFlags(data))
            .catch(error => console.error('Erro ao buscar as bandeiras:', error));
    }, []);

    // esse useEffect é executado toda vez que o estado flags muda
    // e so muda na etapa anterior quando chama api
    useEffect(() => {
        console.log(flags);
    }, [flags]);       


  return (
    <div> 
      <Flag />
    </div>
  )
}

export default Game
