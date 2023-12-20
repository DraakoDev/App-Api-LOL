const champNameTag = document.getElementById("champ-name");
const champSplashTag = document.getElementById("champ-splash");
const champLoreTag = document.getElementById("champ-lore");
const champTitleTag = document.getElementById("champ-title");
const opacitySplash = document.getElementById("section-champ");

/* Retorna la version actual del juego */

const getCurrentVersion = async () => {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!versionResponse.ok) {
      throw new Error(
        `Failed to fetch version data. Status: ${versionResponse.status}`
      );
    }

    const versionData = await versionResponse.json();

    return versionData[0];
  } catch (error) {
    console.log("Error in get version", error);
  }
};

/* Retorna un JSON con toda la data del campeon, el JSON incluye una lista de llaves para llamar a cada campeon, 
la lista de llaves se obtiene con .keys .

Para funcionar, requiere como paramentro la version del juego.
*/

const getChampionFullData = async (version) => {
  try {
    const championFullResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/es_MX/championFull.json`
    );

    if (!championFullResponse.ok) {
      throw new Error(
        `Failed to fetch user data. Status: ${championFullResponse.status}`
      );
    }

    const championFullData = await championFullResponse.json();

    return championFullData;
  } catch (error) {
    console.log("Error in get champion key", error);
  }
};

/* Obtiene los datos del campeon llamado por el valor de la key.

Para funcionar, requiere como parametro el json que retorna getChampionFullData(), y el valor de la key del campeon.
*/

const getChampionFromKey = async (champFullData, keyValue) => {
  return champFullData.data[keyValue];
};

const setRandomChampSplash = (splashUrl, randomChamp) => {
  const fragment = document.createDocumentFragment();

  const randomChampSplash = document.createElement("img");
  randomChampSplash.src = splashUrl;
  randomChampSplash.alt = randomChamp.name;
  randomChampSplash.classList.add("random-champ-splash");

  fragment.append(randomChampSplash);

  champSplashTag.appendChild(fragment);
};

const getRandomChamp = async (champKeys) => {
  const keysKeys = Object.keys(champKeys.keys);
  const randomKey = keysKeys[Math.floor(Math.random() * keysKeys.length)];
  const randomChamp = await getChampionFromKey(
    champKeys,
    champKeys.keys[randomKey]
  );

  return randomChamp;
};

const setData = async () => {
  const version = await getCurrentVersion();
  const champKeys = await getChampionFullData(version);
  const randomChamp = await getRandomChamp(champKeys);

  console.log(randomChamp);

  const randomSplashUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomChamp.id}_0.jpg`;

  setRandomChampSplash(randomSplashUrl, randomChamp);

  champNameTag.textContent = randomChamp.name;
  champLoreTag.textContent = randomChamp.lore;
  champTitleTag.textContent = randomChamp.title;

  opacitySplash.style.backgroundImage = "url(" + randomSplashUrl + ")";
};

setData();
