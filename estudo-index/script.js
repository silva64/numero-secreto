document.getElementById('codificar').addEventListener('click', codificarTexto)
document
  .getElementById('descodificar')
  .addEventListener('click', descodificarTexto)
document.getElementById('limpar').addEventListener('click', () => {
  document.getElementById('texto').value = ''
  document.getElementById('resultado').value = ''
})
document.getElementById('copiar').addEventListener('click', copiarTexto)

function codificarTexto() {
  const texto = document
    .getElementById('texto')
    .value.replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat')
  const resultado = texto
  document.getElementById('resultado').value = resultado
}

function descodificarTexto() {
  const texto2 = document
    .getElementById('texto')
    .value.replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')
  const resultado = texto2
  document.getElementById('resultado').value = resultado
}

function copiarTexto() {
  const resultado = document.getElementById('resultado')
  resultado.select()
  document.execCommand('copy')
  // alert('Texto copiado!')
}
