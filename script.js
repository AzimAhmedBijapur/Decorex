const container = document.querySelector(".model-container");

const chair = document.querySelector("#chair");
const sofa = document.querySelector("#sofa");
const table = document.querySelector("#table");
const floor = document.querySelector("#floor");
const plant = document.querySelector("#plant");

chair.addEventListener("click",()=>{
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHtml="";
  container.appendChild(card);
})