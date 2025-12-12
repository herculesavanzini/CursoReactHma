import React, { useState, useEffect } from 'react'
import './Game.css'
import Flag from './Flag'
import Test from './Test'

function Game() {
    //Codigo e nome da bandeiras
    const [flags, setFlags] = useState({});
    //opcoes de bandeiras sorteadas
    // [] lista
    const [options, setOptions] = useState([]);
    //bandeira correta
    const [correctFlag, setCorrectFlag] = useState('');
    //url da bandeira 
    const [flagUrl, setFlagUrl] = useState('');
    //mensagem de acerto ou erro
    const [message, setMessage] = useState('');
    //contador de acertos
    const [correctCount, setCorrectCount] = useState(0);
    //contador de erros
    const [wrongCount, setWrongCount] = useState(0);
    //variavel de controle para desabilitar as opcoes apos a resposta
    //a partir do momento que clicar em resposta coloca para true.
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        fetch('https://flagcdn.com/pt/codes.json')
        //promisse da chamada do fetch  
        //promisse é um metodo assincrono que espera a resposta da api
        //promessa de resposta. nem que seja um erro
            .then(response => response.json())
        //promisse da chamada do response.json  
            .then(data =>  setFlags(data))
            .catch(error => console.error('Erro ao buscar as bandeiras:', error));
    }, []);

    // esse useEffect é executado toda vez que o estado flags muda
    // e so muda na etapa anterior quando chama api
    useEffect(() => {
        if(Object.keys(flags).length > 0) {
          console.log('Bandeiras carregadas:', flags);
          startNewRound();
        }
    }, [flags]);  
    const startNewRound = () => {
      const flagCodes = Object.keys(flags);
      console.log('Codigos de todas as Bandeiras:', flagCodes);
      const selectedCodes = [];
      while (selectedCodes.length < 3) {
        const randomIndex = Math.floor(Math.random() * flagCodes.length);//random sorteia entre 0 e 1    
        const randomCode = flagCodes[randomIndex];
        if (!selectedCodes.includes(randomCode)) {
          selectedCodes.push(randomCode);
        }
      }
      console.log('Bandeiras sorteadas:', selectedCodes);
      const correctIndex = Math.floor(Math.random() * selectedCodes.length);//sorteio do elemento correto
      const correctCode = selectedCodes[correctIndex];
      console.log('Codigo da Bandeira correta:', correctCode);
      const bandeiraCorreta = flags[correctCode];
      console.log('Bandeira correta:', bandeiraCorreta);
      //setFlagUrl('https://flagcdn.com/256x192/'+{correctCode}+'.png');
      const bandeiraUrl = `https://flagcdn.com/256x192/${correctCode}.png`;
      console.log('Bandeira url:', bandeiraUrl);

      setCorrectFlag(bandeiraCorreta);
      setFlagUrl(bandeiraUrl);
      //guardo a opcao correta
      //pega os nomes das bandeiras a partir dos codigos
      //percorre o array 3 vezes carregando as opções a serem exibidas na tela
      setOptions(selectedCodes.map(code => flags[code]));
      //apaga mensagen
      setMessage('');
      //resposta ainda nao foi dada
      setAnswered(false);
    }

    const handleOptionClick = (selectedFlag) => {
      setAnswered(true); //marca que ja respondeu
      if (selectedFlag === correctFlag) {
        setMessage('Acertou!'); 
        setCorrectCount(correctCount + 1); 
      } else {
        setMessage(`Errou!`);
        setWrongCount(wrongCount + 1); 
      }
      //inicia nova rodada apos 2 segundos
      setTimeout(() => {
        startNewRound();
      }, 2000);
    }


  return (
    <div className='game-container'> 
      <h1 className='game-title'>De onde é essa bandeira?</h1>
      <div className="score-container">
        <p className="score correct">
          Acertos: {correctCount}
        </p>
        <p className={message=='Acertou!'?'score correct': message=='Errou!'?'score wrong':''}>{message}</p>
        <p className="score wrong">
          Erros: {wrongCount}
        </p>
      </div>
      {flagUrl ? <Flag flagUrl={flagUrl}/> :'Carregando bandeira...'}
      <div className="options-container">
        {options.map((flag, index) => (
          <button key={index} className={answered && correctFlag === flag ? 'option-button correct' : 'option-button'} 
            onClick={() => handleOptionClick(flag)}>
            {index + 1}) {flag}  
          </button>
        ))} 
      </div>
      
    </div>
  )
}

export default Game
