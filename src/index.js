import { getData, cityData, cityAQI } from "./api";
import { render } from "./render";

const weatherApp = async () => {
  const loadingDiv = document.querySelector(".loading");
  const appWrapper = document.querySelector(".app-wrapper");
  const toggleLoading = () => {
    loadingDiv.classList.toggle("hidden");
    appWrapper.classList.toggle("hidden");
  };

  //default data
  await getData("London");
  await render(cityData, cityAQI);
  toggleLoading();

  const searchBtn = document.querySelector("#searchBtn");
  const inputField = document.querySelector("#input");

  const newInput = async () => {
    let input = document.querySelector("#input").value;
    toggleLoading();
    await getData(input);
    await render(cityData, cityAQI);
    toggleLoading();
    input = "";
  };

  searchBtn.addEventListener("click", newInput);
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBtn.click();
    }
  });
};

weatherApp();
