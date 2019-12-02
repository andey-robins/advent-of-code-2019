var fs = require('fs');

var filename = "input.txt"
var opcode = fs.readFileSync(filename).toString().split(",");
for (var i = 0; i < opcode.length; i++) {
    opcode[i] = parseInt(opcode[i], 10);
}

var index = 0;

opcode[1] = 12;
opcode[2] = 2;

while (opcode[index] != 99) {
    //console.log(opcode);
    if (opcode[index] == 1) {
        opcode[opcode[index + 3]] = opcode[opcode[index + 1]] + opcode[opcode[index + 2]];
        index += 4;
    } else if (opcode[index] == 2) {
        opcode[opcode[index + 3]] = opcode[opcode[index + 1]] * opcode[opcode[index + 2]];
        index += 4;
    } else {
        console.log("An error occured");
        index = -1;
    }
}
console.log(opcode[0]);
