const sumar = (arreglo) => {
   let sumatoria = arreglo.reduce((valorPrevio, valorActual) => valorPrevio + valorActual);
    return sumatoria;}

const calcularPromedio = (arreglo) => {
    let promedio = sumar(arreglo) / arreglo.length;
    return Math.round(promedio * 10) / 10;
}

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
        this.horarios = this.horarios.filter(horario => horario !== horarioReservado);   
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
               return calcularPromedio(this.calificaciones);
        }
    }
}