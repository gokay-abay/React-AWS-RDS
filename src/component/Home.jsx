import React, { useEffect, useState } from "react"
import { getAll, postProfile } from "../network"
import { Link } from "react-router-dom"

const Home = () => {
  const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState({
    fname: "",
    lname: "",
  })

  // api call to AWS server
  useEffect(() => {
    ;(async () => {
      const result = await getAll()
      setProfiles(result)
    })()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    const res = await postProfile(profile.fname, profile.lname)
    setProfile({ fname: "", lname: "" })
  }

  return (
    <div>
      <h1>Profiles</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          value={profile.fname}
          onChange={(e) => setProfile({ ...profile, fname: e.target.value })}
        />
        <br />
        <input
          type="text"
          value={profile.lname}
          onChange={(e) => setProfile({ ...profile, lname: e.target.value })}
        />
        <input type="submit" value="Create Profile" />
      </form>
      {profiles.map((pro, idx) => {
        return (
          <Link to={`profile/${pro.id}`}>
            <p key={idx}>
              {pro.fname} {pro.lname}{" "}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
