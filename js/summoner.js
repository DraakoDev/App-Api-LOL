import { replaceString, getCurrentVersion } from "./usefull.js";
import { serverValue, serversData } from "./servers.js";

const regionName = document.getElementById("region-name");
const userNameTag = document.getElementById("user-name");
const levelTag = document.getElementById("level");
const imgProfileTag = document.getElementById("img-profile");
const gameNameInput = document.getElementById("game-name");
const tagLineInput = document.getElementById("tag-line");
const tagLineTag = document.getElementById("user-tag")
const testBtn = document.getElementById("test");

const apiKey = "RGAPI-37b1cad6-d06a-43d7-8f50-5ba9c549f1bb";

const getRegionRoute = () => {
  const key = serverValue[regionName.textContent];
  return serversData[key].name;
}

const getAccoutnData = async (gameName, tagLine) => {
  try{ 
    const accountResponse = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`);

    if (!accountResponse.ok) {
      throw new Error(
        `Failed to fetch user data. Status: ${accountResponse.status}`
      );
    }

    const accountData = accountResponse.json();

    return accountData;
  } catch(error) {
    console.log("Error in get user data", error);
  }
}

const getUserData = async (region, puuid) => {
  try {
    const userResponse = await fetch(
      `https://${region}/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`
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

const setUserData = async () => {
  const region2 = getRegionRoute();
  const correctName = replaceString(gameNameInput.value, " ", "%20");
  const tagLine = tagLineInput.value
  const version = await getCurrentVersion();
  const account = await getAccoutnData(correctName, tagLine);
  const userData = await getUserData(region2, account.puuid);

  userNameTag.textContent = account.gameName;
  levelTag.textContent = userData.summonerLevel;
  tagLineTag.textContent = account.tagLine;
  imgProfileTag.src = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${userData.profileIconId}.png`;
};

testBtn.addEventListener("click", () => {
  setUserData();
});