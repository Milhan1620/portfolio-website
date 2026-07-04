// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Typed role effect =====
const roles = ['ML / Deep Learning', 'Computer Vision', 'NLP', 'Web & Mobile Development'];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];
  if(!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ===== Animated neural-network background =====
const canvas = document.getElementById('net-bg');
const ctx = canvas.getContext('2d');
let w, h, nodes;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function initNodes(){
  const count = Math.floor((w * h) / 55000);
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  }));
}
initNodes();
window.addEventListener('resize', initNodes);

function draw(){
  ctx.clearRect(0, 0, w, h);
  for(const n of nodes){
    n.x += n.vx; n.y += n.vy;
    if(n.x < 0 || n.x > w) n.vx *= -1;
    if(n.y < 0 || n.y > h) n.vy *= -1;
  }
  for(let i=0;i<nodes.length;i++){
    for(let j=i+1;j<nodes.length;j++){
      const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 140){
        ctx.strokeStyle = `rgba(44,71,112,${1 - dist/140})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
  for(const n of nodes){
    ctx.fillStyle = '#4CE0C7';
    ctx.beginPath();
    ctx.arc(n.x, n.y, 1.8, 0, Math.PI*2);
    ctx.fill();
  }
  requestAnimationFrame(draw);
}
draw();

// ===== Sticky nav shadow on scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 6px 20px rgba(0,0,0,0.25)' : 'none';
});
