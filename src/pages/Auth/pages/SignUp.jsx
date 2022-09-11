import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form } from 'helpers/Form'
import { Auth } from '..'

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const {
    actions: {
      signUp,
    },
    isLoading,
  } = Auth.Hook.SignUp.use()

  const onSubmit = (data) => {
    signUp(data)
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-1/4 p-5 rounded shadow-md">
        <h2 className="text-2xl text-center">Регистрация</h2>

        <FormControl
          isInvalid={errors.first_name}
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="first_name"
          >Имя</FormLabel>
          <Input
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
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="last_name"
          >Фамилия</FormLabel>
          <Input
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
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="login"
          >Логин</FormLabel>
          <Input
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
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="email"
          >Email</FormLabel>
          <Input
            id="email"
            placeholder="Введите почту"
            {...register('email', Form.Options.Email)}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.password}
        >
          <FormLabel
            className="text-dark"
            htmlFor="password"
          >Пароль</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Введите пароль"
            {...register('password', Form.Options.Password)}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>


        <p className="mt-3 text-sm text-center">
          <span>Есть аккаунт?
            <Link to="/auth/signin">
              <b>Авторизоваться</b>
            </Link>
          </span>
        </p>

        <div className="mt-3 text-center">
          <Button
            isLoading={isLoading}
            colorScheme="telegram"
            onClick={handleSubmit(onSubmit)}
          >Зарегистрироваться</Button>
        </div>
      </div>
    </div>
  )
}
