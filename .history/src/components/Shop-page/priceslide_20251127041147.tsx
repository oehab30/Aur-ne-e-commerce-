import React from 'react'
import { Slider } from "@/components/ui/slider"
function priceslide() {
  return (

<Slider defaultValue={[33]} max={100} step={1} />

    <div>priceslide</div>
  )
}

export default priceslide