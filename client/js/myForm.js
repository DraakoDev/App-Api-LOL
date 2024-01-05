document.addEventListener("DOMContentLoaded", async function () {
  const form = document.getElementById("summoner-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const gameName = document.getElementById("gameName").value;
    const tag = document.getElementById("tagLine").value;

    const jsonData = {
      gameName: gameName,
      tag: tag,
    };

    try {
      const response = await fetch("http://localhost:1234/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
    } catch (err) {
      console.log("Error al enviar los datos al servidor");
    }
  });
});
