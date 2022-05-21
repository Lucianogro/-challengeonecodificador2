const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".cifrado-text");
var botoncopiar = document.getElementById("botonCopiar");
var descripcioncopiar = document.getElementById("descripcionCopiar");


botonEncriptar = () => {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mostrarCopiar();
    inputTexto.value = "";
    mensaje.focus();
}

botonDesencriptar = () => {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mostrarCopiar();
    inputTexto.value = "";
    mensaje.focus();
}


botonCopiar = () => {
    mensaje.select();

    descripcioncopiar.innerHTML = "Copiado: " + mensaje.value;

    navigator.clipboard.writeText(mensaje.value);

    mensaje.value = "";      
    
    ocultarCopiar();

    inputTexto.focus();
}

encriptar = (texto) => {
     
    let matrizCodigo =  [

        ["e","enter"], 
        ["i","imes"], 
        ["a","ai"], 
        ["o","ober"],
        ["u","ufat"]

    ]

    texto = texto.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return texto;

}

desencriptar = (texto) => {
    let matrizCodigo =  [

        ["enter","e"], 
        ["imes","i"], 
        ["ai","a"], 
        ["ober","o"],
        ["ufat","u"]

    ]

    texto = texto.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return texto;
}

descripcion = () => {
    descripcioncopiar.innerHTML = "Copiar texto";
}

mostrarCopiar = () =>{
    if(mensaje.value!=""){
        botoncopiar.style.visibility = "visible";
    }
}

ocultarCopiar = () => {
    botoncopiar.style.visibility = "hidden";
}