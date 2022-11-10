import { getData} from "./api";


// default
getData("London");


const searchBtn = document.querySelector("#searchBtn");

const newInput = async () => {
  let input = document.querySelector("#input").value;
  await getData(input);
 
  input = "";
 
};

searchBtn.addEventListener("click", newInput);
