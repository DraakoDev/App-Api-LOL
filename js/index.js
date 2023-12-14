const chooseRegion = document.getElementById("choose-region");
const regionTag = document.getElementById("region-tag");
const btnRegion = document.getElementById("btn-region");
const caret = document.getElementById("caret-icon");
const footerSing = document.getElementById("sing");
const opaco = document.getElementById("opaco");
const currentDate = new Date();

const keys = [
  "BR1",
  "EUN1",
  "EUW1",
  "JP1",
  "KR",
  "LA1",
  "LA2",
  "NA1",
  "OC1",
  "TR1",
  "RU",
  "PH2",
  "SG2",
  "TH2",
  "TW2",
  "VN2",
];

const routerValues = {
  BR1: "br1.api.riotgames.com",
  EUN1: "eun1.api.riotgames.com",
  EUW1: "euw1.api.riotgames.com",
  JP1: "jp1.api.riotgames.com",
  KR: "kr.api.riotgames.com",
  LA1: "la1.api.riotgames.com",
  LA2: "la2.api.riotgames.com",
  NA1: "na1.api.riotgames.com",
  OC1: "oc1.api.riotgames.com",
  TR1: "tr1.api.riotgames.com",
  RU: "ru.api.riotgames.com",
  PH2: "ph2.api.riotgames.com",
  SG2: "sg2.api.riotgames.com",
  TH2: "th2.api.riotgames.com",
  TW2: "tw2.api.riotgames.com",
  VN2: "vn2.api.riotgames.com",
};

const addButtons = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < keys.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = keys[i];
    fragment.append(btn);
  }

  chooseRegion.appendChild(fragment);
};

const closeChooseModal = () => {
  opaco.style.display = "none";
  chooseRegion.style.display = "none";
  caret.classList.remove("animate");
  caret.classList.add("antianimate");
};

const openChooseModal = () => {
  chooseRegion.style.display = "flex";
  opaco.style.display = "block";
  caret.classList.remove("antianimate");
  caret.classList.add("animate");
};

const setRegion = (e) => {
  const target = e.target.className;

  if (target !== "choose-region") {
    if (target !== "exit-div") {
      closeChooseModal();

      if (target !== "exit bi bi-x-lg") {
        regionTag.textContent = `${e.target.childNodes[0].data} `;
      }
    }
  }
};

const setCurrentYear = () => {
  footerSing.textContent =`Created by Draako ${currentDate.getFullYear()} ${footerSing.textContent}`;
}

addButtons();
setCurrentYear();

btnRegion.addEventListener("click", (e) => {
  e.preventDefault();
  openChooseModal();
});

chooseRegion.addEventListener("click", (e) => {
  e.preventDefault();
  setRegion(e);
});
