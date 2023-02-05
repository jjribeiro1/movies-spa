import isEmail from "validator/lib/isEmail";

export const ValidateEmail = (email: string) => isEmail(email);
