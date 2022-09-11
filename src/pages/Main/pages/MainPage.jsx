
import React from 'react'
import { Main } from '..'
import { Sidebar } from '../Components/Sidebar'

export const MainPage = () => {
  const {
    colorMode,
  } = Main.Hook.Chats.use()

  return (
    <div className={`flex items-center justify-center w-full h-screen ${colorMode === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <h1 className="text-2xl">Выберите собеседника в меню слева, чтобы начать чат.</h1>
    </div>
  )
}
