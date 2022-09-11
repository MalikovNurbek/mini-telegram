import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '..'

const UseSignUp = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(false)

  const signUp = (body) => {
    const request = Auth.API.signUp(body)

    setIsLoading(true)

    request
      .then(res => {
        const data = res.data

        if (data) return navigate('/auth/signin/')
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
    isLoading,
    actions: {
      signUp,
    },
  }
}

export const use = UseSignUp
