const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

botonEncriptar = () => {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    inputTexto.focus();
}

botonDesencriptar = () => {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
    inputTexto.focus();
}

botonCopiar = () => {
    if (mensaje.value != ""){
        mensaje.select();

        navigator.clipboard.writeText(mensaje.value);

        alert("Se ha copiado el texto. ");

        mensaje.value = "";      
    }

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
