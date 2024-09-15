const fs = require('fs');
const { SourceMapConsumer } = require('source-map'); // Instala este paquete con npm o yarn

fs.readFile('ruta/al/archivo/chunk.js.map', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el sourcemap:', err);
    return;
  }

  // Carga el sourcemap
  const consumer = await new SourceMapConsumer(data);

  // Línea en chunk.js donde ocurre el error (por ejemplo, línea 42)
  const lineaChunkJS = 42;

  // Mapea la línea a la ubicación original
  const ubicacionOriginal = consumer.originalPositionFor({
    line: lineaChunkJS,
    column: 0,
  });

  console.log('Ubicación original:');
  console.log(`Archivo: ${ubicacionOriginal.source}`);
  console.log(`Línea: ${ubicacionOriginal.line}`);
  console.log(`Columna: ${ubicacionOriginal.column}`);
});
