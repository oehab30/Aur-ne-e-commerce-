import React, { useEffect } from 'react'
import { useState } from 'react'

function darkmode() => {
cont [mode,Setmode] = useState(false);
    useEffect( () =>{
        if(mode)
        {
            document.body.classList.add('dark')
        }
        document.body.classList.remove('dark')
    },[mode])
return
<>

</>

}

export default darkmode