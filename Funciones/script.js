function saludar() {
    let texto = document.getElementById("miInput").value;

    document.getElementById("miInput").value = ""; // Limpiar el input
    document.getElementById("resultado").innerText = "El texto ingresado es: " + texto;
};


function sumar(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);

    let suma =n1+n2;
    document.getElementById('resultadoSuma').innerText="Resultado: " +suma;
}