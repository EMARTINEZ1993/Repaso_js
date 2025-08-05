function saludarConPromesa(nombre) {
  return new Promise((resolve, reject) => {
    if (nombre.trim() !== "") {
      resolve("Hola, " + nombre + " 👋");
    } else {
      reject("Por favor ingresa un nombre válido.");
    }
  });
}
document.getElementById("btnSaludar").addEventListener("click", () => {
  const nombre = document.getElementById("nombreInput").value;
  const resultado = document.getElementById("resultado");
  saludarConPromesa(nombre)
    .then(mensaje => {
      resultado.textContent = mensaje;
      resultado.style.color = "green";
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.style.color = "red";
    });
});
function sumar() {
  const n1 = parseFloat(document.getElementById("n1").value); // Convertir el primer valor a número decimal
  const n2 = parseFloat(document.getElementById("n2").value); // Convertir el segundo valor a número decimal
  const resultado = document.getElementById("resultadoSuma"); // Elemento donde se mostrará el resultado
  resultado.innerText = "Calculando..."; // Mensaje provisional mientras se resuelve la promesa
  sumarConPromesa(n1, n2)
    .then(suma => {
      resultado.innerText = `Resultado: ${suma}`;
    })
    .catch(error => {
      resultado.innerText = error;
    });
}
function verificarMayorEdad(edad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(edad) || edad <= 0) {
        reject("❌ Por favor ingresa una edad válida.");
      } else if (edad >= 18) {
        resolve("✅ Eres mayor de edad.");
      } else {
        resolve("⚠️ Eres menor de edad.");
      }
    }, 1500);
  });
}
document.getElementById("btnVerificar").addEventListener("click", () => {
  const edad = parseInt(document.getElementById("edadInput").value);
  const resultado = document.getElementById("resultadoEdad");
  resultado.textContent = "Verificando... ⏳";
  resultado.style.color = "#333";
  verificarMayorEdad(edad)
    .then(mensaje => {
      resultado.textContent = mensaje;
      resultado.style.color = "green";
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.style.color = "red";
    });
});
const sumarConPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(a) || isNaN(b)) {
        reject("Error: Ambos valores deben ser números.");
      } else {
        resolve(a + b); // Si son válidos, resolvemos con la suma
      }
    }, 1000); // Simulamos espera de 1 segundo
  });
};
const btn = document.getElementById("btnCargar");         // Botón para cargar los datos
const lista = document.getElementById("listaUsuarios");   // Lista donde se mostrarán los usuarios
const obtenerUsuarios = () => {
  fetch("https://jsonplaceholder.typicode.com/users")     // Llamado a la API
    .then(respuesta => {
      if (!respuesta.ok) throw new Error("Error al consultar la API");
      return respuesta.json(); // Convertimos la respuesta a JSON
    })
    .then(usuarios => {
      lista.innerHTML = ""; // Limpiamos la lista antes de mostrar
      usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `👤 ${usuario.name} | 📧 ${usuario.email} | 🏙️ ${usuario.address.city}`;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      lista.innerHTML = `<li style="color:red;">${error.message}</li>`;
    });
};
btn.addEventListener("click", obtenerUsuarios);