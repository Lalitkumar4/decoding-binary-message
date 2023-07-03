// Convert Binary message to string (readable message)


const mes =
  "01010100 01101000 01100001 01110100 00100111 01110011 00100000 01110011 01101111 00100000 01100011 01101111 01101111 01101100 00100000 01101100 01100001 01101100 01101001 01110100";
const res = mes
  .split(" ")
  .map((b) => parseInt(b, 2))
  .map((num) => String.fromCharCode(num))
  .join("");

console.log(res);

// Convert String message to binary meassage

/*const mes = "That's so cool lalit";
let binary = "";

for (let i = 0; i < mes.length; i++) {
  let charCode = mes.charCodeAt(i);
  let charBinary = charCode.toString(2).padStart(8, 0);
  binary += charBinary + " ";
  binary.trim();
}
console.log(binary);*/