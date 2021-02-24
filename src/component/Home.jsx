import React, { useEffect, useState } from "react"
import { getAll } from "../network"

const Home = () => {
  const [profiles, setProfiles] = useState([])

  // api call to AWS server
  useEffect(() => {
    ;(async () => {
      const result = await getAll()
      setProfiles(result)
    })()
  }, [])

  return (
    <div>
      {profiles.map((pro, idx) => {
        return (
          <p key={idx}>
            {pro.fname} {pro.lname}{" "}
          </p>
        )
      })}
    </div>
  )
}

export default Home
