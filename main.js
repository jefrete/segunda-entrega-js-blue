// LA COMARCA KAYAKS

// Precios
const precioRecreativo = 750000;
const precioFishing = 850000;
const precioAguasRapidas = 750000;
const precioTravesia = 950000;
const precioDoble = 1100000;

// Variables
let menu;
let continuar = true;
let precio = 0;

// Menu
alert('Bienvenido a "La Comarca Kayaks"');

while (continuar) {

    precio = 0;

    menu = prompt(
        "LA COMARCA KAYAKS\n" +
        "¿Qué categoría estás buscando?\n" +
        "1 - Kayaks Recreativos\n" +
        "2 - Kayaks Fishing\n" +
        "3 - Kayaks de Aguas Rápidas\n" +
        "4 - Kayaks Dobles\n" +
        "5 - Salir"
    );

    switch (menu) {

        case "1":
            alert("Kayaks Recreativos\nPrecio: $" + precioRecreativo);
            precio = precioRecreativo;
            console.log("Kayaks Recreativos");
            break;

        case "2":
            alert("Kayaks Fishing\nPrecio: $" + precioFishing);
            precio = precioFishing;
            console.log("Kayaks Fishing");
            break;

        case "3":
            alert("Kayaks de Aguas Rápidas\nPrecio: $" + precioAguasRapidas);
            precio = precioAguasRapidas;
            console.log("Kayaks de Aguas Rápidas");
            break;

        case "4":
            alert("Kayaks Dobles\nPrecio: $" + precioDoble);
            precio = precioDoble;
            console.log("Kayaks Dobles");
            break;

        case "5":
            let seguro = prompt(
                "¿Está seguro que quiere abandonar el sitio? si/no"
            );

            if (seguro === "si") {
                console.log("Salida confirmada");
                alert(
                    "Gracias por visitar nuestra tienda. ¡Que tengas una buena aventura!"
                );
                continuar = false;
            } else {
                alert("Volvamos al menú principal");
            }

            break;

        default:
            alert("Opción inválida. Elegí una opción del 1 al 5.");
            console.log("Opción inválida");
    }


    // Compra
    if (precio > 0) {

        let cantidad = parseInt(
            prompt("¿Cuántas unidades desea comprar?")
        );

        if (cantidad <= 0) {

            alert("Cantidad inválida.");

        } else if (cantidad <= 5) {

            let confirmar = prompt(
                "Su total es: $" + (precio * cantidad) +
                "\n¿Confirmar la compra? si/no"
            );

            if (confirmar === "si") {
                alert("¡Compra realizada!");
                console.log("Compra realizada");
            } else {
                alert("Compra cancelada");
            }

        } else {

            alert("Máximo disponible: 5 unidades.");
        }
    }
}