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
  const errMessage = "❌";
  const succMessage = "👍";
  // const errMessage = "Hier stimmt was nicht!";
  if (d == all[0] && h== all[1] && b == all[2]) {
    $(".error").hide();
    $("#richtig").slideDown();
    $("#dezErr").show().text(succMessage);
    $("#hexErr").show().text(succMessage);
    $("#binErr").show().text(succMessage);
    $("#submit").hide();
    $("#falsch").hide();
  }
  else {
    $(".error").hide();
    if ( d != all[0] ) {
      $("#dezErr").show().text(errMessage);
    }
    else {
      $("#dezErr").show().text(succMessage);
    }
    if (h != all[1]) {
      $("#hexErr").show().text(errMessage);
    }
    else {
      $("#hexErr").show().text(succMessage);
    }
    if (b != all[2]) {
      $("#binErr").show().text(errMessage);
    }
    else {
      $("#binErr").show().text(succMessage);
    }
    $("#falsch").slideDown();
    // $(".form-container").slideUp();
  }
});

