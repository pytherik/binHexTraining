const hex = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}

function get_bin(x) {
  let xBin = "";
  for (let i = 7; i >= 0; i--) {
    if (2 ** i <= x) {
      xBin += "1";
      x -= 2 ** i;
      continue;
    } else {
      xBin += "0";
      continue;
    }
  }
  return xBin;
}

function get_hex(x) {
  let xHex = "";
  if (x > 15) {
    const div = Math.floor(x / 16)
    if (div > 9) {
      xHex += hex[div]
      x -= 16 * div;
    } else {
      xHex += div.toString();
      x -= 16 * div;
    }
  }

  if (x > 9) {
    xHex += hex[x]
  } else {
    xHex += x.toString();
  }
  return xHex;
}