
document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("form-section");

  const hazards = [
    { id: "movingParts", label: "Moving Parts of Machines" },
    { id: "fallsFromHeight", label: "Falls from Height" },
    { id: "excavations", label: "Excavations" },
    { id: "electrical", label: "Electrical" },
    { id: "hazSubstances", label: "Hazardous Substances" },
    { id: "manualHandling", label: "Manual Handling Injury" },
    { id: "confinedSpaces", label: "Confined Spaces" }
  ];

  let html = "<h2>Select Hazards Present</h2><form id='hazardForm'>";
  hazards.forEach(h => {
    html += `<label><input type='checkbox' name='hazard' value='${h.id}'> ${h.label}</label><br>`;
  });
  html += `<br><button type='button' onclick='generateRAMS()'>Generate RAMS</button></form><div id="output"></div>`;

  formSection.innerHTML = html;
});

function generateRAMS() {
  const selected = [...document.querySelectorAll("input[name='hazard']:checked")].map(i => i.nextSibling.textContent.trim());
  const output = document.getElementById("output");
  if (selected.length === 0) {
    output.innerHTML = "<p><strong>No hazards selected. Please check at least one.</strong></p>";
    return;
  }

  let result = "<h3>Generated RAMS Overview</h3><ul>";
  selected.forEach(h => {
    result += `<li><strong>${h}:</strong> Mitigation measures will be listed here.</li>`;
  });
  result += "</ul><p><em>This is a simplified live preview. Final Word/PDF version will include risk scoring, JSA, and method steps.</em></p>";
  output.innerHTML = result;
}
