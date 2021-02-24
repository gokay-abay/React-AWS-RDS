import React, { useEffect, useState } from "react"
import { getAll } from "../network"

const Home = () => {
  const [profiles, setProfiles] = useState([])

  // make an api call
  useEffect(() => {
    ;(async () => {
      const result = await getAll()
      setProfiles(result)
    })()
  }, [])

  // save the data in state variable

  // display the data on screen

  return (
    <div>
      {profiles.map((pro) => {
        return (
          <p>
            {pro.fname} {pro.lname}{" "}
          </p>
        )
      })}
    </div>
  )
}

export default Home
