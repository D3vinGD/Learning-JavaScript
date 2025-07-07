class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;

        this.iniciada = false;
        this.instalada = false;
    }
    appInfo(){
        return `
        Descargas: ${this.descargas} <br>
        Puntuacion: ${this.puntuacion} <br>
        Peso: ${this.peso} <br> <hr>
        `;
    }
    abrir(){
        if(!this.iniciada && this.instalada){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada && this.instalada){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            alert("instalando app...");
            this.instalada = true;
        }
    }
    desinstalar(){
        if(this.instalada){
            alert("desinstalando app...");
            this.instalada = false;
        }
    }
}

const geometryDash = new App("460.000","4 Estrellas","400mb");
const TrashRoyale = new App("900.000","0.1 Estrellas","No lo investigare es una mierda");
const Pubg = new App("1.000","4.3 Estrellas","1.6GB");
const AngryBirds = new App("230.000","3.5 Estrellas","130mb");
const Pou = new App("50.000.000","5 Estrellas","300mb");
const FruitNinja = new App("142.000","2.1 Estrellas","500mb");
const Minecraft = new App("2.000.000","5 Estrellas","900mb");

geometryDash.instalar();
geometryDash.abrir();
geometryDash.cerrar();
geometryDash.desinstalar();


document.write(`
    ${geometryDash.appInfo()} <br>
    ${TrashRoyale.appInfo()} <br>
    ${Pubg.appInfo()} <br>
    ${AngryBirds.appInfo()} <br>
    ${Pou.appInfo()} <br>
    ${FruitNinja.appInfo()} <br>
    ${Minecraft.appInfo()} <br>
    `);

