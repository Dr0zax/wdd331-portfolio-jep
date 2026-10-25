const $ = (selector) => document.querySelector(selector);

const backgroundMode = $("#background-mode");
const hero = $("#hero-stage");
const wash = $("#wash-color");

const setBackground = () => {
    const mode = backgroundMode.value;
    hero.style.setProperty("--blend-mode", mode);
    hero.style.setProperty("--wash", wash.value);
    $("#background-value").textContent = mode;
};

backgroundMode.addEventListener("change", setBackground);
wash.addEventListener("input", setBackground);
$("#reset-background").addEventListener("click", () => {
    backgroundMode.value = "multiply";
    wash.value = "#ef8354";
    setBackground();
});

$("#text-mode").addEventListener("change", (event) =>
    $("#mix-stage").style.setProperty("--text-mode", event.target.value),
);

const isolationToggle = $("#isolation-toggle");
isolationToggle.addEventListener("change", () => {
    const on = isolationToggle.checked;
    $("#isolation-demo").style.setProperty(
        "--isolation",
        on ? "isolate" : "auto",
    );
    
    $("#isolation-value").textContent = on
        ? "isolation: isolate;"
        : "no isolation boundary";
});

setBackground();
