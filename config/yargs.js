const bOptions = {
  alias: "base",
  type: "number",
  demandOption: true,
  describe: "Es la base de la tabla de multiplicar",
};

const lOptions = {
  alias: "listar",
  type: "boolean",
  describe: "Permite listar en consola cuando se crea el archivo exitosamente",
};

const hOptions = {
  alias: "hasta",
  type: "number",
  default: 9,
  describe: "valor que determina hasta donde se va crear la tabla",
};

const argv = require("yargs")
  .option("b", bOptions)
  .option("l", lOptions)
  .option("h", hOptions)
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "El valor de la base tiene que ser un numero ";
    }
    if (isNaN(argv.h)) {
      throw "El valor de la hasta tiene que ser un numero ";
    }
    return true;
  }).argv;

module.exports = argv;
