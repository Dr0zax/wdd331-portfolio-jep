const $ = (selector) => document.querySelector(selector);

document.querySelectorAll("[data-wrap]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-wrap]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const mode = button.dataset.wrap;
    $(".wrap-stage").dataset.wrap = mode;
    $("#wrap-code").textContent = mode;
  });
});

$("#drop-lines").addEventListener("input", (event) => {
  const value = event.target.value;
  $(".article-stage").style.setProperty("--drop-lines", value);
  $("#drop-output").textContent = value;
  $("#drop-code").textContent = value;
});

$("#clamp-lines").addEventListener("input", (event) => {
  const value = event.target.value;
  $(".trail-card").style.setProperty("--clamp-lines", value);
  $("#clamp-output").textContent = value;
  $("#clamp-code").textContent = value;
});

$("#measure-width").addEventListener("input", (event) => {
  const value = Number(event.target.value);
  $(".measure-stage").style.setProperty("--measure", `${value}ch`);
  $("#measure-output").textContent = `${value}ch`;
  $("#measure-code").textContent = value;
  $("#measure-verdict").textContent = value >= 45 && value <= 75
    ? `${value}ch is in the comfortable 45–75 range.`
    : `${value}ch is outside the comfortable 45–75 range.`;
});

$("#rhythm-size").addEventListener("input", (event) => {
  const value = Number(event.target.value).toFixed(1);
  document.documentElement.style.setProperty("--demo-root-rhythm", `${value}rem`);
  $("#rhythm-output").textContent = `${value}rem`;
});
