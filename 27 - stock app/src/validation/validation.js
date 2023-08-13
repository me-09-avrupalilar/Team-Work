import { object, string, ref } from "yup";

const passwordValidation = string()
  .required()
  .min(8)
  .matches(/\d+/, "Password must contain at least one digit")
  .matches(/[a-z]/, "Password must contain at least one lowercase")
  .matches(/[A-Z]/, "Password must contain at least one uppercase")
  .matches(
    /[!,?{}><%&$#£+-.@]+/,
    "Password must contain at least one special character"
  );

export const loginSchema = object({
  email: string().email().required(),
  password: passwordValidation,
});

export const registerSchema = object({
  username: string().required(),
  first_name: string().required(),
  last_name: string().required(),
  email: string().email().required(),
  password: passwordValidation,
  password2: passwordValidation.oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
});
