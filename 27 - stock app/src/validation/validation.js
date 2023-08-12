

import { object, string } from "yup";

const loginSchema = object({
  email: string().email().required(),
  password: string()
    .required()
    .min(8)
    .matches(/\d+/, "password must at least contain one digit")
    .matches(/[a-z]/, "password must at least contain one lowercase")
    .matches(/[A-Z]/, "password must at least contain one uppercase")
    .matches(/[a-z]/, "password must at least contain one lowercase")
    .matches(
      /[!,?{}><%&$#£+-.]+/,
      "password must at least contain one special character"
    )
});

export const registerSchema = object({

  username: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  password: string()
    .required()
    .min(8)
    .matches(/\d+/, "password must at least contain one digit")
    .matches(/[a-z]/, "password must at least contain one lowercase")
    .matches(/[A-Z]/, "password must at least contain one uppercase")
    .matches(/[a-z]/, "password must at least contain one lowercase")
    .matches(
      /[!,?{}><%&$#£+-.]+/,
      "password must at least contain one special character"
    ),
});

export default loginSchema;
