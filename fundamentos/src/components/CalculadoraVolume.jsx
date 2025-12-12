import React from 'react'
import { useState } from 'react'
import './CalculadoraVolume.css'


function CalculadoraVolume() {
    const [comprometimento, setComprimento] = useState('');
    const [largura, setLargura] = useState('');
    const [profundidade, setProfundidade] = useState('');
    const [volume, setVolume] = useState(0);

    function calcularVolume() {
        const n1 = parseFloat(comprometimento);
        const n2 = parseFloat(largura);
        const n3 = parseFloat(profundidade);
        if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
            const v = n1 * n2 *n3;
            setVolume(v.toFixed(2));
        } else {
            setVolume(0)
        }
    }

  return (
    <div className='calculadora-container'>
        <h2>Calculadora de Volume</h2>
        <div className='input-group'>
            <label>Comprimento:
                <input type="number" autoFocus value={comprometimento} onChange={(e) => setComprimento(e.target.value)} />
            </label>
        </div>
        <div className='input-group'>
            <label>Largura:
                <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} />
            </label>
        </div>
        <div className='input-group'>
            <label>Profundidade:
                <input type="number" value={profundidade} onChange={(e) => setProfundidade(e.target.value)} />
            </label>
        </div>
        <button onClick={calcularVolume} className='calcular-button' >Calcular Volume</button>
        <h2>Volume: {volume}</h2>
    </div>
  )
}

export default CalculadoraVolume
