const system = {
  0: "d",
  1: "0x",
  2: "b"
};

const d = Math.floor(Math.random() * 256);
const all = [d, get_hex(d), get_bin(d)];
const aufgabe = Math.floor(Math.random() * 3);

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
    $("#dezErr").show().text(icon);
    $("#hexErr").show().text(icon);
    $("#binErr").show().text(icon);
    $("#submit").hide();
    $("#falsch").hide();
  }
  else {
    $(".error").hide();
    d != all[0] ? $("#dezErr").show().text(icon(1)): $("#dezErr").show().text(icon);
    h != all[1] ? $("#hexErr").show().text(icon(1)): $("#hexErr").show().text(icon);
    b != all[2] ? $("#binErr").show().text(icon(1)): $("#binErr").show().text(icon);
    $("#falsch").slideDown();
    $(".success.falsch").text(falsch[Math.floor(Math.random() * falsch.length)]);
  }
});