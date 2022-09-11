import React from 'react'
import { axiosRequiest } from 'configs'
import { useNavigate } from 'react-router-dom'

const getCurrentUser = (accessToken) => {
  return axiosRequiest.get('/current-user/', {
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  })
}

const getAllUsersRequest = () => {
  return axiosRequiest.get('/users/')
}

const useUser = () => {
  const accessToken = localStorage.getItem('access')
  const navigate = useNavigate()

  const [user, setUser] = React.useState(null)
  const [userChats, setUserChats] = React.useState(null)

  const get = (accessToken) => {
    const request = getCurrentUser(accessToken)

    request
      .then(res => {
        const currentUser = res.data

        if (!currentUser) return

        setUser(currentUser)

        return currentUser
      })
      .then(currentUser => {
        const request = getAllUsersRequest()

        request
          .then(res => {
            const allUsers = res.data

            if (!allUsers) return

            const currentUserChats = [...currentUser.chats, ...currentUser.user_create_chats]

            const newCurrentUserChats = currentUserChats.map(userChat => {
              return {
                ...userChat,
                owner: allUsers.find(user => user.id === userChat.owner),
                chat_member: allUsers.find(user => user.id === userChat.chat_member),
              }
            })
            setUserChats(newCurrentUserChats)
          })
      })
  }

  const logout = () => {
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
    navigate('/auth/signin')
  }

  React.useEffect(() => {
    if (!accessToken) return

    get(accessToken)
  }, [])

  return {
    user,
    userChats,
    actions: {
      logout,
      get,
    },
  }
}


const use = useUser

export const CurrentUser = {
  use,
}
