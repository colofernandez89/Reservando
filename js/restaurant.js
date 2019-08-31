class Restaurant {
    constructor(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones){
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.imagen = imagen;
        this.calificaciones = calificaciones;
    }

    reservarHorario(horarioReservado){
        for (let i = 0; i < this.horarios.length; i++) {
            if (this.horarios[i] === horarioReservado) {
                this.horarios.splice(i, 1);
                return;
            }
        }
    }

    calificar(nuevaCalificacion){
        if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
            this.calificaciones.push(nuevaCalificacion);
        }
    }

    obtenerPuntuacion(){
        if (this.calificaciones.length === 0) {
            return 0;
        } else {
            let sumatoria = 0;
            for (let i = 0; i < this.calificaciones.length; i++) {
                sumatoria += this.calificaciones[i];
            }
            let promedio = sumatoria / this.calificaciones.length;
            return Math.round(promedio * 10) / 10;
        }
    }
}