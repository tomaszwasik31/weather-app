let cityData;
let cityAQI;

const getData = async (input) => {
  let city = input;
  let lat;
  let lon;

  const getCoord = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=241019ef2c8c83b71acba7e390ce2fac`,
      { mode: "cors" }
    );
    const data = await response.json();
    lat = data[0].lat;
    lon = data[0].lon;
  };

  const getCityData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=4&appid=241019ef2c8c83b71acba7e390ce2fac&units=metric`,
      { mode: "cors" }
    );
    cityData = await response.json();
  };

  const getCityAQI = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=241019ef2c8c83b71acba7e390ce2fac`,
      { mode: "cors" }
    );
    cityAQI = await response.json();
  };

  const getAllData = async () => {
    await getCityData();
    await getCityAQI();
  };

  await getCoord();

  await getAllData();
};

export { getData, cityAQI, cityData };
