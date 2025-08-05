// -------------------- Saludo al usuario --------------------

// Al hacer clic en el botón "miBoton", se ejecuta la función flecha como callback
document.getElementById("miBoton").addEventListener("click", () => {
  // Obtenemos el valor del input "miInput" y eliminamos espacios
  const nombre = document.getElementById("miInput").value.trim();

  // Validamos si el campo está vacío
  if (nombre === "") {
    document.getElementById("resultado").innerText = "Por favor ingresa un nombre.";
  } else {
    // Si hay nombre, mostramos un saludo personalizado
    document.getElementById("resultado").innerHTML = `Hola, ${nombre}! 👋`;
  }
});



// -------------------- Sumar dos números --------------------

document.getElementById("botonSumar").addEventListener("click", () => {
  // Obtenemos los valores de los inputs numéricos
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);

  // Verificamos si los valores son válidos (números)
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById('resultadoSuma').innerText = "Ingresa números válidos.";
    return; // Salimos si hay error
  }

  // Realizamos la suma
  const sumar = n1 + n2;

  // Mostramos el resultado en el DOM
  document.getElementById('resultadoSuma').innerText = `Resultado: ${sumar}`;
});



// -------------------- Calcular total de compra --------------------

document.getElementById('botonCompra').addEventListener("click", () => {
  // Obtenemos valores desde los inputs
  const producto = document.getElementById('producto').value;
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);

  // Validamos que todos los campos estén correctos
  if (producto === "" || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor, completa todos los campos correctamente.");
    return; // Si no son válidos, detenemos la ejecución
  }

  // Calculamos el total de la compra (cantidad * precio)
  const total = cantidad * precio;

  // Mostramos el resultado en el input deshabilitado
  document.getElementById('resultado_Compra').value = total;
});
