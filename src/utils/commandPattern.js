const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

class Command {
  constructor(execute, undo, value, current) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
    this.current = current;
  }
}

const operators = {
  AddOperator: "+",
  SubOperator: "-",
  MulOperator: "*",
  DivOperator: "/",
};

const Commands = {
  AddCommand: function (value, current) {
    return new Command(add, subtract, value, current);
  },
  SubCommand: function (value, current) {
    return new Command(subtract, add, value, current);
  },
  MulCommand: function (value, current) {
    return new Command(multiply, divide, value, current);
  },
  DivCommand: function (value, current) {
    return new Command(divide, multiply, value, current);
  },
};

export const calculatorCore = () => {
  let current = 0;
  let commands = [];

  return {
    execute: function (command) {
      current = +command.execute(command.current, command.value);
      commands.push(command);
      return current;
    },

    undo: function () {
      let command = commands.pop();
      current = command.undo(current, command.value);
    },

    getCurrentValue: function () {
      return current;
    },
  };
};

export const operations = (value, currentValue, operand) => {
  switch (operand) {
    case operators.AddOperator:
      return new Commands.AddCommand(value, currentValue);
    case operators.SubOperator:
      return new Commands.SubCommand(value, currentValue);
    case operators.MulOperator:
      return new Commands.MulCommand(value, currentValue);
    case operators.DivOperator:
      return new Commands.DivCommand(value, currentValue);
    default:
      return 0;
  }
};
