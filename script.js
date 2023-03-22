const container = document.querySelector(".model-container");

const chair = document.querySelector("#chair");
const sofa = document.querySelector("#sofa");
const table = document.querySelector("#table");
const floor = document.querySelector("#floor");
const plant = document.querySelector("#plant");

chair.addEventListener("click",()=>{
  const modelUrl = ['https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/office_chair.glb?v=1679465307574',
                   'https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/office_chair.glb?v=1679465307574'];
  for(let i = 0 ; i < modelUrl.length; i++){
    
  const card = document.createElement("div");
  card.classList.add("card");
  const model = document.createElement("model-viewer");
  model.setAttribute('src',modelUrl[i]);
  model.setAttribute('src',modelUrl[i]);
  model.setAttribute('src',modelUrl[i]);
  model.setAttribute('src',modelUrl[i]);
  card.appendChild(model);
  container.appendChild(card);
  }
})