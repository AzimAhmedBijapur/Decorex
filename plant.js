const container = document.querySelector(".model-container");

const plant = document.querySelector("#plant");

plant.addEventListener("click",()=>{
  
  container.innerHTML = "";
  
  const modelUrl = ['https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/free_pothos_potted_plant_-_money_plant.glb?v=1679468824610'];
  
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
  container.appendChild(card);
  }
})