const render = (cityData, cityAQI) => {


  const addCdeg = (parent) => {
    const cDeg = document.createElement("sup");
    cDeg.innerText = "°C";
    parent.appendChild(cDeg);
  };
  const ul = document.querySelector("#next-hours");

  const renderLi = (e) => {
    
    const li = document.createElement("li");
    li.classList = "preview";
    ul.appendChild(li);
    console.log(e);

    const myIcon = document.createElement("myicon");
    myIcon.classList = e.weather[0].main.toLowerCase();
    li.appendChild(myIcon);
    const p = document.createElement("p");
    p.innerText += ` ${e.dt_txt.slice(10, 16)} ${
      e.weather[0].description
    } ${Math.round(e.main.temp)}`;
    addCdeg(p);
    li.appendChild(p);
  };

  const renderMainData = () => {
    const city = document.querySelector("#city");
    city.textContent = cityData.city.name;

    const currentTime = document.querySelector("#currentTime");
    currentTime.textContent = "at " + cityData.list[0].dt_txt;

    const currentTemp = document.querySelector("#currentTemp");
    currentTemp.textContent = Math.round(cityData.list[0].main.temp);
    addCdeg(currentTemp);

    const currentCondition = document.querySelector("#currentCondition");
    currentCondition.className = cityData.list[0].weather[0].main.toLowerCase();

    const currentDesc = document.querySelector("#currentDesc");
    currentDesc.textContent = cityData.list[0].weather[0].description;

    const aqi = document.querySelector("#aqi");
    aqi.textContent = "AQI " + cityAQI.list[0].main.aqi;
  };
  const renderHoursData = () => {

    //clean first
    ul.innerHTML='';
    cityData.list.slice(1).forEach((e) => {
      renderLi(e);
    });
  };

  renderMainData();
  renderHoursData();
};

export { render };
