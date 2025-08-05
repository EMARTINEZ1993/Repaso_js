// ------------------------------------------------------------------------
// 💡 Un "callback" es una función que se pasa como argumento a otra función,
// y que se ejecuta en algún momento dentro de esa función (por ejemplo, al hacer clic).
// Aquí usamos callbacks en eventos DOM como addEventListener.
// ------------------------------------------------------------------------



// -------------------- Callback 1: Saludar al usuario --------------------

// Definimos la función que será usada como callback
const saludarUsuario = () => {
  // Obtenemos el valor del input de nombre y eliminamos espacios
  const nombre = document.getElementById("miInput").value.trim();

  // Validamos si el input está vacío
  if (nombre === "") {
    document.getElementById("resultado").innerText = "Por favor ingresa un nombre.";
  } else {
    // Mostramos saludo personalizado
    document.getElementById("resultado").innerText = `Hola, ${nombre}! 👋`;
  }
};

// Usamos la función `saludarUsuario` como callback cuando el botón es clickeado
document.getElementById("miBoton").addEventListener("click", saludarUsuario);




// -------------------- Callback 2: Sumar dos números --------------------

// Definimos la función que suma los números del formulario
const sumar = () => {
  const n1 = parseFloat(document.getElementById('n1').value); // Primer número
  const n2 = parseFloat(document.getElementById('n2').value); // Segundo número

  // Validamos que ambos valores sean números válidos
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById('resultadoSuma').innerText = "Ingresa números válidos.";
    return;
  }

  const resultado = n1 + n2;

  // Mostramos el resultado en pantalla
  document.getElementById('resultadoSuma').innerText = `Resultado: ${resultado}`;
};

// Usamos la función `sumar` como callback para el evento click
document.getElementById("botonSumar").addEventListener("click", sumar);




// -------------------- Callback 3: Calcular una compra --------------------

// Definimos una función callback para manejar una compra
const manejarCompra = () => {
  const producto = document.getElementById('producto').value.trim();       // Nombre del producto
  const cantidad = parseInt(document.getElementById('cantidad').value);   // Cantidad
  const precio = parseFloat(document.getElementById('precio').value);     // Precio unitario

  // Validamos que los datos sean correctos
  if (producto === "" || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  const total = cantidad * precio;

  // Mostramos el total a pagar en el input deshabilitado
  document.getElementById('resultado_Compra').value = `Total: $${total.toFixed(2)}`;
};

// Usamos la función `manejarCompra` como callback en el botón de compra
document.getElementById('botonCompra').addEventListener("click", manejarCompra);
