const toggle = document.querySelector('#contents-toggle');
const group = document.querySelector('#story-group');
const status = document.querySelector('#layout-status');
const explanation = document.querySelector('#layout-explanation');

toggle.addEventListener('change', () => {
    const enabled = toggle.checked;
    group.classList.toggle('is-contents', enabled);
});
