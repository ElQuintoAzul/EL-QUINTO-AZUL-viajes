(function(){
  // Galeria fauna
  var lb=document.getElementById('lightbox');
  var lbimg=lb?lb.querySelector('img'):null;
  if(lb&&lbimg){
  document.querySelectorAll('.fauna-photo img, .shark-card .ph img, .collage-pile .photo img').forEach(function(im){
    im.style.cursor='zoom-in';
    im.addEventListener('click',function(){lbimg.src=im.getAttribute('data-full')||im.src; lb.classList.add('open');});
  });
  lb.addEventListener('click',function(){lb.classList.remove('open'); lbimg.src='';});
  }
  // Tarjetas info clicables
  document.querySelectorAll('.info-card[data-href]').forEach(function(c){
    c.addEventListener('click',function(e){ if(e.target.closest('a,button')) return; window.open(c.getAttribute('data-href'),'_blank','noopener'); });
  });
  // Checklist equipo con memoria
  document.querySelectorAll('.kit-list li').forEach(function(li){
    var key='eqa_'+location.pathname+'_'+(li.textContent||'').trim().slice(0,44);
    try{ if(localStorage.getItem(key)==='1') li.classList.add('done'); }catch(e){}
    li.addEventListener('click',function(){
      li.classList.toggle('done');
      try{ localStorage.setItem(key, li.classList.contains('done')?'1':'0'); }catch(e){}
    });
  });
  // Modo claro / oscuro
  var tt=document.getElementById('themeToggle');
  if(tt){tt.addEventListener('click',function(){
    var cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',cur);
    try{localStorage.setItem('eqa-theme',cur);}catch(e){}
  });}
})();
