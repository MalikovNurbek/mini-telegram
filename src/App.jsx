import { NotFound } from 'Components/NotFound'
import { MainLayout } from 'pages/Main/MainLayout'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthLayout } from './pages/Auth/AuthLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
