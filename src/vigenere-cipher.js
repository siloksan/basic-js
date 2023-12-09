const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(state) {
    this.state = state;
    this.alphaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  findIndex(letter) {
    return this.alphaBet.indexOf(letter.toUpperCase());
  }

  returnDeletedElements(stringOfLetters, normalString) {
    let index = 0;
    let cipherString = "";
    for (let i = 0; i < normalString.length; i += 1) {
      if (/[^a-zA-Z]/.test(normalString[i])) {
        cipherString += normalString[i];
      } else {
        cipherString += stringOfLetters[index];
        index += 1;
      }
    }
    return cipherString;
  }

  cipherHandler(string, key, action = "encrypt") {
    const strOnlyLetters = string.replace(/[^a-zA-Z]/g, "");
    let keyForStr = "";
    let cipherText = "";
    let count = 0;
    for (let i = 0; i < strOnlyLetters.length; i += 1) {
      if (count === key.length) {
        count = 0;
      }
      keyForStr += key[count];
      let sumOfIndexes;
      if (action === "encrypt") {
        sumOfIndexes =
          this.findIndex(strOnlyLetters[i]) + this.findIndex(key[count]);
      } else if (action === "decrypt") {
        sumOfIndexes =
          26 + this.findIndex(strOnlyLetters[i]) - this.findIndex(key[count]);
      }
      let indexCipherText = sumOfIndexes % this.alphaBet.length;
      cipherText += this.alphaBet[indexCipherText];
      count += 1;
    }
    if (this.state === false) {
      return this.returnDeletedElements(cipherText, string)
        .split("")
        .reverse()
        .join("");
    }

    return this.returnDeletedElements(cipherText, string);
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this.cipherHandler(str, key);
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this.cipherHandler(str, key, "decrypt");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

const directMachine = new VigenereCipheringMachine();
console.log(
  'directMachine.encrypt("ce: 1, 2, 3, 4.', 'lilkey"): ',
  directMachine.encrypt("ce: 1, 2, 3, 4.", "lilkey")
);

console.log(
  'directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"): ',
  directMachine.decrypt("AEIHQX SX DLLU!", "alphonse")
);
