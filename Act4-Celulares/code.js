class Celular {
    constructor(color,peso,resolucion,camara,ram) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;

        this.encendido = false;
    }
    
    PrenderApagar(){
        if(this.encendido == false){
            alert("celulra encendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
            this.encendido = false;
        }
    }

    Reiniciar(){
        if(this.encendido){
            alert("reinciando...");
        }else{
            alert("el celular esta apagado");
        }
    }
    TomarFoto(){
        alert(`foto tomada. Resolucion de: ${this.camara}`);
    }
    Grabar(){
        alert(`grabando video. Con Resolucion de: ${this.camara}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Pantalla: <b>${this.resolucion}</b></br>
        Resolucion: <b>${this.camara}</b></br>
        Memoria RAM: <b>${this.ram}</b></br>

        `;
    }
}

class CelularGamaAlta extends Celular{
    constructor(color,peso,resolucion,camara,ram, camaraXtra) {
        super(color,peso,resolucion,camara,ram);
        this.camaraXtra = camaraXtra;
    }
    grabarLento(){
        alert("Grabando en camara lenta");
    }
    recoFacial(){
        alert("pon la jeta pendejo a ver si eres puto");
    }

    infoGamaAlta(){
        return this.mobileInfo() + `Resolucion Trasera: ${this.camaraXtra}`;
    }
}
const celular1 = new Celular("rojo","400g","4'","HD","2GB");
const celular2 = new Celular("azul","500g","5.5'","Full HD","4GB");
const celular3 = new Celular("negro","610g","5'","HD","2GB");

const celular4 = new CelularGamaAlta("dorado","800g","6`","Full HD 4K","8GB","4K");
const celular5 = new CelularGamaAlta("Plateado","800g","6`","Full HD 4K","16GB","4K");

celular1.PrenderApagar();
celular1.TomarFoto();
celular1.Reiniciar();
celular1.Grabar();
celular1.PrenderApagar();

document.write(`
    ${celular1.mobileInfo()} <br> <hr>
    ${celular2.mobileInfo()} <br> <hr>
    ${celular3.mobileInfo()} <br> <hr>
    ${celular4.infoGamaAlta()} <br> <hr>
    ${celular5.infoGamaAlta()} <br> <hr>
    `);