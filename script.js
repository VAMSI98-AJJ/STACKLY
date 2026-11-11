const b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.addEventListener('click',()=>b.setAttribute('aria-expanded',m.classList.toggle('open')));
m.addEventListener('click',e=>{if(e.target.closest('a'))m.classList.remove('open')});
document.getElementById('y').textContent=new Date().getFullYear();
