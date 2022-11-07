const system = {
  0: "d",
  1: "0x",
  2: "b"
};

const d = Math.floor(Math.random() * 256);
const all = [d, get_hex(d), get_bin(d)];
console.log(all)

const aufgabe = Math.floor(Math.random() * 3);
console.log(aufgabe);


$("#exercise").text(`${system[aufgabe]}${all[aufgabe]}`);

switch (aufgabe) {
  case 0:
    $("#dez").hide();
    $("#dez").val(all[0])
    break;
  case 1:
    $("#hex").hide();
    $("#hex").val(all[1])
    break;
  case 2:
    $("#bin").hide();
    $("#bin").val(all[2])
    break;
}
$("#systems-form").submit((e) => {
  e.preventDefault();
  if ($("#dez").val() == all[0]
    && $("#hex").val().toUpperCase() == all[1]
    && $("#bin").val() == all[2]) {
    $("#richtig").slideDown();
  }
  else {
    $("#falsch").slideDown();
  }
});

