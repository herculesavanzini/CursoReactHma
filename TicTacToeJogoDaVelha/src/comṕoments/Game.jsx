import { useState } from 'react'

import Square from "./Square"
import './Game.css'

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  {
      /**
       * 
       * 
          <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
          <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
          <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
          <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
          <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
          <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
          <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
          <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
          <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
       */
  }
function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [wonX, setWonX] = useState(0);
    const [wonO, setWonO] = useState(0);
    let newRoude = false;

    let status;
    const winner = calculateWinner(squares);
    if(winner){
        status = 'Vencedor: ' + winner;
        newRoude = true;
        console.log('Vencedor: ' + winner);
    }else if(!squares.includes(null)){
        status = 'Empate';
        newRoude = true;
    }else{    
        status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
        newRoude = false;
    }


    function handleSquareClick(i){    
        console.log('Clicou na casa: ' + i);
        const currentWinner = calculateWinner(squares);
        if(squares[i] || currentWinner){
            console.log('Casa ocupada ou jogo encerrado');
            return;
        }
        console.log('Jogo continua');
        const nextSquares = [...squares];
        if(xIsNext){
            nextSquares[i] = 'X';
        }else{
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
        console.log(nextSquares);

        const updatedWinner = calculateWinner(nextSquares);
        if(updatedWinner === 'X'){
            setWonX(wonX + 1);
        }else if(updatedWinner === 'O'){
            setWonO(wonO + 1);
        }
    }
    function resetGame(){
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }


  return (
    <div className="game">
        <h1 className="title">Jogo da Velha</h1>
        <div className='score'>X: {wonX} ## O: {wonO}</div>
        <div className={winner ? 'status winner' : 'status'}>{status}</div>
        <div className="board">
            <div className="row">
                {[0,1,2].map((i) => (
                    <Square key={i} value={squares[i]} onClick={() => handleSquareClick(i)} />
                ))}
            </div>
            <div className="row">
                {[3,4,5].map((i) => (
                    <Square key={i} value={squares[i]} onClick={() => handleSquareClick(i)} />
                ))}
            </div>
            <div className="row">
                {[6,7,8].map((i) => (
                    <Square key={i} value={squares[i]} onClick={() => handleSquareClick(i)} />
                ))}
            </div>
        </div>
        {newRoude &&<button className="reset" onClick={resetGame}>Novo Jogo </button> }

    </div>
  )
}

export default Game
