export function generatePassword(email) {
  let userName = email.split('@')[0];
  let suffixForPass = '@123';

  let firstLetterCap = userName.charAt(0)?.toUpperCase();
  let remainingLetters = userName.slice(1);

  let defaultPass = firstLetterCap + remainingLetters + suffixForPass;

  return defaultPass;
}
