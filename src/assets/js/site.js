/* ============================================================
   UI: nav, reveals, principios expandibles, form mailto
   ============================================================ */
(function(){
  'use strict';

  /* --- menú mobile --- */
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? '✕' : '☰';
  });
  links.addEventListener('click', function(e){
    if (e.target.tagName === 'A'){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.textContent = '☰';
    }
  });

  /* --- link activo según sección visible --- */
  var sections = document.querySelectorAll('main section[id]');
  var navAs = document.querySelectorAll('.nav-links a[href^="#"]');
  function setActive(){
    var cur = null;
    sections.forEach(function(s){
      var r = s.getBoundingClientRect();
      if (r.top <= window.innerHeight*.45 && r.bottom >= window.innerHeight*.45) cur = s.id;
    });
    navAs.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('href') === '#'+cur);
    });
  }
  window.addEventListener('scroll', setActive, { passive:true });
  setActive();

  /* --- reveal on scroll --- */
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold:.12, rootMargin:'0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
  }

  /* --- principios expandibles (click / teclado) --- */
  document.querySelectorAll('.principle').forEach(function(card){
    function flip(){ card.classList.toggle('open'); }
    card.addEventListener('click', flip);
    card.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); flip(); }
    });
  });

  /* --- form → mailto (sitio estático, sin backend) --- */
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('cf-name').value.trim();
    var org  = document.getElementById('cf-org').value.trim();
    var msg  = document.getElementById('cf-msg').value.trim();
    var subject = 'Contacto desde itera.cl' + (name ? ' — ' + name : '');
    var bodyLines = [];
    if (name) bodyLines.push('Nombre: ' + name);
    if (org)  bodyLines.push('Organización: ' + org);
    if (msg)  bodyLines.push('', msg);
    if (!bodyLines.length) bodyLines.push('Hola equipo Itera, me gustaría conversar sobre Business Agility.');
    window.location.href = 'mailto:info@itera.cl?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyLines.join('\n'));
  });
})();
