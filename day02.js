const ADD = 1;
const MULTIPLY = 2;
const END = 99;
const OPERATIONS = {
  [ADD]: (num1, num2) => num1 + num2,
  [MULTIPLY]: (num1, num2) => num1 * num2,
}

const initNums = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,6,23,2,23,13,27,1,27,5,31,2,31,10,35,1,9,35,39,1,39,9,43,2,9,43,47,1,5,47,51,2,13,51,55,1,55,9,59,2,6,59,63,1,63,5,67,1,10,67,71,1,71,10,75,2,75,13,79,2,79,13,83,1,5,83,87,1,87,6,91,2,91,13,95,1,5,95,99,1,99,2,103,1,103,6,0,99,2,14,0,0]

function calcIntCode(noun, verb) {
  const nums = [...initNums]
  nums[1] = noun
  nums[2] = verb

  let currentIndex = 0

  while (true) {
    const opcode = nums[currentIndex]

    if (opcode === END) { return nums }

    const operation = OPERATIONS[opcode]

    const num1 = nums[nums[currentIndex + 1]]
    const num2 = nums[nums[currentIndex + 2]]

    nums[nums[currentIndex + 3]] = operation(num1, num2)

    currentIndex += 4
  }
}

console.log(calcIntCode(65, 77)[0])

// 3 * noun + 1
// 643 + verb
