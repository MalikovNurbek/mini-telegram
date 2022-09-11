import { useColorMode, useToast } from '@chakra-ui/react'
import { CurrentUser } from 'Components/modules'
import React from 'react'
import { Main } from '..'

const useSettings = () => {
  const [isLoading, setIsLoading] = React.useState(false)

  const toast = useToast()

  const {
    colorMode,
    toggleColorMode,
  } = useColorMode()

  const {
    user: currentUser,
  } = CurrentUser.use()

  const editUser = (userId, data) => {
    const request = Main.API.editUser(userId, data)

    setIsLoading(true)

    request
      .then(() => {
        toast({
          title: 'Редактирование профиля',
          description: 'Успешно обнавлено!',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top',
        })
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
      .catch(err => {
        Object
          .values(err.response.data)
          .forEach(errorList => {
            errorList.forEach(errorItem => {
              toast({
                title: errorItem,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top',
              })
            })
          })
      })
      .finally(() => setIsLoading(false))
  }

  return {
    actions: {
      editUser,
      toggleColorMode,
    },
    currentUser,
    isLoading,
    colorMode,
  }
}

export const use = useSettings
