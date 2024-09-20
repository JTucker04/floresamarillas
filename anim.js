var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Flores amarillas", time: 8 },
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 25 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 33 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 41 },
  { text: "Ella sabía que él sabía", time: 47 },
  { text: "Que algún día pasaría", time: 48 },
  { text: "Que vendría a buscarla", time: 50 },
  { text: "Con sus flores amarillas", time: 53 },
  { text: "No te apures, no detengas, el instante del encuentro", time: 60 },
  { text: "Está dicho que es un hecho", time: 62 },
  { text: "No la pierdas, no hay derecho", time: 64 },
  { text: "No te olvides que la vida", time: 67 },
  { text: "Casi nunca está dormida", time: 72 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 94 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente la miró tan de frente", time: 110 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 118 },
  { text: "Ella sabía que él sabía", time: 124 },
  { text: "Que algún día pasaría", time: 125 },
  { text: "Que vendría a buscarla", time: 127 },
  { text: "Con sus flores amarillas", time: 130 },
  { text: "No te apures, no detengas,el instante del encuentro", time: 137 },
  { text: "Está dicho que es un hecho", time: 139 },
  { text: "No la pierdas, no hay derecho", time: 141 },
  { text: "No te olvides que la vida", time: 144 },
  { text: "Casi nunca está dormida", time: 149 },
  { text: "Flores amarillas", time: 161 },
  { text: "Ella sabía que él sabía", time: 169 },
  { text: "Que algún día pasaría", time: 170 },
  { text: "Que vendría a buscarla", time: 172 },
  { text: "Con sus flores amarillas", time: 175 },
  { text: "No te apures, no detengas, el instante del encuentro", time: 182 },
  { text: "Está dicho que es un hecho", time: 184 },
  { text: "No la pierdas, no hay derecho", time: 186 },
  { text: "No te olvides que la vida", time: 189 },
  { text: "Casi nunca está dormida", time: 194 },
  { text: "Ella sabía que él sabía", time: 198 },
  { text: "Él sabía, ella sabía", time: 200 },
  { text: "Que él sabía, ella sabía", time: 202 },
  { text: "Y se olvidaron de sus flores amarillas", time: 206 }
  { text: "Gracias por ver ;)", time: 212 }
];

// Animar las letras usando requestAnimationFrame
function updateLyrics() {
  var currentTime = audio.currentTime;
  
  // Busca la línea actual
  var currentLine = lyricsData.find(line => currentTime >= line.time && currentTime < line.time + 4);

  if (currentLine) {
    // Calcula la opacidad para el efecto de aparición y desaparición
    var fadeInDuration = 1; // 1 segundo para el fade-in
    var fadeOutDuration = 1; // 1 segundo para el fade-out
    var opacity = 1;

    if (currentTime < currentLine.time + fadeInDuration) {
      // Fade-in
      opacity = (currentTime - currentLine.time) / fadeInDuration;
    } else if (currentTime > currentLine.time + 4 - fadeOutDuration) {
      // Fade-out
      opacity = 1 - (currentTime - (currentLine.time + 4 - fadeOutDuration)) / fadeOutDuration;
    }

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Oculta las letras cuando no hay línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  // Actualiza el frame
  requestAnimationFrame(updateLyrics);
}

// Inicia la sincronización cuando el audio comienza a reproducirse
audio.addEventListener("play", function () {
  requestAnimationFrame(updateLyrics);
});

// Ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Ajusta a 3 segundos antes de ocultar
}

setTimeout(ocultarTitulo, 15000);
