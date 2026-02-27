const gate=document.getElementById("gate");
const enterBtn=document.getElementById("enterBtn");
const phase1=document.getElementById("phase1");
const storm=document.getElementById("storm");
const flash=document.getElementById("flash");
const music=document.getElementById("bgmusic");

const thoughts=[
“I am being left.”,
“I am being replaced.”,
“I am too much.”,
“I am not enough.”,
“I ruined it.”,
“I suffocated him.”,
“I scared him away.”,
“I made him tired.”,
“I always do this.”,
“I always lose people.”,
“I am temporary.”,
“I am disposable.”,
“I am forgettable.”,
“I am not special.”,
“Someone else will be calmer.”,
“Someone else will be easier.”,
“Someone else will be less intense.”,
“Someone else will be better.”,
“I am embarrassing.”,
“I should’ve acted cooler.”,
“I should’ve been quieter.”,
“I should’ve texted less.”,
“I should’ve not cared so much.”,
“I am needy.”,
“I am pathetic.”,
“I am desperate.”,
“I’m exhausting.”,
“I drain people.”,
“I scare people.”,
“I push people away.”,
“I don’t deserve love.”,
“I don’t deserve stability.”,
“I don’t deserve to be chosen.”,
“I am not worth fighting for.”,
“I was just convenient.”,
“I imagined everything.”,
“I misread everything.”,
“I built a fantasy.”,
“I’m delusional.”,
“I’m dramatic.”,
“I’m weak.”,
“I’m childish.”,
“I’m behind everyone.”,
“I’m still that unwanted kid.”,
“No one stays.”,
“No one chooses me first.”,
“I am always second.”,
“I am background.”,
“I am extra.”,
“I am too intense to be loved.”,
“I am too damaged to be kept.”,
“I am hard to handle.”,
“I am a burden.”,
“I should disappear.”,
“I should detach.”,
“I should shut up.”,
“I should stop feeling.”,
“I should stop needing.”,
“I should stop caring.”,
“If I was colder, I’d be safer.”,
“If I was better, he’d stay.”,
“If I was better, they’d choose me.”,
“I am too broken to be anyone’s home.”,
“I am unfixable.”,
“I ruin everything.”,
“I always will.”,
“I am destined to be alone.”,
“I am hard to love.”,
“I am not enough.”
];

let spawnRate=1200;
let intensity=1;

enterBtn.onclick=()=>{
  gate.style.display="none";
  music.volume=0.6;
  music.play();
  startPhase1();
};

function startPhase1(){
  phase1.innerHTML="";
  const lines=[
    "I am not enough.",
    "I ruin everything.",
    "I am being left."
  ];
  lines.forEach((t,i)=>{
    const el=document.createElement("div");
    el.className="phase1-text";
    el.textContent=t;
    el.style.transition="all 2.5s ease";
    phase1.appendChild(el);
    setTimeout(()=>{
      el.style.opacity=1;
      el.style.transform="scale(1.6)";
    },200);
    setTimeout(()=>{
      el.style.transform="scale(0.05)";
      el.style.opacity=0;
    },2500);
  });
  setTimeout(()=>{
    phase1.innerHTML="";
    startStorm();
  },3200);
}

function startStorm(){
  storm.innerHTML="";
  spawnRate=1200;
  intensity=1;
  escalate();
}

function escalate(){
  const duration=30000;
  const start=Date.now();

  const interval=setInterval(()=>{
    spawnThought();
    const elapsed=Date.now()-start;
    const progress=elapsed/duration;
    spawnRate=1200-(progress*900);
    intensity=1+(progress*1.5);
    if(progress>0.8){
      flashScreen();
    }
    if(elapsed>duration){
      clearInterval(interval);
      setTimeout(startPhase1,2000);
    }
  },100);

  function spawnLoop(){
    spawnThought();
    setTimeout(spawnLoop,spawnRate);
  }
  spawnLoop();
}

function spawnThought(){
  const t=document.createElement("div");
  t.className="thought";
  t.textContent=thoughts[Math.floor(Math.random()*thoughts.length)];

  const x=Math.random()*100;
  const y=Math.random()*100;
  const rot=(Math.random()*16-8)*intensity;
  const scale=0.8+Math.random()*0.6*intensity;

  t.style.left=x+"%";
  t.style.top=y+"%";
  t.style.transform=`rotate(${rot}deg) scale(${scale})`;

  const r=Math.random();
  if(r<0.1){
    t.style.color="#ff0000";
  }else if(r<0.3){
    t.style.color="#ff4a4a";
  }else{
    t.style.color="#777";
  }

  storm.appendChild(t);
  setTimeout(()=>{t.remove();},6000);
}

function flashScreen(){
  flash.style.transition="opacity .15s";
  flash.style.opacity=1;
  setTimeout(()=>{
    flash.style.opacity=0;
  },120);
}
