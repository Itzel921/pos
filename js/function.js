const productos = [
  // Bebidas (1-20)
  ["001", "Coca-Cola Original 600ml", 18.50],
  ["002", "Coca-Cola Light 600ml", 18.50],
  ["003", "Coca-Cola Sin Azúcar 600ml", 18.50],
  ["004", "Sprite 600ml", 17.00],
  ["005", "Fresca 600ml", 17.00],
  ["006", "Fanta Naranja 600ml", 17.00],
  ["007", "Pepsi 600ml", 17.50],
  ["008", "7Up 600ml", 16.50],
  ["009", "Manzanita Sol 600ml", 16.50],
  ["010", "Agua Ciel 1L", 14.00],
  ["011", "Agua Bonafont 1L", 14.50],
  ["012", "Agua Epura 1L", 14.00],
  ["013", "Topo Chico 600ml", 22.00],
  ["014", "Jugo Del Valle Mango 413ml", 20.00],
  ["015", "Jumex Manzana 450ml", 21.00],
  ["016", "Gatorade Naranja 500ml", 25.00],
  ["017", "Powerade Moras 500ml", 24.00],
  ["018", "Monster Energy 473ml", 42.00],
  ["019", "Red Bull 250ml", 45.00],
  ["020", "Electrolit Fresa 625ml", 32.00],

  // Botanas (21-40)
  ["021", "Sabritas Sal 170g", 45.00],
  ["022", "Ruffles Queso 120g", 42.00],
  ["023", "Doritos Nacho 146g", 44.00],
  ["024", "Cheetos Torciditos 145g", 38.00],
  ["025", "Tostitos Salsa Verde 65g", 22.00],
  ["026", "Fritos Sal y Limón 170g", 40.00],
  ["027", "Rancheritos 145g", 38.00],
  ["028", "Churrumais 145g", 25.00],
  ["029", "Takis Fuego 280g", 48.00],
  ["030", "Runners 145g", 35.00],
  ["031", "Kacang Japoneses 100g", 20.00],
  ["032", "Cacahuates Mafer 100g", 28.00],
  ["033", "Paketaxo Mezcladito 215g", 55.00],
  ["034", "Sabritones 160g", 36.00],
  ["035", "Pinguinos Marinela 80g", 22.00],
  ["036", "Choco Roles 80g", 22.00],
  ["037", "Gansito 50g", 18.00],
  ["038", "Submarinos Vainilla 75g", 20.00],
  ["039", "Barritas Fresa 67g", 19.00],
  ["040", "Polvorones Tia Rosa 116g", 21.00],

  // Galletas y Panadería (41-55)
  ["041", "Galletas Emperador Chocolate 101g", 18.50],
  ["042", "Chokis Clásicas 84g", 19.00],
  ["043", "Galletas Oreo 114g", 21.00],
  ["044", "Marias Gamesa 170g", 17.00],
  ["045", "Ritz 93g", 18.00],
  ["046", "Triki Trakes 86g", 18.50],
  ["047", "Pan Blanco Bimbo Grande", 48.00],
  ["048", "Pan Integral Bimbo Grande", 52.00],
  ["049", "Medias Noches Bimbo 8pz", 42.00],
  ["050", "Nito Bimbo 62g", 16.00],
  ["051", "Mantecadas Bimbo Vainilla 4pz", 25.00],
  ["052", "Donas Bimbo Espolvoreadas 4pz", 24.00],
  ["053", "Roles de Canela Bimbo 2pz", 26.00],
  ["054", "Tortillinas Tia Rosa 10pz", 28.00],
  ["055", "Pan Tostado Bimbo Clásico", 35.00],

  // Dulces y Chocolates (56-70)
  ["056", "Snickers 48g", 28.00],
  ["057", "Milky Way 48g", 28.00],
  ["058", "Carlos V 18g", 12.00],
  ["059", "Hershey's Almendras 38g", 25.00],
  ["060", "M&M's Cacahuate 49g", 29.00],
  ["061", "Kinder Sorpresa 20g", 32.00],
  ["062", "Pelon Pelo Rico 30g", 10.00],
  ["063", "Skittles Original 55g", 22.00],
  ["064", "Halls Miel 25g", 13.00],
  ["065", "Trident Menta 18g", 15.00],
  ["066", "Clorets 18g", 15.00],
  ["067", "Bubbaloo Fresa (1 pz)", 2.00],
  ["068", "Paleta Payaso 45g", 18.00],
  ["069", "Duvalin Avellana Vainilla", 6.00],
  ["070", "Mazapán De la Rosa 28g", 8.00],

  // Abarrotes y Básicos (71-85)
  ["071", "Leche Lala Entera 1L", 28.00],
  ["072", "Leche Alpura Clásica 1L", 27.50],
  ["073", "Huevo San Juan 12pz", 45.00],
  ["074", "Aceite Nutrioli 850ml", 48.00],
  ["075", "Frijoles Isadora Refritos 430g", 22.00],
  ["076", "Atún Dolores en Agua 140g", 21.00],
  ["077", "Atún Tuny en Aceite 140g", 20.00],
  ["078", "Mayonesa McCormick 190g", 29.00],
  ["079", "Ketchup Heinz 397g", 34.00],
  ["080", "Salsa Valentina Etiqueta Amarilla 370ml", 18.00],
  ["081", "Puré de Tomate Del Fuerte 210g", 9.00],
  ["082", "Sopa Maruchan Pollo 64g", 18.00],
  ["083", "Sopa Maruchan Camarón 64g", 18.00],
  ["084", "Café Nescafé Clásico 120g", 68.00],
  ["085", "Azúcar Estándar Zulka 1kg", 32.00],

  // Cuidado Personal, Higiene y Otros (86-100)
  ["086", "Papel Higiénico Pétalo 4pz", 35.00],
  ["087", "Jabón Zest Aqua 90g", 16.00],
  ["088", "Jabón Palmolive Naturals 90g", 18.00],
  ["089", "Shampoo Caprice 750ml", 45.00],
  ["090", "Pasta Dental Colgate Máxima Protección 100ml", 32.00],
  ["091", "Cepillo Dental Colgate Premier", 25.00],
  ["092", "Desodorante Rexona Aerosol Hombre", 65.00],
  ["093", "Toallas Femeninas Kotex Naturals 10pz", 30.00],
  ["094", "Rastrillo Gillette Prestobarba 3", 38.00],
  ["095", "Detergente Ariel en Polvo 1kg", 42.00],
  ["096", "Suavitel Cuidado Superior 850ml", 28.00],
  ["097", "Sal de Uvas Picot 1pz", 6.00],
  ["098", "Aspirina 500mg 40pz", 55.00],
  ["099", "Condones Sico Safety 3pz", 58.00],
  ["100", "Encendedor BIC Clásico", 22.00]
];


var total = 0;
var subtotal = 0;

function buscarproducto(event){
    if(event.keyCode === 13){
        var cantidad = 1;
        var codigo_producto = document.getElementById('codigodelproducto').value;
        
        if(codigo_producto.indexOf("*") === -1){

            var cantidad = 1;

        } else{
            cantidad = codigo_producto.split("*")[0];
            codigo_producto = codigo_producto.split("*")[1];
        }


        for(let i = 0; i < productos.length; i++){
            if(productos[i][0] === codigo_producto){
                var tabla = document.getElementById('cuerpo');
                var renglon = tabla.insertRow();

                var celda1 = renglon.insertCell(0);
                var celda2 = renglon.insertCell(1);
                var celda3 = renglon.insertCell(2);
                var celda4 = renglon.insertCell(3);

                celda1.setAttribute("style", "text-align: center;");
                celda2.setAttribute("style", "text-align: left;");
                celda3.setAttribute("style", "text-align: right;");
                celda4.setAttribute("style", "text-align: right;");

                celda1.innerHTML = cantidad;
                celda2.innerHTML = productos[i][1];
                celda3.innerHTML = productos[i][2].toFixed(2);

                subtotal = cantidad * parseFloat(productos[i][2].toFixed(2));
                celda4.innerHTML = subtotal;

                total += parseFloat(subtotal.toFixed(2));
                document.getElementById("total").innerHTML = "$" + total.toFixed(2);

                subtotal = 0;
                break;
            }
        }

        document.getElementById("codigodelproducto").value = "";
    }
}


function cancelar_venta() {
    var resultado = confirm("Estas seguro de cancelar la venta?");

    if (resultado == true) {
        document.getElementById("cuerpo").innerHTML = "";
        total = 0;
        document.getElementById("total").innerHTML = "$0.00";
        document.getElementById("codigodelproducto").value = "";
    }
}


function saldo_camion() {
    var saldo = prompt("Ingrese el saldo del UNE: ");
    var tabla = document.getElementById('cuerpo');
    var renglon = tabla.insertRow();

    var celda1 = renglon.insertCell(0);
    var celda2 = renglon.insertCell(1);
    var celda3 = renglon.insertCell(2);
    var celda4 = renglon.insertCell(3);

    celda1.setAttribute("style", "text-align: center;");
    celda2.setAttribute("style", "text-align: left;");
    celda3.setAttribute("style", "text-align: right;");
    celda4.setAttribute("style", "text-align: right;");

    celda1.innerHTML = "1";
    celda2.innerHTML = "Saldo camión";
    celda3.innerHTML = saldo;
    celda4.innerHTML = saldo;

    total += parseFloat(saldo);
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
}



function pagar() {
    var feria = parseFloat(document.getElementById("codigodelproducto").value) - total;
    document.getElementById("codigodelproducto").value = "feria: $" + feria;
}


function tranferencia() {
    let input;
    let regex16Digitos = /^\d{16}$/; // Valida que sean exactamente 16 números

    do {
        input = prompt("Por favor, ingresa un valor de exactamente 16 dígitos:");
        
        // Si el usuario presiona "Cancelar", input será null, salimos para evitar bucle infinito
        if (input === null) {
            break;
        }
        
        if (!regex16Digitos.test(input)) {
            alert("¡Error! Debes ingresar exactamente 16 números.");
        }
        
    } while (!regex16Digitos.test(input));

    if (input !== null) {
        alert("¡Dato válido ingresado correctamente!");
    }
}
