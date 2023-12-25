const userNameTag = document.getElementById("user-name");
const levelTag = document.getElementById("level");
const imgProfileTag = document.getElementById("img-profile");
const inputName = document.getElementById("search");

const apiKey = "RGAPI-158a4234-f57a-4577-90f2-fd9e9e082582";

export const routerValues = {
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

const getUserData = async () => {
  try {
    const userResponse = await fetch(
      `https://${routerValues.regionTag.textContent}/lol/summoner/v4/summoners/by-name/${inputName.value}?api_key=${apiKey}`
    );

    if (!userResponse.ok) {
      throw new Error(
        `Failed to fetch user data. Status: ${userResponse.status}`
      );
    }

    const userData = await userResponse.json();

    //console.log(userData.id);

    return userData;
  } catch (error) {
    console.log("Error in get user data", error);
  }
};

const setUserData = (userData, currentVersion) => {
  userNameTag.textContent = userData.name;
  levelTag.textContent = userData.summonerLevel;
  imgProfileTag.src = `https://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/profileicon/${userData.profileIconId}.png`;
};
