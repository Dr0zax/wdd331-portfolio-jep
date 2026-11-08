const stage = document.querySelector('#unit-stage');
const widthControl = document.querySelector('#width-control');
const heightControl = document.querySelector('#height-control');
const widthOutput = document.querySelector('#width-output');
const heightOutput = document.querySelector('#height-output');
const stageReadout = document.querySelector('#stage-readout');

function updateStage() {
    const width = `${widthControl.value}%`;
    const height = `${heightControl.value}px`;
    stage.style.setProperty('--stage-width', width);
    stage.style.setProperty('--stage-height', height);
    widthOutput.textContent = width;
    heightOutput.textContent = height;
    stageReadout.textContent = `${width} × ${height}`;
}

widthControl.addEventListener('input', updateStage);
heightControl.addEventListener('input', updateStage);

// Only the three controls should receive click handlers. The stage also has
// data-tone so the CSS can inspect the current state, but it is not a button.
document.querySelectorAll('.theme-button').forEach((button) => {
    button.addEventListener('click', () => {
        stage.dataset.tone = button.dataset.tone;
        stage.style.setProperty('--stage-tone', button.dataset.tone);
        document.querySelectorAll('.theme-button').forEach((item) => item.classList.toggle('is-selected', item === button));
    });
});
