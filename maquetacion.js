

console.log("hola amigos+++");
function IniciarSesion(){
    // var valor = document.getElementById("usuario").value;
    var valor = document.querySelector("#usuario").value;
    console.log(valor);
    document.getElementById('nombre').textContent = valor;
    // console.log("hola amigos");
}
function Conversor(){
    // var valor = document.getElementById("usuario").value;
    var valor = document.querySelector("#bolivianos").value;
    console.log(valor);
    valor = valor * 6.91;
    valor = Math.round(valor * 100) / 100;
    document.getElementById('dolares').textContent = "$US. "+ valor;
    // console.log("hola amigos");
}