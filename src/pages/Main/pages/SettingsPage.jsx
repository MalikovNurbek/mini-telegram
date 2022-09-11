import { Button, Divider, FormControl, FormErrorMessage, FormLabel, Input, Switch } from '@chakra-ui/react'
import { Form } from 'helpers/Form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Main } from '..'

export const SettingsPage = () => {
  const {
    actions: {
      editUser,
      toggleColorMode,
    },
    isLoading,
    currentUser,
    colorMode,
  } = Main.Hook.Settings.use()

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset,
  } = useForm()


  React.useEffect(() => {
    if (!currentUser) return

    reset({
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      username: currentUser.username,
      email: currentUser.email,
    })
  }, [currentUser])

  const onSubmit = (data) => {
    if (!currentUser) return

    editUser(currentUser.id, {
      ...currentUser,
      ...data,
    })
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="p-3 border-b">
        <p className="text-xl">Настройки профиля</p>
      </div>

      <div className="h-full p-3 overflow-auto">
        <div className="flex flex-col w-1/2 m-auto">

          <FormControl
            isInvalid={errors.first_name}
            className="mb-5"
          >
            <FormLabel
              className="!text-center"
              htmlFor="first_name"
            >Имя</FormLabel>
            <Input
              isDisabled={!currentUser}
              id="first_name"
              placeholder="Введите имя"
              {...register('first_name', Form.Options.SimpleField)}
            />
            <FormErrorMessage>
              {errors.first_name && errors.first_name.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl
            isInvalid={errors.last_name}
            className="mb-5"
          >
            <FormLabel
              className="!text-center"
              htmlFor="last_name"
            >Фамилия</FormLabel>
            <Input
              isDisabled={!currentUser}
              id="last_name"
              placeholder="Введите фамилию"
              {...register('last_name', Form.Options.SimpleField)}
            />
            <FormErrorMessage>
              {errors.last_name && errors.last_name.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl
            isInvalid={errors.username}
            className="mb-5"
          >
            <FormLabel
              className="!text-center"
              htmlFor="login"
            >Логин</FormLabel>
            <Input
              isDisabled={!currentUser}
              id="username"
              placeholder="Введите логин"
              {...register('username', Form.Options.Login)}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl
            isInvalid={errors.email}
            className="mb-5"
          >
            <FormLabel
              className="!text-center"
              htmlFor="email"
            >Email</FormLabel>
            <Input
              isDisabled={!currentUser}
              id="email"
              placeholder="Введите почту"
              {...register('email', Form.Options.Email)}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            colorScheme="telegram"
            isLoading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >Обновить</Button>
        </div>

        <Divider className="my-3"/>

        <div className="flex item-center">
          <p className="mr-3">Включить темную тему: </p>
          <Switch
            size="lg"
            isChecked={colorMode === 'dark' && true}
            onChange={toggleColorMode}
          />
        </div>

        <Divider className="my-3"/>

      </div>
    </div>
  )
}
