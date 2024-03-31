import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhots:3033',
})
