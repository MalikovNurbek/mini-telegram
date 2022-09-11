import React from 'react'
import { Main } from '..'
import { Chat } from '../Components/Chat'
import { ChatMemberheader } from '../Components/ChatMemberHeader'
import { MessageInput } from '../Components/MessageInput'

export const ChatPage = () => {
  const {
    chat,
    chatMember,
    isLoadingChat,
    isLoadingChatMemeber,
    actions: {
      sendMessage,
      deleteChat,
    },
    currentUser,
    isLoadingSendMessage,
    colorMode,
  } = Main.Hook.Chats.use()

  return (
    <div className="flex flex-col justify-between h-screen">
      <ChatMemberheader
        chatMember={chatMember}
        isLoadingChatMember={isLoadingChatMemeber}
        deleteChat={deleteChat}
      />
      <Chat
        chat={chat}
        isLoadingChat={isLoadingChat}
        currentUser={currentUser}
        colorMode={colorMode}
      />
      <MessageInput
        sendMessage={sendMessage}
        currentUser={currentUser}
        isLoadingSendMessage={isLoadingSendMessage}
      />
    </div>
  )
}
