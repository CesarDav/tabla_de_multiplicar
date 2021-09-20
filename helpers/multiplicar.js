const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  let salida = "";
  const nombreDelArchivo = `./tablas_de_multiplicar/Tabla_del_${base}.txt`;
  const message = colors.america(
    `El archivo fue creado exitosamente. El nombre del archivo es: Tabla_del_${base} `
  );

  try {
    for (let index = 1; index < hasta; index++) {
      const resultado = base * index;
      salida += `${base} x ${index} = ${resultado}\n`;
    }

    fs.writeFileSync(nombreDelArchivo, salida);

    if (!!listar) {
      console.log(salida.green);
    }

    return message;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
