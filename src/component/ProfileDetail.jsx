import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne } from "../network"

const ProfileDetail = () => {
  const { id } = useParams()

  const [profile, setProfile] = useState()

  useEffect(() => {
    ;(async () => {
      const res = await getOne(id)
      console.log(res)
      setProfile(res[0])
    })()
  }, [])

  return (
    <div>
      <p>
        {profile?.fname} {profile?.lname}
      </p>
    </div>
  )
}

export default ProfileDetail
