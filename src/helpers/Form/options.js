import { emailRegExp, loginRegExp } from './regex'

export const required = 'Объязательно поле'

export const Email = {
  required,
  minLength: {
    value: 5,
    message: 'Минимум 5 символов',
  },
  pattern: {
    value: emailRegExp,
    message: 'Некорректная почта',
  },
}

export const Password = {
  required,
  minLength: {
    value: 6,
    message: 'Минимум 6 символов',
  },
}

export const Login = {
  required,
  minLength: {
    value: 3,
    message: 'Минимум 3 символа',
  },
  pattern: {
    value: loginRegExp,
    message: 'Только латинские символы',
  },
}

export const SimpleField = {
  required,
  minLength: {
    value: 3,
    message: 'Минимум 3 символа',
  },
}
