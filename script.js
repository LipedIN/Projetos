function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = " ";
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    });
    console.log(textoArray);
}
    const titulo = document.querySelector('h1');
    typeWriter(titulo);