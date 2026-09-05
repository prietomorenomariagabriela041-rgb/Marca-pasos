const $ = id => document.getElementById(id);
const canvas = $("ecg");
const ctx = canvas.getContext("2d");

let running = false;
let phase = 0;
let last = performance.now();
let battery = 92;

function bindRange(id, out, digits=0) {
  $(id).addEventListener("input", () => {
    $(out).textContent = Number($(id).value).toFixed(digits);
  });
}
bindRange("rate","rateValue");
bindRange("output","outputValue",1);
bindRange("sensitivity","sensitivityValue",1);
bindRange("intrinsic","intrinsicValue");

$("mode").addEventListener("change", () => $("modeBadge").textContent = "Modo " + $("mode").value);

$("simulate").onclick = () => {
  running = true;
  $("status").textContent = "● SIMULACIÓN EN CURSO";
  $("status").style.background = "#12362f";
  updateAI();
};
$("pause").onclick = () => {
  running = false;
  $("status").textContent = "● SIMULACIÓN PAUSADA";
};
$("reset").onclick = () => {
  running = false;
  $("rate").value = 70; $("rateValue").textContent = "70";
  $("output").value = 5; $("outputValue").textContent = "5.0";
  $("sensitivity").value = 2.5; $("sensitivityValue").textContent = "2.5";
  $("intrinsic").value = 72; $("intrinsicValue").textContent = "72";
  battery = 92; $("battery").textContent = "92%";
  $("paced").textContent = "0";
  $("paceState").textContent = "EN ESPERA";
  $("rhythm").textContent = "RITMO NORMAL";
  $("aiText").textContent = "Pulsa “Iniciar simulación” para analizar el comportamiento del sistema.";
};

function gaussian(x, c, w, a) {
  return a * Math.exp(-Math.pow((x-c)/w, 2));
}

function ecgValue(x, beatPeriod, paced) {
  const t = ((x % beatPeriod) + beatPeriod) % beatPeriod / beatPeriod;
  let y = 0;
  y += gaussian(t, .18, .025, .18);      // P
  y -= gaussian(t, .28, .010, .12);      // Q
  y += gaussian(t, .30, .008, 1.00);     // R
  y -= gaussian(t, .325, .012, .28);     // S
  y += gaussian(t, .53, .075, .30);      // T
  if (paced && t < .035) y += gaussian(t, .018, .006, 1.25);
  return y;
}

function draw(now) {
  const dt = now - last; last = now;
  if (running) phase += dt;

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "#182a31"; ctx.lineWidth = 1;
  for(let x=0;x<canvas.width;x+=45){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke();}
  for(let y=0;y<canvas.height;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();}

  const intrinsic = Number($("intrinsic").value);
  const minRate = Number($("rate").value);
  const mode = $("mode").value;
  const pace = mode !== "ASYNC" && intrinsic < minRate;
  const displayed = pace ? minRate : intrinsic;
  const period = 60000 / displayed;

  ctx.beginPath();
  for(let x=0;x<canvas.width;x++){
    const time = phase + x * 8;
    const y = canvas.height/2 - ecgValue(time, period, pace) * 75;
    if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.strokeStyle = "#65d6c4"; ctx.lineWidth = 2.2; ctx.stroke();

  $("bpm").textContent = Math.round(displayed);
  $("paced").textContent = pace ? minRate : 0;
  $("paceState").textContent = pace ? "ESTIMULANDO" : "EN ESPERA";
  $("rhythm").textContent = pace ? "RITMO SOPORTADO" : "RITMO INTRÍNSECO";
  $("capture").textContent = Number($("sensitivity").value) <= 4 ? "ADECUADA" : "REVISAR";
  if(running && pace) {
    battery -= 0.00025;
    $("battery").textContent = Math.max(0, battery).toFixed(1) + "%";
  }
  requestAnimationFrame(draw);
}

function updateAI(){
  const intrinsic = Number($("intrinsic").value);
  const minRate = Number($("rate").value);
  const output = Number($("output").value);
  if(intrinsic < minRate){
    $("aiText").textContent = `La frecuencia intrínseca simulada (${intrinsic} BPM) está por debajo de la frecuencia mínima programada (${minRate} BPM). El simulador representa estímulos para mantener la frecuencia objetivo. Salida configurada: ${output.toFixed(1)} mA.`;
  } else {
    $("aiText").textContent = `La frecuencia intrínseca simulada (${intrinsic} BPM) está por encima del límite programado (${minRate} BPM); en este modelo, la estimulación permanece en espera.`;
  }
}
setInterval(updateAI, 700);
requestAnimationFrame(draw);
