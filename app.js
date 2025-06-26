document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("form-section");
  const outputSection = document.getElementById("output-section");

  // Define sample hazards
  const hazards = [
    {
      category: "Physical",
      name: "Manual Handling",
      riskBefore: "High",
      mitigation: "Use lifting aids and team lifts.",
      riskAfter: "Low"
    },
    {
      category: "Environmental",
      name: "Dust Inhalation",
      riskBefore: "Medium",
      mitigation: "Wear dust mask, ensure ventilation.",
      riskAfter: "Low"
    }
  ];

  // Generate checkboxes
  formSection.innerHTML = "<h2>Select Hazards:</h2>";
  hazards.forEach((hazard, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `hazard-${index}`;
    checkbox.dataset.index = index;

    const label = document.createElement("label");
    label.htmlFor = `hazard-${index}`;
    label.textContent = `${hazard.category} - ${hazard.name}`;

    const br = document.createElement("br");

    formSection.appendChild(checkbox);
    formSection.appendChild(label);
    formSection.appendChild(br);

    checkbox.addEventListener("change", () => {
      renderOutput(hazards.filter((_, i) =>
        document.getElementById(`hazard-${i}`).checked
      ));
    });
  });

  function renderOutput(selectedHazards) {
    outputSection.innerHTML = "<h2>RAMS Summary</h2>";
    if (selectedHazards.length === 0) {
      outputSection.innerHTML += "<p>No hazards selected.</p>";
      return;
    }

    selectedHazards.forEach(hazard => {
      outputSection.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px">
          <strong>Hazard:</strong> ${hazard.name} <br>
          <strong>Category:</strong> ${hazard.category} <br>
          <strong>Risk Before:</strong> ${hazard.riskBefore} <br>
          <strong>Mitigation:</strong> ${hazard.mitigation} <br>
          <strong>Risk After:</strong> ${hazard.riskAfter}
        </div>
      `;
    });
  }
});

