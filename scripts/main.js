// FundFusion Main Script

// Set dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dashboard AI Matchmaking Simulation
const container = document.getElementById("match-container");
if (container) {
  const startups = [
    { name: "NeuroLink AI", sector: "AI", needed: "$500K" },
    { name: "GreenCharge", sector: "CleanTech", needed: "$250K" },
    { name: "MediBridge", sector: "HealthTech", needed: "$350K" }
  ];
  const investors = [
    { name: "Quantum Ventures", sector: "AI", range: "$400K–$800K" },
    { name: "BlueEarth Capital", sector: "CleanTech", range: "$200K–$600K" },
    { name: "Wellness Angels", sector: "HealthTech", range: "$250K–$500K" }
  ];
  container.innerHTML = startups.map(s=>{
    const match=investors.filter(i=>i.sector===s.sector);
    return `<div class="card">
      <h3>${s.name}</h3>
      <p><b>Sector:</b> ${s.sector}</p>
      <p><b>Funding Needed:</b> ${s.needed}</p>
      <hr style="margin:1rem 0;">
      <h4>Matching Investors:</h4>
      ${match.length?match.map(m=>`<p>${m.name} (${m.range})</p>`).join(""):"<p>No matches</p>"}
    </div>`;
  }).join("");
}

// Pitch Analyzer simulation
const analyzeBtn = document.getElementById("analyzeBtn");
if (analyzeBtn) {
  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const resultContainer = document.getElementById("resultContainer");
  const scoreValue = document.getElementById("scoreValue");
  const scoreFeedback = document.getElementById("scoreFeedback");

  analyzeBtn.addEventListener("click", () => {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
      alert("Please upload your pitch deck first!");
      return;
    }
    analyzeBtn.style.display = "none";
    progressContainer.style.display = "block";
    progressBar.style.width = "0%";
    progressText.innerText = "Analyzing...";

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          const score = (Math.random() * 4 + 6).toFixed(1);
          progressContainer.style.display = "none";
          resultContainer.style.display = "block";
          scoreValue.innerText = score;
          let feedback;
          if (score > 9) feedback = "🌟 Outstanding clarity, innovation, and business potential!";
          else if (score > 8) feedback = "🚀 Strong pitch with clear market fit. Great job!";
          else if (score > 7) feedback = "👍 Solid effort. Enhance your financial clarity.";
          else feedback = "🧩 Needs improvement. Clarify your scalability and vision.";
          scoreFeedback.innerText = feedback;
        }, 500);
      }
    }, 500);
  });
}
