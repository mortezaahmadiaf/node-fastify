import { lib, PBKDF2 } from "crypto-js";

// generate a string by crypto pakage by takes string length
export const genRandomString = (customLength: number = 32): string => {
  return lib.WordArray.random(
    customLength / 2
  ).toString(); /** return required number of characters */
};

// encrypt password with a random string
export const encription = (password: string, salt: string): string => {
  let hash = PBKDF2(password, salt).toString();
  return hash;
};
