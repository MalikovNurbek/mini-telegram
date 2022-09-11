import { axiosRequiest } from 'configs'


export const signUp = (body) => {
  return axiosRequiest.post('/users/', body)
}

export const signIn = (body) => {
  return axiosRequiest.post('/api/token/', body)
}
