const hex = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}

const richtig = ["Cool!", "Straight!", "Wow!","Schรถnchen!", "Korrekt!", "Prima!", "Schick!", "Mega!", "Famos!", "Knorke!", "Toll!", "Hรผbsch!", "Fein!", "Okรฉ!", "Jope!"];
const falsch = ["WTF!", "Nicht!", "Au weia!","Nope!", "Nee!", "Autsch!", "Mies!", "Falsch!", "Quatsch!", "Nรถ!", "Wohl kaum!", "Hmmmm...", "Stinkt!", "Kalt!", "Oh je!"];
const wrong = ["๐ฉ","๐","๐ต","๐คฎ","๐ญ","๐","๐ฉ","๐ฑ","๐ก","๐ฅด","๐","๐","๐ฌ","โ"];
const right = ["๐","๐คช","๐ป","๐","๐","๐","๐","๐ค","๐ฌ","๐บ","๐ฐ","๐","๐","๐"];

function icon(r = 0) {  
  return r == 0 ? right[Math.floor(Math.random() * right.length)]
    : wrong[Math.floor(Math.random() * wrong.length)];
}



function get_bin(x) {
  let xBin = "";
  for (let i = 7; i >= 0; i--) {
    if (2 ** i <= x) {
      xBin += "1";
      x -= 2 ** i;
    } else {
      xBin += "0";
    }
  }
  return xBin;
}

function get_hex(x) {
  let xHex = "";
  if (x > 15) {
    const div = Math.floor(x / 16)
    div > 9 ? xHex += hex[div]: xHex += div.toString();
    x -= 16 * div;
  }
  x > 9 ? xHex += hex[x]: xHex += x.toString();
  return xHex;
}