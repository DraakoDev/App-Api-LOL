/* La funcion recibe un string para remplacar un caracter por una cadena, replace es el caracter a remplazar y toReplace por el que sera remplazado */

export const replaceString = (str, replace, toReplace) => {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === replace) {
      newString += toReplace;
    } else {
      newString += str[i];
    }
  }

  return newString;
};

/* Retorna la version actual del juego */

export const getCurrentVersion = async () => {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!versionResponse.ok)
      throw new Error(
        `Failed to fetch version data. Status: ${versionResponse.status}`
      );

    const versionData = await versionResponse.json();

    return versionData[0];
  } catch (error) {
    console.log("Error in get version", error);
  }
};
