/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

export default function FunctionalComponent(props) {
    const [stat1,setStat1] =useState(0);
  return (
    <div>FunctionalComponent {props.test}, the value of state {stat1}</div>
  )
}
