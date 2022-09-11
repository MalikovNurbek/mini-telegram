import { Avatar, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import { Loader } from 'Components/Loader'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const activeChatClassName = 'rounded-md text-white bg-primary'

const ChatSkeletonCard = () => {
  const skeletonChatList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="h-full mt-4 overflow-auto">
      {
        skeletonChatList.map(item => (
          <div
            className="flex items-center p-2 border-b first:pt-0"
            key={item}
          >
            <SkeletonCircle
              size={12}
            />
            <div className="flex flex-col w-[200px] ml-3">
              <Skeleton className="w-full h-5 mr-2" />
              <Skeleton className="w-full h-3 mt-2" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export const ChatList = ({ user, userChats, chatId }) => {
  const navigate = useNavigate()

  const goToChat = (userId) => navigate(`/chat/${userId}`)

  if (!userChats) return <ChatSkeletonCard />

  if (!userChats.length) {
    return (
      <div className="flex flex-col h-screen">
        <p className="mt-4 text-xl font-bold text-center">Ваш список чатов пуст!</p>
      </div>
    )
  }

  return (
    <div className="mt-4 overflow-auto h-screen">
      {
        userChats.map(({ id, owner, chat_member }) => {
          const { first_name, last_name, username } = user.id === owner.id ? chat_member : owner
          return (
            <div
              className={`flex items-center justify-between pb-2 mb-2 border-b cursor-pointer hover:bg-primary hover:text-white hover:rounded-md last:border-none ${(+chatId === id) && activeChatClassName}`}
              key={id}
              onClick={() => goToChat(id)}
            >
              <div className="flex items-center">
                <Avatar
                  name={`${first_name} ${last_name}`}
                  className="mr-3 my-2"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg">{first_name} {last_name}</h4>
                  <h5 className="text-sm"><strong>{username}</strong></h5>
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}
