const menu = document.querySelector('.nav-menu');

const toggle = document.querySelector('.nav-toggle');

const close = document.querySelector('.nav-close');

const links = document.querySelectorAll('.nav-menu a');

toggle?.addEventListener('click', () => {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
});

close?.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
});

links.forEach(l => 
    l.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    })
);

document.querySelector('form')?.addEventListener('submit', e => {
    e.preventDefault();
});