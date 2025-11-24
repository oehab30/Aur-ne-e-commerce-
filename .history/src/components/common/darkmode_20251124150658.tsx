import React, { useEffect } from 'react'
import { useState } from 'react'

function darkmode() => {
const [mode,Setmode] = useState(false);
    useEffect( () =>{
        if(mode)
        {
            document.body.classList.add('dark')
        }
        document.body.classList.remove('dark')
    },[mode])
return
<>
<button></button>
</>

}

export default darkmode