const Alumno = require("../models/alumn.model.js");

exports.crearAlumno = (req, res) => {

    Alumno.crearAlumno(req.params.alumno, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al registrar al alumno."
            });
        else res.send(data);
    });

};

exports.getAlumnos = (req, res) => {
    Alumno.getAlumnos((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error mientras se obtenía la lista de alumnos."
            });
        else res.send(data);
    });
}

exports.getMaterias = (req, res) => {
    Alumno.getMaterias((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error mientras se obtenía la lista de materias."
            });
        else res.send(data);
    });
}

exports.getCalificaciones = (req, res) => {
    Alumno.getCalificaciones(req.params.alumnoId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: 'No se encontro un alumno con id ${req.params.alumnoId}.'
                });
            } else {
                res.status(500).send({
                    message: 'Hubo un error al obtener el Alumno con id ' + req.params.alumnoId
                });
            }
        } else res.send(data);
    });
}

exports.getAlumno = (req, res) => {
    Alumno.getAlumno(req.params.alumnoId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: 'No se encontro un alumno con id ${req.params.alumnoId}.'
                });
            } else {
                res.status(500).send({
                    message: 'Hubo un error al obtener el Alumno con id ' + req.params.alumnoId
                });
            }
        } else res.send(data);
    });
}

exports.registrarCalificaciones = (req, res) => {
    Alumno.registrarCalificaciones(req.params.alumnoId, req.params.nombreMateria, req.params.calificacion, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al registrar las calificaciones del Alumno con id ${req.params.alumnoId}."
            });
        else res.send(data);
    });
}

exports.getPromedio = (req, res) => {
    Alumno.getPromedio((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error mientras se obtenía el promedio general."
            });
        else res.send(data);
    });
}