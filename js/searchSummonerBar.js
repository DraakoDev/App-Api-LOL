import { serversList } from "./servers.js";

const openModalRegion = document.getElementById("open-modal-region");
const regionsContainer = document.getElementById("regions-container");
const caretIcon = document.getElementById("caret-icon");
const regionNameTag = document.getElementById("region-name");
const regionModal = document.getElementById("region-modal");
const opacityChooseRegions = document.getElementById("opacity");
const exitBtnModal = document.getElementById("exit-modal-btn");

const addButtons = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < serversList.length; i++) {
    const btn = document.createElement("div");
    btn.textContent = serversList[i];
    fragment.append(btn);
  } 

  regionsContainer.appendChild(fragment);
};

const closeChooseModal = () => {
  regionModal.style.display = "none";
  opacityChooseRegions.style.display = "none";
  caretIcon.classList.remove("animate");
  caretIcon.classList.add("antianimate");
};

const openChooseModal = () => {
  regionModal.style.display = "flex";
  opacityChooseRegions.style.display = "block";
  caretIcon.classList.remove("antianimate");
  caretIcon.classList.add("animate");
};

const setRegion = (e) => {
  const target = e.target.className;

  if (target !== "regions-container") {
    regionNameTag.textContent = `${e.target.childNodes[0].data} `;
    closeChooseModal();
  }
};

openModalRegion.addEventListener("click", () => {
  openChooseModal();
});

exitBtnModal.addEventListener("click", () => {
  closeChooseModal();
})

regionsContainer.addEventListener("click", (e) => {
  e.preventDefault();
  setRegion(e);
});

addButtons();
