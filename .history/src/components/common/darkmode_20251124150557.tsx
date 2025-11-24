import React, { useEffect } from 'react'
import { useState } from 'react'

function darkmode() => {
    useEffect( () =>{
        if(mode)
        {
            document.body.classList.add('dark')
        }
        document.body.classList.remove('dark')
    },[])
return
<>

</>

}

export default darkmode