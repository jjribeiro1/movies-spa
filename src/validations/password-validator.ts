export function ValidatePassword(password: string) {
  const passwordArray = password.split('');
  const passwordMinLength = password.length >= 8;
  const specialCharacterInPassword = passwordArray.some((value) => {
    return value === '!' || value === '@' || value === '#' || value === '$' || value === '%';
  });
  const numberInPassword = passwordArray.some((value) => Number(value));

  return passwordMinLength && specialCharacterInPassword && numberInPassword;
}
