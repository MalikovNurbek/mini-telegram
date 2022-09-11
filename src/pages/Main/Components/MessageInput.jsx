import { FormControl, FormErrorMessage, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineSend } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

export const MessageInput = ({
  sendMessage,
  currentUser,
  isLoadingSendMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset,
    setFocus,
  } = useForm()

  const { chatId } = useParams()

  const onSubmit = (data) => {
    if (!chatId) return
    if (!currentUser) return

    sendMessage({
      text: data.text,
      room: +chatId,
      user: currentUser.id,
    })
      .then(() => {
        reset({
          text: '',
        })
      })
  }

  React.useEffect(() => {
    setFocus('text')
  }, [setFocus, chatId])

  return (
    <div>
      <div className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex"
        >
          <FormControl
            isInvalid={errors.text}
            className="mr-3"
          >
            <Input
              placeholder="Написать сообщение"
              isDisabled={isLoadingSendMessage}
              {...register('text', {
                required: 'Напишите что-нибудь',
              })}
            />

            <FormErrorMessage>
              {errors.text && errors.text.message}
            </FormErrorMessage>

          </FormControl>

          <IconButton
            onClick={handleSubmit(onSubmit)}
            colorScheme="telegram"
            variant="outline"
            icon={<AiOutlineSend /> }
            isLoading={isLoadingSendMessage}
          />
        </form>
      </div>
    </div>
  )
}
