
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
const observer=('IntersectionObserver' in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('[data-form-status]');if(status)status.textContent='This demo form is not connected yet. Configure a secure backend or CRM endpoint before publishing.';}));
