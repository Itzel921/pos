function abrirModal(){
    let input;
    let regex10Digitos = /^\d{10}$/; // Valida que sean exactamente 10 números

    do {
        input = prompt("Por favor, ingresa un valor de exactamente 10 dígitos:");
        
        // Si el usuario presiona "Cancelar", input será null, salimos para evitar bucle infinito
        if (input === null) {
            break;
        }
        
        if (!regex10Digitos.test(input)) {
            alert("¡Error! Debes ingresar exactamente 10 números.");
        }
        
    } while (!regex10Digitos.test(input));


    document.getElementById("modal").style.display="flex";
}


function saldo20(){
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
    celda2.innerHTML = "Saldo 20.00";
    celda3.innerHTML = "20.00";
    celda4.innerHTML = "20.00";

    total += parseFloat("20.00");
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();

    cerrarModal();
}


function saldo100(){
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
    celda2.innerHTML = "Paquete sin limite 100";
    celda3.innerHTML = "100.00";
    celda4.innerHTML = "100.00";

    total += parseFloat("100.00");
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
    cerrarModal();
}

function saldo200(){
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
    celda2.innerHTML = "Paquete sin limite 200";
    celda3.innerHTML = "200.00";
    celda4.innerHTML = "200.00";

    total += parseFloat("200.00");
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
    cerrarModal();
}

function saldo500(){
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
    celda2.innerHTML = "Paquete sin limite 500";
    celda3.innerHTML = "500.00";
    celda4.innerHTML = "500.00";

    total += parseFloat("500.00");
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
    cerrarModal();
}


function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}



