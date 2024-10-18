let userInput = prompt("Gimme froyo flavours!!!!!! (use commas:)");

const userSplit = userInput.split(",");

const trimInput = userSplit.map((item) => item.trim());

let uniqueInput = new Set();

for (let i = 0; i < trimInput.length; i++) {
  uniqueInput.add(trimInput[i]);
}

const count = {};

function myFunc() {
  for (const element of trimInput) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
}

myFunc();

console.log(count);
