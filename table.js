const containerT = document.querySelector(".model-container");

const table = document.querySelector("#table");

table.addEventListener("click",()=>{
  
  containerT.innerHTML = "";
  
  const modelUrl = ['https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/table.glb?v=1679469070644','https://cdn.glitch.me/7ede3348-1731-4eff-be67-e4d544bd7626/antique_table.glb?v=1680859324909'];
  for(let i = 0 ; i < modelUrl.length; i++){
    
  const card = document.createElement("div");
  card.classList.add("card");
  const model = document.createElement("model-viewer");
  model.setAttribute('src',modelUrl[i]);
  model.setAttribute('ar','ar');
  model.setAttribute('camera-controls','camera-controls');
  model.setAttribute('touch-action','pan-y');
  model.setAttribute('ar-modes','scene-viewer');

  card.appendChild(model);
  containerT.appendChild(card);
  }
})