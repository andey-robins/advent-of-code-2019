var fs = require('fs');

// the intcode computer. it sounds like this will be a useful piece of code to have isolated to a single
// function that can be plugged into any challenge that needs it.
// if it becomes sufficiently complicated, it might be worth it to even throw it into it's own file or class.
function intcomputer(opcode) {

    var index = 0;

    while (opcode[index] != 99) {           //halt instruction
        if (opcode[index] == 1) {           // add instruction
            opcode[opcode[index + 3]] = opcode[opcode[index + 1]] + opcode[opcode[index + 2]];
            index += 4;
        } else if (opcode[index] == 2) {    // multiply instruction
            opcode[opcode[index + 3]] = opcode[opcode[index + 1]] * opcode[opcode[index + 2]];
            index += 4;
        } else {                            // graceful exit
            return opcode[0];
        }
    }
    return opcode[0];
}

function main() {
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {

            // reload a fresh copy of the inputs each time
            // if performance were an issue this could be done once and then the data copied over
            // to a new opcode array every iteration, but performance isn't a problem on my machine
            var filename = "input.txt"
            var opcode = fs.readFileSync(filename).toString().split(",");
            for (var k = 0; k < opcode.length; k++) {
                opcode[k] = parseInt(opcode[k], 10);
            }

            opcode[1] = i;
            opcode[2] = j;
            var result = intcomputer(opcode);
            if (result == 19690720) {
                console.log(i);
                console.log(j);
                return;
            }
        }
    }
}

main();
