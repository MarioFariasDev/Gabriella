const treinos = [
  {
    "dia": "DIA 1 – PERNAS (ênfase posterior + glúteos)",
    "tecnica": "Cadência lenta e foco no glúteo e posteriores. Pausa no pico da contração para ativação máxima.",
    "objetivo": "Força e tônus em glúteos e posteriores de coxa",
    "exercicios": [
      { "nome": "Stiff RDL com halteres/barra", "series": "4x10", "reps": "10", "tecnica": "Cadência 2-1-1", "obs": "Foco em alongar posterior", "descanso": "60s" },
      { "nome": "Agachamento Sumô", "series": "4x12", "reps": "12", "tecnica": "Amplitude máxima", "obs": "Pés abertos, foco em glúteo", "descanso": "60s" },
      { "nome": "Cadeira flexora", "series": "3x12", "reps": "12", "tecnica": "1s de contração no topo", "obs": "-", "descanso": "45s" },
      { "nome": "Elevação pélvica (Hip Thrust)", "series": "4x12", "reps": "12", "tecnica": "Pausa 1s no topo", "obs": "Usar carga progressiva", "descanso": "60s" },
      { "nome": "Cadeira abdutora", "series": "3x15", "reps": "15", "tecnica": "Tempo constante", "obs": "Foco em glúteo médio", "descanso": "45s" },
      { "nome": "Panturrilhas em pé", "series": "4x15", "reps": "15", "tecnica": "Isometria 2s topo", "obs": "-", "descanso": "30s" }
    ]
  },
  {
    "dia": "DIA 2 – CORRIDA LEVE + CORE",
    "tecnica": "Ritmo confortável, mantendo constância. Foco em queima de gordura e estabilidade do core.",
    "objetivo": "Melhorar resistência aeróbica e fortalecer abdômen",
    "exercicios": [
      { "nome": "Corrida leve", "series": "5km", "reps": "-", "tecnica": "30–35min ritmo leve", "obs": "5min aquecimento + 5min desaquecimento", "descanso": "-" },
      { "nome": "Prancha frontal", "series": "3x40s", "reps": "-", "tecnica": "Core ativado", "obs": "-", "descanso": "30s" },
      { "nome": "Prancha lateral", "series": "3x30s", "reps": "cada lado", "tecnica": "-", "obs": "-", "descanso": "30s" },
      { "nome": "Abdominal infra", "series": "3x15", "reps": "15", "tecnica": "-", "obs": "-", "descanso": "30s" },
      { "nome": "Elevação de pernas", "series": "3x12", "reps": "12", "tecnica": "Controle na descida", "obs": "-", "descanso": "30s" }
    ]
  },
  {
    "dia": "DIA 3 – COSTAS + BÍCEPS",
    "tecnica": "Controle na fase excêntrica e foco em contração máxima. ",
    "objetivo": "Fortalecer dorso e melhorar postura",
    "exercicios": [
      { "nome": "Puxada frontal aberta", "series": "4x10", "reps": "10", "tecnica": "-", "obs": "-", "descanso": "60s" },
      { "nome": "Remada curvada", "series": "4x10", "reps": "10", "tecnica": "Pegada pronada", "obs": "-", "descanso": "60s" },
      { "nome": "Remada baixa", "series": "3x12", "reps": "12", "tecnica": "-", "obs": "-", "descanso": "60s" },
      { "nome": "Rosca direta", "series": "3x12", "reps": "12", "tecnica": "Execução controlada", "obs": "-", "descanso": "45s" },
      { "nome": "Rosca martelo", "series": "3x12", "reps": "12", "tecnica": "Amplitude completa", "obs": "-", "descanso": "45s" },
      { "nome": "Elevação lateral ombro", "series": "3x15", "reps": "15", "tecnica": "Descida lenta", "obs": "-", "descanso": "45s" }
    ]
  },
  {
    "dia": "DIA 4 – CORRIDA INTERVALADA (HIIT)",
    "tecnica": "Alternância entre sprints e trotes. Eleva o VO₂ e queima gordura.",
    "objetivo": "Aumentar capacidade cardiorrespiratória",
    "exercicios": [
      { "nome": "Aquecimento", "series": "10min", "reps": "-", "tecnica": "Trote leve", "obs": "-", "descanso": "-" },
      { "nome": "Tiro forte", "series": "1min", "reps": "6x", "tecnica": "Velocidade alta", "obs": "Alternar com descanso ativo", "descanso": "1min leve" },
      { "nome": "Corrida leve", "series": "10min", "reps": "-", "tecnica": "Desaquecimento", "obs": "-", "descanso": "-" },
      { "nome": "Caminhada final", "series": "5min", "reps": "-", "tecnica": "-", "obs": "Alongamento pós", "descanso": "-" }
    ]
  },
  {
    "dia": "DIA 5 – PERNAS (ênfase quadríceps + glúteos)",
    "tecnica": "Movimentos amplos e controlados. Alternar carga e volume para estímulo completo.",
    "objetivo": "Hipertrofia de quadríceps e glúteos",
    "exercicios": [
      { "nome": "Agachamento livre", "series": "4x10", "reps": "10", "tecnica": "Cadência 2-0-1", "obs": "-", "descanso": "60s" },
      { "nome": "Leg press", "series": "4x12", "reps": "12", "tecnica": "Amplitude total", "obs": "-", "descanso": "60s" },
      { "nome": "Cadeira extensora", "series": "3x15", "reps": "15", "tecnica": "Drop-set na última", "obs": "-", "descanso": "45s" },
      { "nome": "Passada com halteres", "series": "3x10", "reps": "cada perna", "tecnica": "-", "obs": "-", "descanso": "60s" },
      { "nome": "Glúteo kickback (caneleira/cabo)", "series": "3x15", "reps": "15", "tecnica": "Controle total", "obs": "-", "descanso": "45s" },
      { "nome": "Panturrilha sentado", "series": "4x15", "reps": "15", "tecnica": "Isometria topo 2s", "obs": "-", "descanso": "30s" }
    ]
  },
  {
    "dia": "DIA 6 – CORRIDA + FUNCIONAL FULL BODY",
    "tecnica": "Combinar corrida leve com circuito funcional de corpo inteiro.",
    "objetivo": "Melhorar condicionamento geral e resistência",
    "exercicios": [
      { "nome": "Corrida leve", "series": "4–5km", "reps": "-", "tecnica": "Ritmo regenerativo", "obs": "-", "descanso": "-" },
      { "nome": "Agachamento com salto", "series": "3x15", "reps": "15", "tecnica": "Explosivo", "obs": "-", "descanso": "30s" },
      { "nome": "Flexão de braço", "series": "3x12", "reps": "12", "tecnica": "-", "obs": "-", "descanso": "30s" },
      { "nome": "Abdominal bicicleta", "series": "3x20", "reps": "20", "tecnica": "-", "obs": "-", "descanso": "30s" },
      { "nome": "Burpee", "series": "3x10", "reps": "10", "tecnica": "-", "obs": "-", "descanso": "30s" },
      { "nome": "Prancha alta", "series": "3x40s", "reps": "-", "tecnica": "-", "obs": "-", "descanso": "30s" }
    ]
  }
];

// O restante do código permanece idêntico (renderização, timer, progresso, feedback, dark mode).



// --- RENDERIZAÇÃO DOS TREINOS ---
const treinoContainer = document.getElementById("treinoContainer");
const progresso = JSON.parse(localStorage.getItem("progresso") || "{}");

treinos.forEach((treino, i) => {
  const card = document.createElement("div");
  card.className = "card";

  let html = `
    <h2>${treino.dia}</h2>
    <p><strong>Técnica:</strong> ${treino.tecnica}</p>
    <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
    <table class="exercise-table">
      <thead>
        <tr>
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
        </tr>
      </thead>
      <tbody>
  `;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `
      <tr class="exercise-row ${doneClass}" data-key="${key}">
        <td><input type="checkbox" ${checked}></td>
        <td>${ex.nome || "-"}</td>
        <td>${ex.series || "-"}</td>
        <td>${ex.reps || "-"}</td>
        <td>${ex.tecnica || "-"}</td>
        <td>${ex.obs || "-"}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

// --- CHECKBOX PROGRESSO ---
document.querySelectorAll(".exercise-row input[type='checkbox']").forEach(input => {
  input.addEventListener("change", function () {
    const row = this.closest(".exercise-row");
    const key = row.dataset.key;
    const feito = this.checked;
    row.classList.toggle("done", feito);
    progresso[key] = { feito };
    localStorage.setItem("progresso", JSON.stringify(progresso));
  });
});

// --- TIMER POR EXERCÍCIO ---
function iniciarTimer(btn) {
  const span = btn.nextElementSibling;
  let tempo = 60;
  span.textContent = formatar(tempo);
  btn.disabled = true;

  const intervalo = setInterval(() => {
    tempo--;
    span.textContent = formatar(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      btn.disabled = false;
      span.textContent = "✔️";
    }
  }, 1000);
}

function formatar(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

// --- FEEDBACK ---
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});

// --- DARK MODE ---
document.getElementById("darkToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
















