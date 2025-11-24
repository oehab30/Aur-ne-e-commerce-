import React from 'react'
import Darkmode from "../components/common/darkmode"
import { Button } from "@/components/ui/button"

function About() {
  return(
   <>
<Darkmode/>

   <h2 className='font-[Playfair Display]'>ℹ️ About Us Page </h2>
      <Button>Click me</Button>
  </>
  )
}

export default About