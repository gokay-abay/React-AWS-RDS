import React, { useEffect, useState } from "react"
import { getAll } from "../network"

const Home = () => {
  // make an api call
  useEffect(() => {
    getAll()
  }, [])

  // save the data in state variable

  // display the data on screen

  return <div>Hello</div>
}

export default Home
