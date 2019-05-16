/*const estudiante1 = require('./calculos');

console.log(estudiante1.estudiante);
console.log('El promedio del estuadiante es:' + estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas,estudiante1.estudiante.notas.ingles,estudiante1.estudiante.notas.programacion));
*/

const {estudiante,obtenerPromedio} = require('./calculos');
const fs = require('fs');

console.log('El nombre del estudiante es: ' +  estudiante.nombre);
console.log('El promedio del estuadiante es:' + obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

let {nombre, edad : ano, notas:{matematicas, ingles, programacion}}= estudiante;
console.log('El nombre del estudiante es por segunda vez: ' + nombre);
console.log('El promedio del estudiante es por segunda vez: ' + obtenerPromedio(matematicas,ingles,programacion));
console.log('La edad del estudiante es: ' + ano);

crearArchivo = (estudiante)=>{
	texto = 'EL nombre del estudiante es: ' + nombre + '\n' +
			'ha obtenido un promedio de: ' + obtenerPromedio(matematicas,ingles,programacion);
	fs.writeFile('promedio.txt',texto,(err) => {
		if (err) throw (err);
		console.log('Se ha creado el archivo');
	})
}

crearArchivo(estudiante);