import { Button } from '@chakra-ui/react'
import React from 'react'
import { BiLogOutCircle } from 'react-icons/bi'

export const SignOut = ({ logout }) => {
  return (
    <div className="flex flex-col mt-4">
      <Button
        rightIcon={<BiLogOutCircle/>}
        colorScheme="telegram"
        variant="outline"
        onClick={logout}
      >
        Выйти
      </Button>
    </div>
  )
}
