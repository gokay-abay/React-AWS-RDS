import axios from "axios"

const url = "https://0az6ku4pol.execute-api.us-west-2.amazonaws.com/prod"

export async function getAll() {
  try {
    const res = await axios.get(`${url}/profile`)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export async function postProfile(fname, lname) {
  try {
    const res = await axios.post(`${url}/profile`, {
      fname: fname,
      lname: lname,
    })
    return res.data
  } catch (error) {
    console.error(error)
  }
}
