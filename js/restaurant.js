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

    //Tuve que corregir este método, ya que en la función original, la condición 'nuevaCalificacion < 10', 
    //no permitía que la calificación fuera un 10, por lo que nunca iba a agregarse al array de calificaciones.
    calificar(nuevaCalificacion){
        if (Number.isInteger(nuevaCalificacion) && typeof nuevaCalificacion === 'number' && !isNaN(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
            this.calificaciones.push(nuevaCalificacion);
        } else {
            throw new Error();
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