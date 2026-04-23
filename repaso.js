function mostrar(opcion) {
    switch (opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
            default:
                break;
    }
}
function ejercicio1() {
    for (let i=1; i<=5; i++) {
        console.log(i);
    }
}
function ejercicio2() {
    for (let i = 100; i <= 1000; i+=100) {
        console.log(i);
    }   
}
function ejercicio3() {
    for (let i = 1000; i >= 800; i-=100) {
        console.log(i*2);
    }
}
function mostrarMensaje1() { 
    for (let i=5; i<=2; i--) {
        console.log("Hola Mundo");
    }   
}