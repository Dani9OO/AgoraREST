const mariadb = require('./db.js');

const Alumno = function(alumno) {
    this.nombre = alumno.nombre;
};

Alumno.crearAlumno = (alumno, result) => {
    mariadb.query('CALL NuevoAlumno(?)', alumno, (err,res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('Alumno creado con nombre: ', { nombre: alumno });
        result(null, res);
    });
};

Alumno.getAlumnos = result => {
    mariadb.query('SELECT * FROM Alumno', (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('alumnos: ', res);
        result(null, res);
    });
};

Alumno.getMaterias = result => {
    mariadb.query('SELECT * FROM Materias', (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('materias: ', res);
        result(null, res);
    });
};

Alumno.getCalificaciones = (alumnoId, result) => {
    mariadb.query('SELECT a.Nombre, a.Promedio, c.Materia, c.Calificación FROM Calificaciones c INNER JOIN Alumno a ON c.Alumno = a.ID WHERE a.ID = ?', alumnoId, (err,res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if(res.length) {
            console.log('Alumno encontrado con ID: ', res[0]);
            result(null, res);
            return;
        }
        if({ kind: 'not found' }, null);
    });
};

Alumno.registrarCalificaciones = (alumnoId, nombreMateria, calificacion, result) => {
    mariadb.query('CALL Calificar(?,?,?)', [alumnoId, nombreMateria, calificacion], (err,res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('calificacion registrada para el Alumno con ID ', alumnoId);
        result(null, res);
    });
};

Alumno.getPromedio = result => {
    mariadb.query('SELECT AVG(Promedio) AS Promedio FROM Alumno', (err,res) => {
        if(err) {
            console.log('error: ', err);
            result(null,res);
            return;
        }
        console.log('Promedio: ', res);
        result(null, res);
    });
};

module.exports = Alumno;