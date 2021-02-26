import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne, updateOne, deleteOne } from "../network"

const ProfileDetail = () => {
  const { id } = useParams()

  const [profile, setProfile] = useState({})
  const [input, setInput] = useState({
    fname: "",
    lname: "",
  })

  useEffect(() => {
    getDataSetState(id)
  }, [id])

  const submit = async (e) => {
    e.preventDefault()
    await updateOne(id, input.fname, input.lname)
    getDataSetState(id)
    setInput({
      fname: "",
      lname: "",
    })
  }

  const getDataSetState = async (id) => {
    const res = await getOne(id)
    setProfile(res[0])
  }

  const handleClick = async () => {
    await deleteOne(id)
  }

  return (
    <div>
      <p>
        {profile.fname} {profile.lname}
      </p>
      <button onClick={handleClick}>Delete Profile</button>
      <h2>Update first and last name</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          value={input.fname}
          onChange={(e) => setInput({ ...input, fname: e.target.value })}
        />
        <input
          type="text"
          value={input.lname}
          onChange={(e) => setInput({ ...input, lname: e.target.value })}
        />
        <input type="submit" value="Update Profile" />
      </form>
    </div>
  )
}

export default ProfileDetail
