const menuButton=document.querySelector('#menu-button');const menu=document.querySelector('#main-menu');menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.querySelector('#inquiry-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#form-result').textContent='This is a local prototype. Your details were not sent or saved.'});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const reveals=[...document.querySelectorAll('.reveal')];if(reduced||!('IntersectionObserver'in window)){reveals.forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});reveals.forEach(el=>observer.observe(el))}
const progress=document.querySelector('.progress');let scheduled=false;function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(max>0?scrollY/max:0)+')';scheduled=false}addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress)}},{passive:true});updateProgress();

// Subtle photographic movement; content remains visible without JavaScript.
if(!reduced && matchMedia('(min-width: 761px)').matches){
  const frames=[...document.querySelectorAll('.world-visual')];
  let frameQueued=false;
  function moveFrames(){
    const mid=innerHeight/2;
    frames.forEach(frame=>{
      const box=frame.getBoundingClientRect();
      if(box.bottom<0||box.top>innerHeight)return;
      const offset=Math.max(-18,Math.min(18,(mid-(box.top+box.height/2))*.035));
      frame.style.setProperty('--drift',offset.toFixed(1)+'px');
    });
    frameQueued=false;
  }
  addEventListener('scroll',()=>{if(!frameQueued){frameQueued=true;requestAnimationFrame(moveFrames)}},{passive:true});
  moveFrames();
}

