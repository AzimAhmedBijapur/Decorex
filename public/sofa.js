const containerS = document.querySelector(".model-container");

const sofa = document.querySelector("#sofa");

sofa.addEventListener("click",()=>{
  
  containerS.innerHTML = "";
  
  const modelUrl = ['https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/sofa.glb?v=1680872130341',
                   'https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/sofa_chair.glb?v=1679470485343',
                   'https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/white_sofa.glb?v=1680859461460'];
  for(let i = 0 ; i < modelUrl.length; i++){
    
  const card = document.createElement("div");
  card.classList.add("card");
  const model = document.createElement("model-viewer");
  model.setAttribute('src',modelUrl[i]);
  model.setAttribute('ar','ar');
  model.setAttribute('camera-controls','camera-controls');
  model.setAttribute('touch-action','pan-y');
  model.setAttribute('ar-modes','webxr');

  card.appendChild(model);
  containerS.appendChild(card);
  }
})