require("dotenv").config();

console.log(process.env.API_KEY_LOL);

/* const cors = require("cors");
const express = require("express");
const axios = require("axios");

const { replaceString } = require("./str");

const app = express();

const PORT = process.env.PORT ?? 1234;

app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Middleware para analizar los cuerpos de las solicitudes con formularios
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const gameName = req.body.gameName;
  const tag = req.body.tag;

  // Realiza cualquier lógica adicional con los datos recibidos
  console.log(gameName, tag);
  try {
    const response = await axios.get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${replaceString(
        gameName,
        " ",
        "%20"
      )}/${tag}?api_key=RGAPI-72f4e2ad-94a4-447c-ba7e-39bf4cfc7aea`
    );

    const responseData = await response.json;
    res.end(responseData);
  } catch (err) {
    console.log("Error try get user data", err);

    return res.status(500).send("Internal server error");
  }
});

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Draakox/LAN1?api_key=RGAPI-72f4e2ad-94a4-447c-ba7e-39bf4cfc7aea"
    );

    res.json(response.data);
  } catch (err) {
    console.log("Error try get user data", err);

    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor esta escuchando en http://localhost:${PORT}`);
}); */
