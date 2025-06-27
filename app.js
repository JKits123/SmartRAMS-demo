
document.addEventListener("DOMContentLoaded", () => {
    const hazardDB = {
        "Working at Height": {
            mitigation: "Use fall protection, assess weather, inspect ladders.",
            riskBefore: "High", riskAfter: "Medium"
        },
        "Manual Handling": {
            mitigation: "Train staff, use aids, reduce load weight.",
            riskBefore: "Medium", riskAfter: "Low"
        },
        "Electrical Tools": {
            mitigation: "110V only, PAT tested, visual checks before use.",
            riskBefore: "Medium", riskAfter: "Low"
        }
    };

    const hazardSection = document.getElementById("hazard-checkboxes");
    Object.keys(hazardDB).forEach(key => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" value="${key}" checked> ${key}`;
        hazardSection.appendChild(label);
        hazardSection.appendChild(document.createElement("br"));
    });

    window.generateRAMS = function () {
        const selected = Array.from(document.querySelectorAll("#hazard-checkboxes input:checked"))
                              .map(el => el.value);
        const output = document.getElementById("rams-output");
        output.innerHTML = "<ul>" + selected.map(key => 
            `<li><strong>${key}</strong><br>
            Before: ${hazardDB[key].riskBefore} | After: ${hazardDB[key].riskAfter}<br>
            Mitigation: ${hazardDB[key].mitigation}</li>`
        ).join("") + "</ul>";
    };
});
