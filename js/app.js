const system = {
  0: "dezimal",
  1: "hexadezimal",
  2: "binär"
};

const d = Math.floor(Math.random() * 256);
const all = [d, get_hex(d), get_bin(d)];
console.log(all)

const aufgabe = Math.floor(Math.random() * 3);
console.log(aufgabe);


$("#exercise").text(`Bitte forme ${system[aufgabe]} ${all[aufgabe]} um!`);

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
    && $("#hex").val() == all[1]
    && $("#bin").val() == all[2]) {
    $("#richtig").slideDown();
  }
  else {
    $("#falsch").slideDown();
  }
});

