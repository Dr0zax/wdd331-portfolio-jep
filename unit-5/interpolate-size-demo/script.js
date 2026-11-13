const $ = (selector) => document.querySelector(selector);

function setDisclosure(button, panel, open) {
  button.setAttribute("aria-expanded", String(open));
  button.closest(".comparison-column, .mini-card").classList.toggle("is-open", open);
  if (open) panel.removeAttribute("hidden");
  else panel.setAttribute("hidden", "");
}

document.querySelectorAll(".reveal-card").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  button.addEventListener("click", () => {
    setDisclosure(button, panel, button.getAttribute("aria-expanded") !== "true");
  });
});

const miniTrigger = $("#mini-trigger");
const miniPanel = $("#mini-panel");
miniTrigger.addEventListener("click", () => {
  setDisclosure(miniTrigger, miniPanel, miniTrigger.getAttribute("aria-expanded") !== "true");
});

$("#duration").addEventListener("input", (event) => {
  const duration = `${event.target.value}ms`;
  $("#duration-output").textContent = duration;
  $("#mini-card").style.setProperty("--duration", duration);
});

const supportsInterpolation = CSS.supports("interpolate-size", "allow-keywords");
$("#support-note").textContent = supportsInterpolation
  ? "Your browser supports intrinsic-size interpolation."
  : "This browser will still open the panel, but may skip the smooth height animation.";
