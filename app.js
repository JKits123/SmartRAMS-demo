
document.addEventListener("DOMContentLoaded", () => {
    const hazards = [
        { id: "working-at-height", name: "Working at Height", mitigation: "Use fall protection, assess weather, inspect ladders" },
        { id: "manual-handling", name: "Manual Handling", mitigation: "Train staff, use aids, reduce load weight" },
        { id: "electrical-tools", name: "Electrical Tools", mitigation: "110V only, PAT tested, visual checks before use" }
    ];

    const formSection = document.getElementById("form-section");
    const outputSection = document.getElementById("output-section");

    const form = document.createElement("form");

    hazards.forEach(hazard => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = hazard.id;
        checkbox.dataset.mitigation = hazard.mitigation;
        label.appendChild(checkbox);
        label.append(` ${hazard.name}`);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    });

    const generateBtn = document.createElement("button");
    generateBtn.textContent = "Generate RAMS";
    generateBtn.type = "button";

    generateBtn.onclick = () => {
        const selected = Array.from(form.querySelectorAll("input:checked"));
        const output = selected.map(cb => {
            return `<h3>${cb.value.replaceAll("-", " ")}</h3><p>${cb.dataset.mitigation}</p>`;
        }).join("");
        outputSection.innerHTML = "<h2>Generated RAMS Content</h2>" + output;
    };

    form.appendChild(document.createElement("br"));
    form.appendChild(generateBtn);
    formSection.appendChild(form);
});
