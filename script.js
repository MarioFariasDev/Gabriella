const treinos = [
  {
    "dia": "DIA 1 – PERNAS (ênfase quadríceps + core) + corrida leve",
    "tecnica": "Trabalhar força e volume em quadríceps com movimentos amplos e controlados. Finalizar com corrida leve para aumentar resistência.",
    "objetivo": "Hipertrofia de quadríceps + resistência aeróbica leve",
    "exercicios": [
      { "nome": "Agachamento livre", "series": "4", "reps": "6–8", "tecnica": "Força, cadência 2-0-1", "descanso": "2 min" },
      { "nome": "Leg press 45°", "series": "4", "reps": "10–12" },
      { "nome": "Hack machine", "series": "3", "reps": "8–10" },
      { "nome": "Avanço com halteres", "series": "3", "reps": "12 passos por perna" },
      { "nome": "Cadeira extensora", "series": "3", "reps": "12–15", "tecnica": "Drop-set na última série" },
      { "nome": "Prancha frontal", "series": "3", "reps": "40–60s", "obs": "Core" },

      // Corrida dentro dos exercícios
      { "nome": "Corrida leve – Semanas 9–10", 
        "protocolo": [
          "Aquecimento: 5min caminhada rápida",
          "Bloco principal: corrida contínua leve 22–26min em ritmo conversacional (60–65% FCmáx)",
          "Desaquecimento: 5min caminhada leve + alongamento quadríceps"
        ] 
      },
      { "nome": "Corrida leve – Semanas 11–12", 
        "protocolo": [
          "Aquecimento: 5min caminhada rápida",
          "Bloco principal: corrida contínua leve 26–30min mantendo cadência estável",
          "Desaquecimento: 5min caminhada leve + alongamento quadríceps"
        ] 
      }
    ]
  },
  {
    "dia": "DIA 2 – COSTAS + BÍCEPS + corrida intervalada",
    "tecnica": "Exercícios de dorsais e bíceps, finalizando com corrida intervalada para estimular condicionamento.",
    "objetivo": "Fortalecimento de costas + estímulo cardiovascular",
    "exercicios": [
      { "nome": "Barra fixa (assistida se necessário)", "series": "4", "reps": "6–8" },
      { "nome": "Remada curvada", "series": "4", "reps": "8–10" },
      { "nome": "Remada unilateral com halter", "series": "3", "reps": "10–12" },
      { "nome": "Pulldown neutro", "series": "3", "reps": "12–15" },
      { "nome": "Rosca direta barra W", "series": "3", "reps": "8–10" },
      { "nome": "Rosca martelo alternada", "series": "2", "reps": "10–12" },

      // Corrida dentro dos exercícios
      { "nome": "Corrida intervalada – Semanas 9–10",
        "protocolo": [
          "Aquecimento: 5min caminhada rápida + 2min trote leve",
          "Bloco principal: 3min corrida moderada (70–75% FCmáx) + 1min caminhada ativa x7 (28min total)",
          "Desaquecimento: 5min caminhada leve"
        ]
      },
      { "nome": "Corrida intervalada – Semanas 11–12",
        "protocolo": [
          "Aquecimento: 5min caminhada rápida + 2min trote leve",
          "Bloco principal: 4min corrida moderada/forte (75–80% FCmáx) + 1min caminhada ativa x6 (30min total)",
          "Desaquecimento: 5min caminhada leve"
        ]
      }
    ]
  },
  {
    "dia": "DIA 3 – PERNAS (ênfase posterior + glúteo)",
    "tecnica": "Cadência lenta e foco em glúteos/posteriores. Pausa no pico da contração.",
    "objetivo": "Fortalecimento de glúteos e posteriores",
    "exercicios": [
      { "nome": "Levantamento terra romeno", "series": "4", "reps": "6–8" },
      { "nome": "Agachamento búlgaro", "series": "3", "reps": "10–12 por perna" },
      { "nome": "Cadeira flexora", "series": "4", "reps": "10–12" },
      { "nome": "Hip thrust (barra)", "series": "4", "reps": "8–10", "tecnica": "Pausa de 1s no topo" },
      { "nome": "Glúteo na polia / caneleira", "series": "3", "reps": "12–15" },
      { "nome": "Panturrilha em pé", "series": "4", "reps": "12–15", "tecnica": "Isometria 2s no topo" }
    ]
  },
  {
    "dia": "DIA 4 – OMBROS + CORE + corrida contínua",
    "tecnica": "Execução controlada nos exercícios de ombro, corrida contínua moderada ao final.",
    "objetivo": "Definição de ombros + core + resistência aeróbica",
    "exercicios": [
      { "nome": "Desenvolvimento Arnold", "series": "4", "reps": "8–10" },
      { "nome": "Elevação lateral", "series": "4", "reps": "12–15", "tecnica": "2s na descida" },
      { "nome": "Elevação frontal com halteres", "series": "3", "reps": "10–12" },
      { "nome": "Remada alta", "series": "3", "reps": "10–12" },
      { "nome": "Prancha com toques no ombro", "series": "3", "reps": "40–60s" },
      { "nome": "Abdominal bicicleta", "series": "3", "reps": "15–20 cada lado" },

      // Corrida dentro dos exercícios
      { "nome": "Corrida contínua – Semanas 9–10",
        "protocolo": [
          "Aquecimento: 5min caminhada rápida + 3min trote leve",
          "Bloco principal: corrida contínua moderada 32–36min (70–75% FCmáx, respiração ritmada)",
          "Desaquecimento: 5min caminhada leve + alongamento"
        ]
      },
      { "nome": "Corrida contínua – Semanas 11–12",
        "protocolo": [
          "Aquecimento: 5min caminhada rápida + 3min trote leve",
          "Bloco principal: corrida contínua moderada 36–40min mantendo constância de ritmo",
          "Desaquecimento: 5min caminhada leve + alongamento"
        ]
      }
    ]
  },
  {
    "dia": "DIA 5 – PERNAS (misto quadríceps + glúteo) + corrida regenerativa",
    "tecnica": "Volume moderado, ênfase estética e sensação de pump. Corrida regenerativa leve ao final.",
    "objetivo": "Equilibrar quadríceps e glúteo + melhorar condicionamento",
    "exercicios": [
      { "nome": "Leg press pés altos", "series": "4", "reps": "10–12" },
      { "nome": "Passada lateral com miniband", "series": "3", "reps": "12–15 por lado" },
      { "nome": "Agachamento sumô com halter", "series": "3", "reps": "12–15" },
      { "nome": "Cadeira extensora", "series": "3", "reps": "15–20" },
      { "nome": "Glúteo 4 apoios com caneleira", "series": "3", "reps": "12–15 por perna" },
      { "nome": "Abdominal infra", "series": "3", "reps": "15–20" },

      // Corrida dentro dos exercícios
      { "nome": "Corrida regenerativa – Semanas 9–10",
        "protocolo": [
          "Aquecimento: 5min caminhada confortável",
          "Bloco principal: corrida leve 20min em ritmo solto (55–60% FCmáx)",
          "Desaquecimento: 3–5min caminhada leve + alongamento"
        ]
      },
      { "nome": "Corrida regenerativa – Semanas 11–12",
        "protocolo": [
          "Aquecimento: 5min caminhada confortável",
          "Bloco principal: corrida leve 24min mantendo ritmo bem solto",
          "Desaquecimento: 3–5min caminhada leve + alongamento"
        ]
      }
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













