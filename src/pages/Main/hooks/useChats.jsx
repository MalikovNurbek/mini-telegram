import { useColorMode } from '@chakra-ui/react'
import { CurrentUser } from 'Components/modules'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Main } from '..'

const useChats = () => {
  const accessToken = localStorage.getItem('access')
  const { chatId } = useParams()

  const navigate = useNavigate()

  const {
    colorMode,
  } = useColorMode()

  const {
    user: currentUser,
  } = CurrentUser.use()

  const [chat, setChat] = React.useState(null)
  const [chatMember, setChatMember] = React.useState()

  const [isLoadingChat, setIsLoadingChat] = React.useState(false)
  const [isLoadingChatMemeber, setIsLoadingChatMember] = React.useState(false)
  const [isLoadingSendMessage, setIsLoadingSendMessage] = React.useState(false)

  const getChat = (accessToken, chatId) => {
    const request = Main.API.getChat(accessToken, chatId)

    setIsLoadingChat(true)

    request
      .then(res => {
        const data = res.data

        setChat(data)
      })
      .finally(() => setIsLoadingChat(false))
  }

  const getUser = (userId) => {
    const request = Main.API.getUser(userId)

    setIsLoadingChatMember(true)

    request
      .then(res => {
        const data = res.data

        setChatMember(data)
      })
      .finally(() => setIsLoadingChatMember(false))
  }

  const sendMessage = (body) => {
    if (!accessToken) return

    const request = Main.API.sendMessage(accessToken, body)

    setIsLoadingSendMessage(true)

    return request
      .then(res => {
        const data = res.data

        getChat(accessToken, data.room)
      })
      .finally(() => setIsLoadingSendMessage(false))
  }

  const deleteChat = () => {
    if (!accessToken) return
    if (!chatId) return

    const request = Main.API.deleteChat(accessToken, chatId)

    request
      .then(() => {
        navigate('/')

        window.location.reload()
      })
  }

  React.useEffect(() => {
    if (!chat) return

    if (!currentUser) return

    const { chat_member, owner } = chat

    const chatMemberId = currentUser.id === owner ? chat_member : owner

    getUser(chatMemberId)
  }, [chat, currentUser])

  React.useEffect(() => {
    if (!accessToken) return

    if (!chatId) return

    getChat(accessToken, chatId)

    const interval = setInterval(() => {
      getChat(accessToken, chatId)
    }, 15000)

    return () => clearInterval(interval)
  }, [chatId])

  return {
    chat,
    chatMember,
    isLoadingChat,
    isLoadingChatMemeber,
    isLoadingSendMessage,
    actions: {
      sendMessage,
      deleteChat,
    },
    currentUser,
    colorMode,
  }
}

export const use = useChats
