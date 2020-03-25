module.exports = app => {
    const alumno = require("../controllers/alumn.controller.js")

    app.post('/alumnos/:alumno', alumno.crearAlumno);

    app.get('/alumnos', alumno.getAlumnos);

    app.get('/materias', alumno.getMaterias);

    app.get('/alumnos/:alumnoId', alumno.getCalificaciones);

    app.get('/alumno/:alumnoId', alumno.getAlumno);

    app.post('/alumnos/:alumnoId/:nombreMateria/:calificacion', alumno.registrarCalificaciones);

    app.get('/promedio', alumno.getPromedio);
};