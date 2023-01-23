import validator from 'validator';

export const ValidateEmail = (email: string) => validator.isEmail(email);
