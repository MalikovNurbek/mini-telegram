import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcLock } from 'react-icons/fc'
import { Button } from '@chakra-ui/react'
import { BsArrowReturnLeft } from 'react-icons/bs'

export const NoAccess = () => {
  const navigate = useNavigate()

  const goToAuth = () => navigate('/auth/signin')
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center">
      <FcLock className="w-32 h-32"/>
      <h2 className="text-4xl">Вы не авторизованы</h2>
      <Button
        rightIcon={<BsArrowReturnLeft/>}
        colorScheme="telegram"
        variant="outline"
        className="mt-4"
        onClick={goToAuth}
      >
        Авторизоваться
      </Button>
    </div>
  )
}
