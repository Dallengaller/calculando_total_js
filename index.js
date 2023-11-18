
precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function incrementar() {
    parrafo = document.querySelector('#cantidad');
    cuenta = Number(parrafo.innerHTML);
    cuenta = cuenta + 1;
    parrafo.innerHTML  = cuenta;
    total = document.querySelector('#valor-total');
    total.innerHTML = cuenta * precio;
}

function disminuir() {
    parrafo = document.querySelector('#cantidad');
    cuenta = Number(parrafo.innerHTML);
    cuenta = cuenta - 1;
    parrafo.innerHTML  = cuenta;
    total = document.querySelector('#valor-total');
    total.innerHTML = cuenta * precio;
}









