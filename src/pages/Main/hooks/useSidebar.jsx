import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Main } from '..'

const useSidebar = ({
  getCurrentUser,
}) => {
  const accessToken = localStorage.getItem('access')
  const navigate = useNavigate()

  const location = useLocation()

  const [chatId, setChatId] = React.useState(null)

  const [users, setUsers] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoadingCreateChat, setIsLoadingCreateChat] = React.useState(false)

  const getUsers = (accessToken) => {
    const request = Main.API.getUsers(accessToken)

    setIsLoading(true)

    request
      .then(res => {
        const data = res.data

        if (!data) return
        setUsers(data)
      })
      .finally(() => setIsLoading(false))
  }

  const createChat = (chatMemberId) => {
    if (!accessToken) return

    const request = Main.API.createChat(accessToken, chatMemberId)

    setIsLoadingCreateChat(true)

    request
      .then(res => {
        const response = res.data
        getCurrentUser(accessToken)
        getUsers(accessToken)
        return response
      })
      .then(res => {
        navigate(`/chat/${res.id}`)
      })
      .finally(() => setIsLoadingCreateChat(false))
  }

  React.useEffect(() => {
    if (!accessToken) return
    getUsers(accessToken)
  }, [])


  React.useEffect(() => {
    if (!location.pathname) return

    if (!location.pathname.substring(6)) return

    setChatId(location.pathname.substring(6))
  }, [location.pathname])

  return {
    users,
    chatId,
    isLoading,
    isLoadingCreateChat,
    actions: {
      createChat,
    },
  }
}

export const use = useSidebar
