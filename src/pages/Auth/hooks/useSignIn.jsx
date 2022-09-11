import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '..'

const useSignIn = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(false)

  const signIn = (body) => {
    const request = Auth.API.signIn(body)

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        if (!data) return

        data.refresh && localStorage.setItem('refresh', data.refresh)
        data.access && localStorage.setItem('access', data.access)

        navigate('/')
      })
      .catch(err => {
        const errorMessage = err.response.data

        if (errorMessage) {
          toast({
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
          })
        }
      })
      .finally(() => setIsLoading(false))
  }

  return {
    actions: {
      signIn,
    },
    isLoading,
  }
}

export const use = useSignIn
