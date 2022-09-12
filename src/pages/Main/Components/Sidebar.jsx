import { CurrentUser } from 'Components/modules'
import React from 'react'
import { Main } from '..'
import { ChatList } from './ChatList'
import { CurrentUserCard } from './CurrentUserCard'
import { SearchChat } from './SearchChat'
import { SignOut } from './SignOut'
import { UsersModal } from './UsersModal'

export const Sidebar = () => {
  const {
    user,
    userChats,
    sortedUserChats,
    actions: {
      logout,
      get: getCurrentUser,
      onSearch,
    },
  } = CurrentUser.use()

  const {
    users,
    chatId,
    isLoading,
    isLoadingCreateChat,
    actions: {
      createChat,
    },
  } = Main.Hook.Sidebar.use({
    getCurrentUser,
  })


  return (
    <div className="h-screen w-[450px] border-r p-5 flex flex-col">

      <CurrentUserCard user={user}/>

      <div className="flex items-center"
      >
        <SearchChat onSearch={onSearch}/>
        <UsersModal
          isLoading={isLoading}
          users={users}
          userChats={userChats}
          createChat={createChat}
          isLoadingCreateChat={isLoadingCreateChat}
        />
      </div>

      <ChatList
        user={user}
        userChats={sortedUserChats ? sortedUserChats : userChats}
        chatId={chatId}
      />
      <SignOut logout={logout}/>
    </div>
  )
}
