const treinos = [
  {
    "dia": "DIA 1 – PERNAS (ênfase quadríceps + core) + corrida leve",
    "tecnica": "Trabalhar força e volume em quadríceps com movimentos amplos e controlados. Finalizar com corrida leve para aumentar resistência.",
    "objetivo": "Hipertrofia de quadríceps + resistência aeróbica leve",
    "exercicios": [
      { "nome": "Agachamento livre", "series": "4x6–8", "descricao": "Força, cadência 2-0-1, descanso 2min" },
      { "nome": "Leg press 45°", "series": "4x10–12", "descricao": "Amplitude máxima" },
      { "nome": "Hack machine", "series": "3x8–10", "descricao": "Descida lenta (3s)" },
      { "nome": "Avanço com halteres", "series": "3x12 passos por perna", "descricao": "Controle no passo" },
      { "nome": "Cadeira extensora", "series": "3x12–15", "descricao": "Drop-set na última série" },
      { "nome": "Prancha frontal", "series": "3x40–60s", "descricao": "Core" },

      // Corrida em formato igual exercício
      { "nome": "Corrida leve", "series": "36–40min", "descricao": "5min aquecimento + 5min desaquecimento" }
    ]
  },
  {
    "dia": "DIA 2 – COSTAS + BÍCEPS + corrida intervalada",
    "tecnica": "Exercícios de dorsais e bíceps, finalizando com corrida intervalada para estimular condicionamento.",
    "objetivo": "Fortalecimento de costas + estímulo cardiovascular",
    "exercicios": [
      { "nome": "Barra fixa", "series": "4x6–8", "descricao": "Assistida se necessário" },
      { "nome": "Remada curvada", "series": "4x8–10", "descricao": "Pegada pronada" },
      { "nome": "Remada unilateral", "series": "3x10–12", "descricao": "Estabilizar tronco" },
      { "nome": "Pulldown neutro", "series": "3x12–15", "descricao": "Contração máxima" },
      { "nome": "Rosca direta barra W", "series": "3x8–10", "descricao": "Execução controlada" },
      { "nome": "Rosca martelo", "series": "2x10–12", "descricao": "Amplitude completa" },

      { "nome": "Corrida intervalada", "series": "4min corrida forte + 1min caminhada (6x)", "descricao": "5min aquecimento + 5min desaquecimento" }
    ]
  },
  {
    "dia": "DIA 3 – PERNAS (ênfase posterior + glúteo)",
    "tecnica": "Cadência lenta e foco em glúteos/posteriores. Pausa no pico da contração.",
    "objetivo": "Fortalecimento de glúteos e posteriores",
    "exercicios": [
      { "nome": "Levantamento terra romeno", "series": "4x6–8", "descricao": "Foco em posterior" },
      { "nome": "Agachamento búlgaro", "series": "3x10–12", "descricao": "Unilateral, controlar descida" },
      { "nome": "Cadeira flexora", "series": "4x10–12", "descricao": "1s de contração no pico" },
      { "nome": "Hip thrust", "series": "4x8–10", "descricao": "Pausa de 1s no topo" },
      { "nome": "Glúteo polia/caneleira", "series": "3x12–15", "descricao": "Controle do movimento" },
      { "nome": "Panturrilha em pé", "series": "4x12–15", "descricao": "Isometria 2s no topo" }
    ]
  },
  {
    "dia": "DIA 4 – OMBROS + CORE + corrida contínua",
    "tecnica": "Execução controlada nos exercícios de ombro, corrida contínua moderada ao final.",
    "objetivo": "Definição de ombros + core + resistência aeróbica",
    "exercicios": [
      { "nome": "Desenvolvimento Arnold", "series": "4x8–10", "descricao": "Amplitude completa" },
      { "nome": "Elevação lateral", "series": "4x12–15", "descricao": "Descida lenta (2s)" },
      { "nome": "Elevação frontal", "series": "3x10–12", "descricao": "Controle na subida" },
      { "nome": "Remada alta", "series": "3x10–12", "descricao": "Cotovelo acima do ombro" },
      { "nome": "Prancha com toques no ombro", "series": "3x40–60s", "descricao": "Estabilidade do core" },
      { "nome": "Abdominal bicicleta", "series": "3x15–20", "descricao": "Alternando lados" },

      { "nome": "Corrida contínua", "series": "44–48min", "descricao": "5min aquecimento + 5min desaquecimento" }
    ]
  },
  {
    "dia": "DIA 5 – PERNAS (misto quadríceps + glúteo) + corrida regenerativa",
    "tecnica": "Volume moderado, ênfase estética e pump. Corrida regenerativa leve ao final.",
    "objetivo": "Equilibrar quadríceps e glúteo + melhorar condicionamento",
    "exercicios": [
      { "nome": "Leg press pés altos", "series": "4x10–12", "descricao": "Ênfase em glúteo/posterior" },
      { "nome": "Passada lateral miniband", "series": "3x12–15", "descricao": "Ativação de glúteo médio" },
      { "nome": "Agachamento sumô halter", "series": "3x12–15", "descricao": "Controle de cadência" },
      { "nome": "Cadeira extensora", "series": "3x15–20", "descricao": "Pump de quadríceps" },
      { "nome": "Glúteo 4 apoios", "series": "3x12–15", "descricao": "Amplitude máxima" },
      { "nome": "Abdominal infra", "series": "3x15–20", "descricao": "Controle lombar" },

      { "nome": "Corrida regenerativa", "series": "corrida leve 24mi", "descricao": "5min aquecimento + 3–5min desaquecimento" }
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















