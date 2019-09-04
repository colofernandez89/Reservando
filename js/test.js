let expect = chai.expect;

describe("Restaurant", () => {
    describe("reservarHorario", () => {
        it("Debería eliminarse del array de horarios disponibles, el horario reservado.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurant.reservarHorario("13:00");
            expect(restaurant.horarios).to.eql(["15:30", "18:00"]);
            expect(restaurant.horarios.length).to.equal(2);
        })
        it("Debería mantenerse igual el array de horarios disponibles del restaurant cuando se reserva un horario que éste no posee.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurant.reservarHorario("14:00");
            expect(restaurant.horarios).to.eql(["13:00", "15:30", "18:00"]);
            expect(restaurant.horarios.length).to.equal(3);
        })
        it("Debería mantenerse igual el array de horarios disponibles del restaurant cuando no se le pasa ningún parámetro a la función.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurant.reservarHorario();
            expect(restaurant.horarios).to.eql(["13:00", "15:30", "18:00"]);
            expect(restaurant.horarios.length).to.equal(3);
        })
    })
    describe("obtenerPuntuacion", () => {
        it("Debería calcular correctamente el promedio de la suma de las calificaciones del restaurant.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            let fn = restaurant.obtenerPuntuacion();
            expect(fn).to.equal(7.4);
        })
        it("Debería devolver una puntuación igual a 0 si el restaurant no posee ninguna calificación.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
            let fn = restaurant.obtenerPuntuacion();
            expect(fn).to.equal(0);
        })
    })
    describe("calificar", () => {
        it("Debería arrojar un error si la calificación pasada por parámetro NO es un número.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            let fn = () => restaurant.calificar(NaN);
            expect(fn).to.throw();
        })
        it("No debería arrojar un error si la calificación pasada por parámetro es un número.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            let fn = () => restaurant.calificar(8);
            expect(fn).to.not.throw(); 
        })
        it("Debería arrojar un error si la calificación pasada por parámetro es un número menor a 1.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            let fn = () => restaurant.calificar(0);
            expect(fn).to.throw();
        })
        it("Debería arrojar un error si la calificación pasada por parámetro es un número mayor a 10.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            let fn = () => restaurant.calificar(12);
            expect(fn).to.throw();
        })
        it("Debería arrojar un error si la calificación pasada por parámetro no es un número entero.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            let fn = () => restaurant.calificar(7.4);
            expect(fn).to.throw();
        })
        it("Debería agregarse al array de calificaciones la calificación pasada por parámetro.", () => {
            let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurant.calificar(10);
            expect(restaurant.calificaciones).to.eql([6, 7, 9, 10, 5, 10]); 
        })
    })
})

describe("Listado", () => {
    describe("buscarRestaurante(id)", () => {
        it("Debería arrojar un error si el id pasado por parámetro NO es un número.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = () => listado.buscarRestaurante(isNaN);
            expect(fn).to.throw();
        })
        it("No debería arrojar un error si el id pasado por parámetro es un número y es mayor a 0.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = () => listado.buscarRestaurante(2);
            expect(fn).to.not.throw();
        })
        it("Debería arrojar un error cuando no se le pasa ningún id por parámetro.", () => {
            let listadoDeRestaurantes = [
                     new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                     new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                     new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = () => listado.buscarRestaurante();
            expect(fn).to.throw();
        })
        it("Debería arrojar un error cuando no existe un restaurant que coincida con el id pasado por parámetro.", () => {
            let listadoDeRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = () => listado.buscarRestaurante(5);
            expect(fn).to.throw();            
        })
        it("Debería devolver el restaurant que corresponda al id pasado por parámetro.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.buscarRestaurante(3);
            let restaurantBuscadoPorId = new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
            expect(fn).to.eql(restaurantBuscadoPorId);
        })
    })
    describe("obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)", () => {
        it("No debería devolver ningún restaurant en particular si no se le pasa ninguún filtro por parámetro.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes();
            expect(fn.length).to.equal(0);
        })
        it("Debería devolver todos los restaurants que coincidan con el rubro elegido.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes("Asiática", null, null);
            expect(fn.length).to.equal(2);
         })
        it("Debería devolver todos los restaurants que coincidan con la ciudad elegida.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes(null, "Londres", null);
            expect(fn.length).to.equal(1);
        })
        it("Debería devolver todos los restaurants que coincidan con el horario elegido.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes(null, null, "13:00");
            expect(fn.length).to.equal(2);
        })
        it("Debería devolver todos los restaurants que coincidan con los tres parámetros elegidos.", () => {
            let listadoDeRestaurantes = [
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            ];
            let listado = new Listado(listadoDeRestaurantes);
            let fn = listado.obtenerRestaurantes("Ensalada", "Buenos Aires", "09:00");
            expect(fn.length).to.equal(0);
        })
    })
})