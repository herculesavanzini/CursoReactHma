import React, { useEffect, useState } from 'react'

function Test() {
    const [flags, setFlags] = useState({});

    useEffect(() => {
        fetch('https://flagcdn.com/pt/codes.json')  
            .then(response => response.json())
            .then(data =>  setFlags(data));
    }, []);  
  return (
    <div>
      <ul>  
        /** Object.entries() transforma o objeto em um array 
         */
        {Object.entries(flags).map(([code, name]) => (
          <li key={code}>
            {name} - {code.toUpperCase()}
            <img 
              src={`https://flagcdn.com/w40/${code}.png`} 
              alt={`Bandeira de ${name}`} 
              style={{ marginLeft: '10px', verticalAlign: 'middle' }}
            />
          </li>
        ))}  
      </ul>
    </div>
  )
}

export default Test
