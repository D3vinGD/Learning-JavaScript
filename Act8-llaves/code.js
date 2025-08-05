const contenedor = document.querySelector(".flex-container");
let contador = 0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img = `<img class="llave" src= "llave.jpg">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p>precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio]
}

let fragmento = document.createDocumentFragment()

for (var i = 1;i <= 20;i++){
    let precioRandom = Math.round(Math.random()*10+30);
    let modeloRandom = Math.round(Math.random()*1000);
    let llave = crearLlave(`llave${i}`,`Modelo: ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{document.querySelector(".key-data").value = modeloRandom})
    div.tabIndex = i;
    div.classList.add(`item-${i}`,"flex-item");
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);
}
contenedor.appendChild(fragmento);
