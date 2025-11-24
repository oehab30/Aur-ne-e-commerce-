import React, { useEffect } from 'react'
import { useState } from 'react'

function darkmode() => {
  const [mode,Setmode] = useState(false)
  useEffect(( => {
    if(mode) {
        document.body.classList.add('da')
    }
  }))
    return (
<button>mode</button>
  )
}

export default darkmode