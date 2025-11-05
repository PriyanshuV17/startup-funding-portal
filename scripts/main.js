document.getElementById("year").textContent = new Date().getFullYear();

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
