const footerSing = document.getElementById("sing");
const currentDate = new Date();

const setCurrentYear = () => {
  footerSing.textContent = `Created by Draako ${currentDate.getFullYear()} ${
    footerSing.textContent
  }`;
};

setCurrentYear();