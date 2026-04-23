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
        console.log(i);
    }
}
function mostrarMensaje1() { 
    for (let i=5; i<8; i++) {
        console.log("Hola Mundo");
    }   
}
function mostrarMensaje2() {
    for (let i = 10; i >= 8; i--) { 
        console.log("Hola Mundo");
    }
}
function mostrarMensaje3() {
    for (let i = 0; i < 3; i++) {
        console.log("Hola Mundo");
    }
}
 
function mostrarMensaje4() {
    for (let i = 8; i > 5; i--) {
        console.log("Hola Mundo");
    }
}
//tabla de multiplicar del 3
function mostrarTabla() {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " x 3 = " + (i * 3));
    }
}