/*
const input_text = document.querySelector('#input-text')
const input_text = document.querySelector('#input-mensagem')
*/
function btnCriptografar() {}

function criptografar(string) {
  const stringCriptografada = string
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat')

  return stringCriptografada
}

function descriptografar(string) {
  const stringDescriptografada = string
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

  return stringDescriptografada
}
