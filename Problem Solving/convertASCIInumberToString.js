// Convert ascii string to words.
// Output: CAD

const asciiString = "1110101110";

const result = asciiString
  .padStart(Math.ceil(asciiString.length / 8) * 8, "0")
  .replace(/.{8}/g, (byte) => String.fromCharCode(parseInt(byte, 2)));

console.log(result);
