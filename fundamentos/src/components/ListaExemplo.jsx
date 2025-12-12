import { useState } from 'react'

function ListaExemplo() {
    const [itens, setItens] = useState(['Maça', 'Banana', 'Laranja']);
    function removerUltimoItem() {
        //setItens(itens.slice(0, -1));
        setItens((prevItens) => prevItens.slice(0, -1));
    }
  return (
    <div>
      <ul>  
        {itens.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
      </ul>
      <button onClick={removerUltimoItem} >Remover Ultimo Item</button>
    </div>
  )
}

export default ListaExemplo
