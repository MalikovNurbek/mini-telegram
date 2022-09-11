import { Button } from '@chakra-ui/react'
import React from 'react'
import { TbError404 } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { BsArrowReturnLeft } from 'react-icons/bs'

export const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className="flex items-center justify-center h-screen w-full text-center flex-col">
      <TbError404 className="w-32 h-32" />
      <h2 className="text-4xl">Страница не найдена</h2>
      <Button
        rightIcon={<BsArrowReturnLeft />}
        colorScheme="telegram"
        variant="outline"
        className="mt-4"
        onClick={goBack}
      >
        Вернуться назад
      </Button>
    </div>
  )
}
