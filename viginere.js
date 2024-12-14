function vigenereEncrypt(plaintext, keyword) {
  let result = "";
  let keyIndex = 0;

  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];
    let shift;

    // Determine shift value
    if (/[a-zA-Z]/.test(char)) {
      shift = keyword[keyIndex % keyword.length].charCodeAt(0) % 26;
      let base = char >= "a" && char <= "z" ? 97 : 65;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - base + shift) % 26) + base
      );
      keyIndex++;
    } else if (/[0-9]/.test(char)) {
      shift = keyword[keyIndex % keyword.length].charCodeAt(0) % 10;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 48 + shift) % 10) + 48
      );
      keyIndex++;
    } else {
      result += char; // Non-alphanumeric characters remain unchanged
    }
  }

  return result;
}

function vigenereDecrypt(ciphertext, keyword) {
  let result = "";
  let keyIndex = 0;

  for (let i = 0; i < ciphertext.length; i++) {
    let char = ciphertext[i];
    let shift;

    if (/[a-zA-Z]/.test(char)) {
      shift = keyword[keyIndex % keyword.length].charCodeAt(0) % 26;
      let base = char >= "a" && char <= "z" ? 97 : 65;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - base - shift + 26) % 26) + base
      );
      keyIndex++;
    } else if (/[0-9]/.test(char)) {
      shift = keyword[keyIndex % keyword.length].charCodeAt(0) % 10;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 48 - shift + 10) % 10) + 48
      );
      keyIndex++;
    } else {
      result += char;
    }
  }

  return result;
}

// Example usage
let plaintext = "";
let keyword = "";

let encrypted = vigenereEncrypt(plaintext, keyword);
console.log("Encrypted: " + encrypted);

let decrypted = vigenereDecrypt(encrypted, keyword);
console.log("Decrypted: " + decrypted);
