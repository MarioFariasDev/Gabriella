const treinos = [
  {
    "dia": "DIA 1 – PEITO + TRÍCEPS + CORE (corrida fácil 20–28min)",
    "tecnica": "Execução controlada, compostos pesados no início, corrida leve ao final",
    "objetivo": "Hipertrofia e fortalecimento com estímulo aeróbico leve",
    "corrida": {
      "aquecimento": "5min caminhada rápida",
      "bloco": [
        { "semanas": "1–2", "protocolo": "1min corrida + 2min caminhada x8 (24min total)" },
        { "semanas": "3–4", "protocolo": "2min corrida + 1min caminhada x8 (24min total)" },
        { "semanas": "5–6", "protocolo": "3min corrida + 1min caminhada x8 (32min total)" },
        { "semanas": "7–8", "protocolo": "Corrida contínua 20–28min" }
      ],
      "desaquecimento": "5min caminhada leve"
    },
    "exercicios": [
      { "nome": "Supino reto com barra", "series": "4", "reps": "6–8", "tecnica": "Cadência 2-0-1", "obs": "Foco força, descanso 2 min" },
      { "nome": "Supino inclinado com halteres", "series": "3", "reps": "8–10", "tecnica": "", "obs": "" },
      { "nome": "Crucifixo inclinado / crossover", "series": "3", "reps": "12–15", "tecnica": "", "obs": "Superset com pushdown" },
      { "nome": "Tríceps pulley (barra ou corda)", "series": "3", "reps": "10–12", "tecnica": "", "obs": "" },
      { "nome": "Mergulho entre bancos", "series": "3", "reps": "8–12", "tecnica": "", "obs": "" },
      { "nome": "Prancha frontal", "series": "3", "reps": "40–60s", "tecnica": "", "obs": "Core" }
    ]
  },
  {
    "dia": "DIA 2 – PERNAS (dia pesado)",
    "tecnica": "Execução controlada, foco em força",
    "objetivo": "Fortalecimento e hipertrofia de membros inferiores",
    "exercicios": [
      { "nome": "Agachamento livre / smith", "series": "4", "reps": "5–6", "tecnica": "Cadência 2-0-1", "obs": "Descanso 2–3 min" },
      { "nome": "Levantamento romeno", "series": "3", "reps": "6–8", "tecnica": "", "obs": "" },
      { "nome": "Leg press", "series": "3", "reps": "10–12", "tecnica": "", "obs": "" },
      { "nome": "Passada andando", "series": "3", "reps": "10–12 passos por perna", "tecnica": "", "obs": "" },
      { "nome": "Elevação de quadril (hip thrust)", "series": "3", "reps": "8–10", "tecnica": "", "obs": "" },
      { "nome": "Panturrilha em pé", "series": "4", "reps": "12–15", "tecnica": "", "obs": "" },
      { "nome": "Abdominal oblíquo", "series": "3", "reps": "15–20", "tecnica": "", "obs": "" }
    ]
  },
  {
    "dia": "DIA 3 – COSTAS + BÍCEPS (corrida intervalada curta 25–30min)",
    "tecnica": "Execução controlada, corrida intervalada após musculação",
    "objetivo": "Fortalecimento do tronco e ganho de resistência",
    "corrida": {
      "aquecimento": "5min caminhada rápida",
      "bloco": [
        { "semanas": "1–2", "protocolo": "1min corrida + 1min caminhada x12 (24min total)" },
        { "semanas": "3–4", "protocolo": "2min corrida + 1min caminhada x9 (27min total)" },
        { "semanas": "5–6", "protocolo": "3min corrida + 1min caminhada x7 (28min total)" },
        { "semanas": "7–8", "protocolo": "Corrida contínua 25–30min" }
      ],
      "desaquecimento": "5min caminhada leve"
    },
    "exercicios": [
      { "nome": "Puxada frente / barra fixa assistida", "series": "4", "reps": "6–8", "tecnica": "", "obs": "" },
      { "nome": "Remada curvada / unilateral", "series": "4", "reps": "8–10", "tecnica": "", "obs": "" },
      { "nome": "Remada baixa / máquina", "series": "3", "reps": "10–12", "tecnica": "", "obs": "" },
      { "nome": "Face pull", "series": "3", "reps": "12–15", "tecnica": "", "obs": "Saúde do ombro" },
      { "nome": "Rosca direta", "series": "3", "reps": "8–10", "tecnica": "", "obs": "" },
      { "nome": "Rosca martelo", "series": "2", "reps": "10–12", "tecnica": "", "obs": "" }
    ]
  },
  {
    "dia": "DIA 4 – PERNAS (dia volume/glúteo)",
    "tecnica": "Execução controlada, foco em resistência muscular",
    "objetivo": "Fortalecimento de glúteos e posterior de coxa",
    "exercicios": [
      { "nome": "Peso morto romeno leve", "series": "3", "reps": "8–10", "tecnica": "", "obs": "" },
      { "nome": "Agachamento búlgaro / step-up", "series": "3", "reps": "8–10 por perna", "tecnica": "", "obs": "" },
      { "nome": "Mesa flexora", "series": "3", "reps": "10–12", "tecnica": "", "obs": "" },
      { "nome": "Adução/abdução máquina", "series": "3", "reps": "12–15", "tecnica": "", "obs": "" },
      { "nome": "Ponte de glúteo unilateral", "series": "3", "reps": "10–12 por perna", "tecnica": "", "obs": "" },
      { "nome": "Circuito metabólico final", "series": "3", "reps": "45s air squat + 30s mountain climber", "tecnica": "Circuito", "obs": "Descanso 30s entre exercícios" }
    ]
  },
  {
    "dia": "DIA 5 – OMBROS + CORE (corrida contínua moderada 30–38min)",
    "tecnica": "Execução controlada, corrida moderada ao final",
    "objetivo": "Fortalecimento do core e ganho de resistência aeróbica",
    "corrida": {
      "aquecimento": "5min caminhada rápida",
      "bloco": [
        { "semanas": "1–2", "protocolo": "Corrida contínua 15–20min" },
        { "semanas": "3–4", "protocolo": "Corrida contínua 20–25min" },
        { "semanas": "5–6", "protocolo": "Corrida contínua 25–30min" },
        { "semanas": "7–8", "protocolo": "Corrida contínua 30–38min" }
      ],
      "desaquecimento": "5min caminhada leve"
    },
    "exercicios": [
      { "nome": "Desenvolvimento militar (halteres)", "series": "4", "reps": "6–8", "tecnica": "", "obs": "" },
      { "nome": "Elevação lateral", "series": "3", "reps": "10–12", "tecnica": "2s excêntrico", "obs": "" },
      { "nome": "Elevação frontal alternada", "series": "3", "reps": "10–12", "tecnica": "", "obs": "" },
      { "nome": "Remada alta ou face pull", "series": "3", "reps": "12–15", "tecnica": "", "obs": "" },
      { "nome": "Prancha lateral", "series": "3", "reps": "30–45s cada lado", "tecnica": "", "obs": "Core" },
      { "nome": "Ab wheel / crunch", "series": "3", "reps": "12–15", "tecnica": "", "obs": "" }
    ]
  }
];



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







