import axios from "axios"

const url = "https://0az6ku4pol.execute-api.us-west-2.amazonaws.com/prod"

export async function getAll() {
  try {
    const res = await axios.get(`${url}/profile`)
    console.log(res)
  } catch (error) {}
}
