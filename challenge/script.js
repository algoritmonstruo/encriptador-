// Reglas de encriptación y desencriptación
const encryptRules = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const decryptRules = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

// Función para encriptar el texto
function encrypt(text) {
  return text.split('').map(char => encryptRules[char] || char).join('');
}

// Función para desencriptar el texto
function decrypt(text) {
  let result = text;
  for (const [key, value] of Object.entries(decryptRules)) {
      result = result.split(key).join(value);
  }
  return result;
}

// Función principal para procesar el texto según la acción seleccionada
function processText() {
  const text = document.getElementById('text').value;
  const action = document.querySelector('input[name="action"]:checked').value;
  const resultField = document.getElementById('result');

  let result = '';
  if (action === 'encrypt') {
      result = encrypt(text);
  } else if (action === 'decrypt') {
      result = decrypt(text);
  }

  resultField.value = result;
}

// Función para copiar el resultado al portapapeles
function copyToClipboard() {
  const resultField = document.getElementById('result');
  resultField.select();
  document.execCommand('copy');
}
