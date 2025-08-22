const treino = [
  {
    dia: "DIA 1 – FULL BODY A",
    objetivo: "Gasto calórico e grandes grupamentos",
    tecnica: "Cadência controlada 2–0–2",
    exercicios: [
      { nome: "Agachamento livre", series: 4, repeticoes: "10" },
      { nome: "Supino reto com halteres", series: 4, repeticoes: "12" },
      { nome: "Remada curvada barra", series: 4, repeticoes: "12" },
      { nome: "Desenvolvimento militar", series: 3, repeticoes: "12" },
      { nome: "Prancha com elevação alternada de perna", series: 3, tempo: "30s" }
    ]
  },
  {
    dia: "DIA 2 – INFERIORES + CORE",
    objetivo: "Foco em quadríceps, glúteos e core",
    tecnica: "Drop-set no último exercício",
    exercicios: [
      { nome: "Leg Press 45°", series: 4, repeticoes: "12" },
      { nome: "Cadeira extensora", series: 4, repeticoes: "15 (drop-set na última)" },
      { nome: "Stiff com halteres", series: 4, repeticoes: "10" },
      { nome: "Abdominal infra em banco declinado", series: 3, repeticoes: "15" },
      { nome: "Prancha lateral", series: 3, tempo: "30s por lado" }
    ]
  },
  {
    dia: "DIA 3 – CORRIDA",
    objetivo: "Evolução cardiovascular e emagrecimento",
    tecnica: "Minutagem progressiva",
    corrida: {
      aquecimento: "5min caminhada rápida",
      blocoPrincipal: "1min30 corrida leve + 2min caminhada (x8) → total 28min",
      desaquecimento: "5min caminhada leve"
    }
  },
  {
    dia: "DIA 4 – SUPERIORES",
    objetivo: "Postura, deltoides e estabilidade escapular",
    tecnica: "Bi-set em bíceps + tríceps",
    exercicios: [
      { nome: "Supino inclinado barra", series: 4, repeticoes: "10" },
      { nome: "Puxada aberta frente", series: 4, repeticoes: "12" },
      { nome: "Rosca direta halteres", series: 3, repeticoes: "12 (bi-set com Tríceps francês)" },
      { nome: "Tríceps francês", series: 3, repeticoes: "12" },
      { nome: "Elevação lateral halteres", series: 3, repeticoes: "15" },
      { nome: "Face pull (cabo ou elástico)", series: 3, repeticoes: "15" }
    ]
  },
  {
    dia: "DIA 5 – CORRIDA",
    objetivo: "Queima calórica e resistência",
    tecnica: "Controle respiratório (ritmo conversável)",
    corrida: {
      aquecimento: "5min caminhada rápida",
      blocoPrincipal: "1min30 corrida leve + 2min caminhada (x8) → total 28min",
      desaquecimento: "5min caminhada leve"
    }
  },
  {
    dia: "DIA 6 – FULL BODY METABÓLICO",
    objetivo: "Resistência e gasto calórico",
    tecnica: "Circuito metabólico 4 voltas",
    circuito: [
      { nome: "Agachamento com halteres", repeticoes: "15" },
      { nome: "Flexão de braço", repeticoes: "12" },
      { nome: "Afundo alternado", repeticoes: "12 cada perna" },
      { nome: "Remada baixa cabo", repeticoes: "12" },
      { nome: "Elevação pélvica", repeticoes: "15" },
      { nome: "Abdominal bicicleta", repeticoes: "20" }
    ]
  },
  {
    dia: "DIA 7 – DESCANSO ATIVO",
    objetivo: "Recuperação",
    tecnica: "Alongamentos e mobilidade",
    instrucoes: [
      "Alongar quadríceps e posteriores",
      "Mobilidade de quadril e tornozelo",
      "Caminhada leve 20–30min (opcional)"
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








