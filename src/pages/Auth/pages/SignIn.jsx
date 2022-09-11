import {
  Button,
  FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Form } from 'helpers/Form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Auth } from '..'

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const {
    isLoading,
    actions: {
      signIn,
    },
  } = Auth.Hook.SignIn.use()

  const onSubmit = (data) => {
    signIn(data)
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-1/4 p-5 rounded shadow-md">
        <h2 className="text-2xl text-center">Авторизация</h2>

        <FormControl
          isInvalid={errors.username}
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="username"
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
          <span>Нет аккаунта?
            <Link to="/auth/signup">
              <b>Зарегистрироваться</b>
            </Link>
          </span>
        </p>

        <div className="mt-3 text-center">
          <Button
            isLoading={isLoading}
            colorScheme="telegram"
            onClick={handleSubmit(onSubmit)}
          >Войти</Button>
        </div>
      </div>
    </div>
  )
}
