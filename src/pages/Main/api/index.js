import { axiosRequiest } from 'configs'

export const getUsers = (accessToken) => {
  return axiosRequiest.get('users-another/', {
    Authorization: `JWT ${accessToken}`,
  })
}

export const createChat = (accessToken, chatMemberId) => {
  return axiosRequiest.post(
    '/chats/',
    {
      chat_member: String(chatMemberId),
    },
    {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    },
  )
}

export const getChat = (accessToken, chatId) => {
  return axiosRequiest.get(`/chats/${chatId}/`, {
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  })
}

export const getUser = (userId) => {
  return axiosRequiest.get(`/users/${userId}/`)
}

export const sendMessage = (accessToken, body) => {
  return axiosRequiest.post('/message/', body, {
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  },
  )
}

export const editUser = (userId, data) => {
  return axiosRequiest.put(`/users/${userId}/`, data)
}

export const deleteChat = (accessToken, chatId) => {
  return axiosRequiest.delete(
    `/chats/${chatId}`, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    })
}
