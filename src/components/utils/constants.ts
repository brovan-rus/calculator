export const digits = ['C', ' ', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', ',', '='];

const mediaQuery = window.matchMedia('(max-width: 450px)');
export const maxDigits = mediaQuery.matches ? 8 : 12;
export const operators = [ '√', '%', '/', '-', '+', 'x'];

console.log(maxDigits);