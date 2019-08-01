// FIND
const { passengers } = require("../data");

// 1. Encontre o passageiro de nome: "Enzo"
const Enzo = passengers.find(
  passenger => passenger.name.toLowerCase() === "enzo"
);

console.table(Enzo);
