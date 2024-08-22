import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_FAKE_STORE_BASE_URL

export const axiosGet = async (url: string) => {
  const data = await axios.get(url)
  return data
}

export const axiosPost = async (url: string, payload: any) => {
  const data = await axios.post(url, payload)
  return data
}

export const axiosDelete = async (url: string) => {
  const data = await axios.delete(url)
  return data
}