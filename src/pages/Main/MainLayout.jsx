import { NoAccess } from 'Components/NoAccess'
import { NotFound } from 'Components/NotFound'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './Components/Sidebar'
import { ChatPage } from './pages/ChatPage'
import { MainPage } from './pages/MainPage'
import { SettingsPage } from './pages/SettingsPage'

export const MainLayout = () => {
  const accessToken = localStorage.getItem('access')

  if (!accessToken) return <NoAccess/>

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/chat/:chatId" element={<ChatPage />} />
          <Route path="*" element={<NotFound/> } />
          <Route path="/settings" element={<SettingsPage /> } />
        </Routes>
      </div>
    </div>
  )
}
