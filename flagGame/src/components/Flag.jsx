import React from 'react'
import './Flag.css'
//url vem por props
function Flag({flagUrl}) {
  return (
      //somenete vai exibir a imagem somente depois de receber o url
    <div>
      { flagUrl && <img src="{flagUrl}" alt="Bandeira" className='flag'/>}
      <p>
        { flagUrl}
      </p>
    </div>
  )
}

export default Flag


