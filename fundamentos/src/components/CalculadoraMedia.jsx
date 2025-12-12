import React from 'react'
import { useState } from 'react'
import './CalculadoraMedia.css'


function CalculadoraMedia() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [media, setMedia] = useState(0);

    function calcularMedia() {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        if (!isNaN(n1) && !isNaN(n2)) {
            const m = (n1 + n2) / 2;
            setMedia(m.toFixed(2));
        } else {
            setMedia(0);
        }
    }

  return (
    <div className='calculadora-container'>
        <h2>Calculadora de Media</h2>
        <div className='input-group'>
            <label>Numero 1:
                <input type="number" autoFocus value={numero1} onChange={(e) => setNumero1(e.target.value)} />
            </label>
        </div>
        <div className='input-group'>
            <label>Numero 2:
                <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
            </label>
        </div>
        <button onClick={calcularMedia} className='calcular-button' >Calcular Media</button>
        <h2>Media: {media}</h2>
    </div>
  )
}

export default CalculadoraMedia
