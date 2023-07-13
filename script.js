/* ABRIR Y CERRAR DERECHA OPCIONES */
var boton_abrir_contenedor_whatsapp_derecha_opciones = document.getElementById(
  "abrir_contenedor_whatsapp_derecha_opciones"
);

var estilo_contenedor_whatsapp_derecha_opciones = document.querySelector(
  ".contenedor_whatsapp_derecha_opciones"
);

estilo_contenedor_whatsapp_derecha_opciones.style.display = "none";

boton_abrir_contenedor_whatsapp_derecha_opciones.addEventListener(
  "click",
  function () {
    if (
      getComputedStyle(estilo_contenedor_whatsapp_derecha_opciones).display ===
      "none"
    ) {
      estilo_contenedor_whatsapp_derecha_opciones.style.display = "block";
      setTimeout(function () {
        estilo_contenedor_whatsapp_derecha_opciones.style.maxWidth = "100%";
      }, 10);
    } else {
      estilo_contenedor_whatsapp_derecha_opciones.style.maxWidth = "0";
      setTimeout(function () {
        estilo_contenedor_whatsapp_derecha_opciones.style.display = "none";
      }, 20);
    }
  }
);

var boton_cerrar_contenedor_whatsapp_derecha_opciones = document.getElementById(
  "cerrar_contenedor_whatsapp_derecha_opciones"
);

boton_cerrar_contenedor_whatsapp_derecha_opciones.addEventListener(
  "click",
  function () {
    estilo_contenedor_whatsapp_derecha_opciones.style.maxWidth = "0";
    setTimeout(function () {
      estilo_contenedor_whatsapp_derecha_opciones.style.display = "none";
    }, 20);
  }
);

/* ESCUCHAR ANCHO DE IZQUIERDA OPCIONES */
var contenedorPrincipal = document.querySelector(
  ".contenedor_whatsapp_izquierda"
);
var contenedorOpciones = document.querySelector(
  ".contenedor_whatsapp_izquierda_opciones"
);

function actualizarAnchoOpciones() {
  var ancho = getComputedStyle(contenedorPrincipal).width;
  contenedorOpciones.style.width = ancho;
  window.requestAnimationFrame(actualizarAnchoOpciones);
}

actualizarAnchoOpciones();

/* ABRIR Y CERRAR IZQUIERDA OPCIONES */
var boton_abrir_contenedor_whatsapp_izquierda_opciones =
  document.getElementById("abrir_contenedor_whatsapp_izquierda_opciones");
var estilo_contenedor_whatsapp_izquierda_opciones = document.querySelector(
  ".contenedor_whatsapp_izquierda_opciones"
);

boton_abrir_contenedor_whatsapp_izquierda_opciones.addEventListener(
  "click",
  function () {
    estilo_contenedor_whatsapp_izquierda_opciones.style.left = "0";
  }
);

var boton_cerrar_contenedor_whatsapp_izquierda_opciones =
  document.getElementById("cerrar_contenedor_whatsapp_izquierda_opciones");

boton_cerrar_contenedor_whatsapp_izquierda_opciones.addEventListener(
  "click",
  function () {
    estilo_contenedor_whatsapp_izquierda_opciones.style.left = "-100%";
  }
);

/* ABRIR Y CERRAR CONTENEDOR ICONO OPCIONES PERFIL */
var boton_abrir_contenedor_icono_opciones_perfil = document.getElementById("abrir_contenedor_icono_opciones_perfil");
var estilo_contenedor_icono_opciones_perfil = document.querySelector(".contenedor_icono_opciones_perfil");
var estado_estilo_contenedor_icono_opciones_perfil = false;

boton_abrir_contenedor_icono_opciones_perfil.addEventListener("click", function () {
  estado_estilo_contenedor_icono_opciones_perfil = !estado_estilo_contenedor_icono_opciones_perfil;

  if (estado_estilo_contenedor_icono_opciones_perfil) {
    estilo_contenedor_icono_opciones_perfil.style.display = "block";
  } else {
    estilo_contenedor_icono_opciones_perfil.style.display = "none";
  }
});

/* ABRIR Y CERRAR CONTENEDOR ICONO OPCIONES CHAT */
var boton_abrir_contenedor_icono_opciones_chat = document.getElementById("abrir_contenedor_icono_opciones_chat");
var estilo_contenedor_icono_opciones_chat = document.querySelector(".contenedor_icono_opciones_chat");
var estado_estilo_contenedor_icono_opciones_chat = false;

boton_abrir_contenedor_icono_opciones_chat.addEventListener("click", function () {
  estado_estilo_contenedor_icono_opciones_chat = !estado_estilo_contenedor_icono_opciones_chat;

  if (estado_estilo_contenedor_icono_opciones_chat) {
    estilo_contenedor_icono_opciones_chat.style.display = "block";
  } else {
    estilo_contenedor_icono_opciones_chat.style.display = "none";
  }
});

/* ABRIR Y CERRAR CONTENEDOR ICONO OPCIONES FILTRO */
var boton_abrir_contenedor_icono_opciones_filtro = document.getElementById("abrir_contenedor_icono_opciones_filtro");
var estilo_contenedor_icono_opciones_filtro = document.querySelector(".contenedor_icono_opciones_filtro");
var estado_estilo_contenedor_icono_opciones_filtro = false;

boton_abrir_contenedor_icono_opciones_filtro.addEventListener("click", function () {
  estado_estilo_contenedor_icono_opciones_filtro = !estado_estilo_contenedor_icono_opciones_filtro;

  if (estado_estilo_contenedor_icono_opciones_filtro) {
    estilo_contenedor_icono_opciones_filtro.style.display = "block";
  } else {
    estilo_contenedor_icono_opciones_filtro.style.display = "none";
  }
});

/* ABRIR Y CERRAR CONTENEDOR ICONO OPCIONES HERRAMIENTAS */
var boton_abrir_contenedor_icono_opciones_herramientas = document.getElementById("abrir_contenedor_icono_opciones_herramientas");
var estilo_contenedor_icono_opciones_herramientas = document.querySelector(".contenedor_icono_opciones_herramientas");
var estado_estilo_contenedor_icono_opciones_herramientas = false;

boton_abrir_contenedor_icono_opciones_herramientas.addEventListener("click", function () {
  estado_estilo_contenedor_icono_opciones_herramientas = !estado_estilo_contenedor_icono_opciones_herramientas;

  if (estado_estilo_contenedor_icono_opciones_herramientas) {
    estilo_contenedor_icono_opciones_herramientas.style.display = "block";
  } else {
    estilo_contenedor_icono_opciones_herramientas.style.display = "none";
  }
});

/* ABRIR Y CERRAR CONTENEDOR ICONO OPCIONES EMOTICONES */
var boton_abrir_contenedor_icono_opciones_emoticones = document.getElementById("abrir_contenedor_icono_opciones_emoticones");
var estilo_contenedor_icono_opciones_emoticones = document.querySelector(".contenedor_icono_opciones_emoticones");
var estado_estilo_contenedor_icono_opciones_emoticones = false;

boton_abrir_contenedor_icono_opciones_emoticones.addEventListener("click", function () {
  estado_estilo_contenedor_icono_opciones_emoticones = !estado_estilo_contenedor_icono_opciones_emoticones;

  if (estado_estilo_contenedor_icono_opciones_emoticones) {
    estilo_contenedor_icono_opciones_emoticones.style.display = "block";
    setTimeout(function () {
      estilo_contenedor_icono_opciones_emoticones.style.transform = "translateY(0)";
    }, 10);
  } else {
    estilo_contenedor_icono_opciones_emoticones.style.transform = "translateY(100%)";
    setTimeout(function () {
      estilo_contenedor_icono_opciones_emoticones.style.display = "none";
    }, 500);
  }
});
