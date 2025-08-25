const treinos = [
  {
    "dia": "DIA 1 – PEITO + TRÍCEPS + CORE + Corrida fácil",
    "tecnica": "Execução controlada, compostos pesados no início, corrida leve ao final",
    "objetivo": "Hipertrofia, força e estímulo aeróbico leve",
    "exercicios": [
      { "nome": "Supino reto com barra", "series": "4", "reps": "5–6", "tecnica": "Força, cadência 2-0-1", "obs": "Descanso 2–3 min" },
      { "nome": "Supino inclinado halteres", "series": "3", "reps": "8–10" },
      { "nome": "Crossover (polia alta)", "series": "3", "reps": "12–15", "tecnica": "Superset com tríceps" },
      { "nome": "Tríceps francês (halteres)", "series": "3", "reps": "10–12" },
      { "nome": "Tríceps testa barra W", "series": "3", "reps": "8–10" },
      { "nome": "Prancha frontal com apoio alternado", "series": "3", "reps": "40–60s", "obs": "Core" },
      { "nome": "Corrida fácil", "series": "1", "reps": "22–30min", 
        "tecnica": "Aquecimento 5min caminhada rápida / Desaquecimento 5min leve", 
        "obs": "Semanas 9–10: 22–26min / Semanas 11–12: 26–30min" }
    ]
  },
  {
    "dia": "DIA 2 – PERNAS (ênfase quadríceps)",
    "tecnica": "Execução controlada, amplitude total",
    "objetivo": "Força e hipertrofia com foco em quadríceps",
    "exercicios": [
      { "nome": "Agachamento livre", "series": "4", "reps": "6–8", "tecnica": "Cadência 2-0-1", "obs": "Descanso 2 min" },
      { "nome": "Hack machine", "series": "3", "reps": "8–10" },
      { "nome": "Leg press 45°", "series": "3", "reps": "12–15" },
      { "nome": "Avanço com barra", "series": "3", "reps": "10–12 passos" },
      { "nome": "Cadeira extensora", "series": "3", "reps": "12–15", "tecnica": "Drop-set na última série" },
      { "nome": "Abdominal infra", "series": "3", "reps": "15–20" }
    ]
  },
  {
    "dia": "DIA 3 – COSTAS + BÍCEPS + Corrida intervalada",
    "tecnica": "Execução firme, corrida intervalada após treino",
    "objetivo": "Força de dorsais e resistência aeróbica",
    "exercicios": [
      { "nome": "Barra fixa (assistida se necessário)", "series": "4", "reps": "6–8" },
      { "nome": "Remada curvada", "series": "4", "reps": "8–10" },
      { "nome": "Remada unilateral com halter", "series": "3", "reps": "10–12" },
      { "nome": "Pulldown supinado", "series": "3", "reps": "12–15" },
      { "nome": "Rosca direta barra reta", "series": "3", "reps": "8–10" },
      { "nome": "Rosca alternada", "series": "2", "reps": "10–12" },
      { "nome": "Corrida intervalada", "series": "1", "reps": "28–32min", 
        "tecnica": "Aquecimento 5min / Desaquecimento 5min", 
        "obs": "Semanas 9–10: 3min corrida + 1min caminhada x7 (28min) / Semanas 11–12: 4min corrida + 1min caminhada x6 (30min)" }
    ]
  },
  {
    "dia": "DIA 4 – PERNAS (ênfase posterior + glúteo)",
    "tecnica": "Amplitude máxima, foco em glúteo/ischios",
    "objetivo": "Fortalecimento posterior e glúteo",
    "exercicios": [
      { "nome": "Levantamento terra romeno", "series": "4", "reps": "6–8" },
      { "nome": "Agachamento búlgaro", "series": "3", "reps": "10–12 por perna" },
      { "nome": "Cadeira flexora", "series": "3", "reps": "10–12" },
      { "nome": "Glúteo na polia / caneleira", "series": "3", "reps": "12–15" },
      { "nome": "Hip thrust (barra)", "series": "4", "reps": "8–10", "tecnica": "Pausa 1s no topo" },
      { "nome": "Panturrilha sentado", "series": "4", "reps": "12–15" }
    ]
  },
  {
    "dia": "DIA 5 – OMBROS + CORE + Corrida contínua",
    "tecnica": "Execução controlada, corrida moderada ao final",
    "objetivo": "Fortalecimento do core e resistência aeróbica",
    "exercicios": [
      { "nome": "Desenvolvimento Arnold", "series": "4", "reps": "8–10" },
      { "nome": "Elevação lateral", "series": "3", "reps": "12–15", "tecnica": "2s excêntrico" },
      { "nome": "Elevação frontal", "series": "3", "reps": "10–12" },
      { "nome": "Remada alta", "series": "3", "reps": "10–12" },
      { "nome": "Prancha com toques no ombro", "series": "3", "reps": "40–60s", "obs": "Core" },
      { "nome": "Abdominal bicicleta", "series": "3", "reps": "15–20 cada lado" },
      { "nome": "Corrida contínua", "series": "1", "reps": "32–40min", 
        "tecnica": "Aquecimento 5min / Desaquecimento 5min", 
        "obs": "Semanas 9–10: 32–36min / Semanas 11–12: 36–40min" }
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










