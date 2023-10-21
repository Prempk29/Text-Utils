import React from 'react'
import Navbarr from './Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
const Changedvalue = (event) => {
  useState(event.target.value)
}

function Scree() {
  const [Text, setText] = useState("Please Enter The Text Here")
  const [color, setcolor] = useState("primary")
  const changecolor = () => {
    if (color === "black") {
      setcolor("primary")
      document.title = "Textutils-light"
      setInterval(() => {
        document.title = "Textutils-☃️"
      }, 3000)
    }
    else {
      setcolor("black")
      document.title = "Textutils-dark"
    }
  }
  return (
    <>
      <Navbarr title="Text-Utils" color={color} changecolor={changecolor} />
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default Scree
