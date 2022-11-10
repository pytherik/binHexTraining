const system = {
  0: "d",
  1: "0x",
  2: "b"
};
const richtig = ["Schönchen!", "Korrekt!", "Prima!", "Schick!", "Mega!", "Famos!", "Knorke!", "Toll!", "Hübsch!", "Fein!", "Oké!", "Jope!"];
const falsch = ["Nope!", "Nee!", "Autsch!", "Mies!", "Falsch!", "Quatsch!", "Nö!", "Wohl kaum!", "Hmmmm...", "Stinkt!", "Kalt!", "Oh jeh!"];
const wrong = ["😩","😞","😵","🤮","😭","😖","💩","😱","😡","🥴","😟","😕","😬","❌"];
const right = ["😜","🤪","👻","😇","😙","😊","😃","🤓","🍬","🍺","🍰","😎","🙃","👍"];
const d = Math.floor(Math.random() * 256);
const all = [d, get_hex(d), get_bin(d)];
const aufgabe = Math.floor(Math.random() * 3);

function message(r=0) {
  if (r==0) {
    return right[Math.floor(Math.random() * right.length)]
  } else
  { 
    return wrong[Math.floor(Math.random() * wrong.length)]
    }
}

$("#exercise").text(`${system[aufgabe]}${all[aufgabe]}`);

switch (aufgabe) {
  case 0:
    $(".input.dez").hide();
    $("#dez").val(all[0])
    break;
  case 1:
    $(".input.hex").hide();
    $("#hex").val(all[1])
    break;
  case 2:
    $(".input.bin").hide();
    $("#bin").val(all[2])
    break;
}

$("#systems-form").submit((e) => {
  e.preventDefault();
  const d = $("#dez").val();
  const h = $("#hex").val().toUpperCase();
  const b = $("#bin").val();

  if (d == all[0] && h== all[1] && b == all[2]) {
    $(".error").hide();
    $("#richtig").slideDown();
    $(".success.richtig").text(richtig[Math.floor(Math.random() * richtig.length)]);
    $("#dezErr").show().text(message);
    $("#hexErr").show().text(message);
    $("#binErr").show().text(message);
    $("#submit").hide();
    $("#falsch").hide();
  }
  else {
    $(".error").hide();
    if ( d != all[0] ) {
      $("#dezErr").show().text(message(1));
    }
    else {
      $("#dezErr").show().text(message);
    }
    if (h != all[1]) {
      $("#hexErr").show().text(message(1));
    }
    else {
      $("#hexErr").show().text(message);
    }
    if (b != all[2]) {
      $("#binErr").show().text(message(1));
    }
    else {
      $("#binErr").show().text(message);
    }
    $("#falsch").slideDown();
    $(".success.falsch").text(falsch[Math.floor(Math.random() * falsch.length)]);
    // $(".form-container").slideUp();
  }
});

