import axios from 'axios'

const baseURL = 'https://nuranov29.pythonanywhere.com'

export const axiosRequiest = axios.create({
  baseURL,
})

function signOutAction() {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')

  window.location.reload()
}

function isFailedAuth() {
  const refreshToken = localStorage.getItem('refresh')

  if (!refreshToken) return signOutAction()

  axios.post(`${baseURL}/api/token/refresh/`, {
    refresh: refreshToken,
  })
    .then(res => {
      const data = res.data

      data.access && localStorage.setItem('access', data.access)
      data.refresh && localStorage.setItem('refresh', data.refresh)

      window.location.reload()
    })
    .catch(signOutAction)
}

axiosRequiest.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response?.status === 401) {
      isFailedAuth()
    }

    return Promise.reject(error)
  },
)
