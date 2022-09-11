import { Skeleton } from '@chakra-ui/react'
import { lastActivityDate, skeletonRandomMessage } from 'helpers'
import React, { useRef } from 'react'

const EmptyMessage = ({ colorMode }) => {
  return (
    <div className={`flex items-center justify-center w-full h-screen ${colorMode === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      {/* <p className="text-2xl">Чат с данным собеседником пуст!</p> */}
      <p className="text-3xl mt-4 text-white">Будь мужиком! Напиши первым!</p>
    </div>
  )
}

const ChatSkeleton = (colorMode) => {
  return (
    <div
      className={`h-full p-3 overflow-auto ${colorMode === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="flex flex-col">
        {
          skeletonRandomMessage(15)
            .map((number, index) => (
              <Skeleton
                key={index}
                className={`w-1/2 mb3 h-10 ${(number % 2 === 0) && 'ml-auto'}`}
              />
            ))
        }
      </div>
    </div>
  )
}

export const Chat = ({
  chat,
  isLoadingChat,
  currentUser,
  colorMode,
}) => {
  const scrollBottom = useRef()

  scrollBottom.current?.scrollIntoView() // { behavior: 'smooth' } можно убрать

  if (isLoadingChat || !chat || !currentUser) return <ChatSkeleton colorMode={colorMode}/>

  if (!chat.messages.length) return <EmptyMessage colorMode={colorMode} />

  return (
    <div
      className={`h-full p-3 overflow-auto ${colorMode === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      {
        chat.messages.map(mess => (
          <div
            key={mess.id}
            className={`w-1/2 p-3 mb-1 text-white rounded-md  ${(mess.user === currentUser?.id) ? 'ml-auto bg-primary' : 'bg-[#0088cc]'}`}
          >
            <p>{mess.text}</p>
            <p className="text-xs text-gray-400">Отправлено: {lastActivityDate(mess.created)}</p>
          </div>
        ))
      }
      <div ref={scrollBottom}/>
    </div>
  )
}
