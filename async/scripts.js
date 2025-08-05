  function verificarVoto(edad) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (edad >= 18) {
            resolve("✅ Puedes votar.");
          } else {
            resolve("❌ No puedes votar.");
          }
        }, 1000);
      });
    }

    async function puedeVotar() {
      const edad = parseInt(document.getElementById("edad").value);
      const resultado = await verificarVoto(edad);
      document.getElementById("resultado").textContent = resultado;
    }


    function obtenerUsuario(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const usuarios = {
            1: "Ana",
            2: "Carlos",
            3: "Laura"
          };
          if (usuarios[id]) {
            resolve(`👤 Usuario encontrado: ${usuarios[id]}`);
          } else {
            reject("❌ Usuario no encontrado.");
          }
        }, 1500);
      });
    }

    async function buscarUsuario() {
      const id = document.getElementById("userId").value;
      const resultado = document.getElementById("usuarioResultado");

      try {
        const mensaje = await obtenerUsuario(id);
        resultado.textContent = mensaje;
        resultado.style.color = "green";
      } catch (error) {
        resultado.textContent = error;
        resultado.style.color = "red";
      }
    }

     function calcularTotal(precio, cantidad) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (precio > 0 && cantidad > 0) {
            resolve(precio * cantidad);
          } else {
            reject("❌ Precio o cantidad inválidos.");
          }
        }, 1000);
      });
    }

    async function calcularCompra() {
      const precio = parseFloat(document.getElementById("precio").value);
      const cantidad = parseInt(document.getElementById("cantidad").value);
      const resultado = document.getElementById("compraResultado");

      try {
        const total = await calcularTotal(precio, cantidad);
        resultado.textContent = `Total a pagar: $${total}`;
        resultado.style.color = "green";
      } catch (error) {
        resultado.textContent = error;
        resultado.style.color = "red";
      }
    }



// Referencias a elementos del DOM
const btn = document.getElementById("btnCargar");
const lista = document.getElementById("listaUsuarios");

// Función asincrónica que usa async/await para consultar la API
const obtenerUsuarios = async () => {
  lista.innerHTML = "<li>Cargando usuarios...</li>";

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      throw new Error("Error al obtener datos de la API");
    }

    const usuarios = await respuesta.json(); // Esperamos los datos

    lista.innerHTML = ""; // Limpiamos la lista antes de insertar

    usuarios.forEach(usuario => {
      const li = document.createElement("li");
      li.textContent = `👤 ${usuario.name} | 📧 ${usuario.email} | 🏙️ ${usuario.address.city}`;
      lista.appendChild(li);
    });

  } catch (error) {
    lista.innerHTML = `<li style="color:red;">${error.message}</li>`;
  }
};

// Asignamos la función como callback con async al botón
btn.addEventListener("click", obtenerUsuarios);
