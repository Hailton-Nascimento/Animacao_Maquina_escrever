function typeWrite(elemento) {
    const textoArray = (elemento.innerText).split('');
    elemento.innerHTML = "";
    elemento.classList.add('cursor');
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);


    })


}


const fraseh1 = document.querySelector(".title");
const fraseh2 = document.querySelector("h2");

typeWrite(fraseh1);
typeWrite(fraseh2);