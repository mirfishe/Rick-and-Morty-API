
const baseURL = "https://rickandmortyapi.com/api/";
const charactersURL = "https://rickandmortyapi.com/api/character/";
const locationsURL = "https://rickandmortyapi.com/api/location/";
const episodesURL = "https://rickandmortyapi.com/api/episode/";

const btnCharacters = document.getElementById("btnCharacters");
const btnLocations = document.getElementById("btnLocations");
const btnEpisodes = document.getElementById("btnEpisodes");

btnCharacters.addEventListener('click', getResults);
btnLocations.addEventListener('click', getResults); 
btnEpisodes.addEventListener('click', getResults);


const errorHeader = document.getElementById("errorHeader");
// const resultsHeader = document.getElementById("h2Results");

const resultsDiv = document.getElementById("resultsDiv");
// const moreDiv = document.getElementById("moreDiv");

// moreDiv.style.display = "none";
resultsDiv.style.display = "none";
// resultsHeader.style.display = "none";
errorHeader.style.display = "none";

let URL = "";
let searchType = "";
let currentPage = 0;
let lastPage = 0;

// Get the results after the search
function getResults(e){
  e.preventDefault();

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";

  currentPage = 0;
  lastPage = 0;

  switch (e.srcElement.id) {
    case "btnCharacters":
      URL = charactersURL;
      searchType = "characters";
        break;
    case "btnLocations":
      URL = locationsURL;
      searchType = "locations";
        break;
    case "btnEpisodes":
      URL = episodesURL;
      searchType = "episodes";
        break;
    default:
      URL = baseURL;
  };

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);

      switch (e.srcElement.id) {
        case "btnCharacters":
            displayCharacters(jsonData);
            break;
        case "btnLocations":
            displayLocations(jsonData);
            break;
        case "btnEpisodes":
            displayEpisodes(jsonData);
            break;
        default:
          // URL = baseURL;
      };

  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });

};



function displayCharacters(jsonData){
  console.log(jsonData);

  let results = jsonData.results;
  // console.log(results);

  if (results.length > 0) {
    // resultsHeader.style.display = 'flex';
    resultsDiv.style.display = 'flex';
    // moreDiv.style.display = 'flex';
    // moreLink.style.display = 'flex';

    currentPage++;
    lastPage = jsonData.info.pages;
    // console.log("current", currentPage, "last", lastPage);

    if (currentPage > 1) {
      let moreRowDiv = document.getElementById("moreRowDiv");
      moreRowDiv.parentNode.removeChild(moreRowDiv);
    };

    let resultsContainerDiv = document.createElement("div");
    resultsContainerDiv.className = "container";

    let resultsRowDiv = document.createElement("div");
    resultsRowDiv.className = "row justify-content-center";

    for (let i = 0; i < results.length; i++) {
          // console.log(results[i]);

          let cardDiv = document.createElement("div");
          cardDiv.className = "card";

          let resultImg = document.createElement("img");
          resultImg.src = results[i].image;

          let cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          let nameP = document.createElement("p");
          nameP.innerHTML = "<strong>" + results[i].name + "</strong>";

          // let titleP = document.createElement("p");
          // titleP.innerHTML = "<strong>" + results[i].title + "</strong>";

          // let directorP = document.createElement("p");
          // directorP.innerHTML = "Director: " + results[i].director;

          // let producerP = document.createElement("p");
          // producerP.innerHTML = "Producer(s): " + results[i].producer;

          // let episodeIdP = document.createElement("p");
          // episodeIdP.innerHTML = "Episode ID: " + results[i].episode_id;

          // let releaseDate = new Date(results[i].release_date);
          // let releaseDateP = document.createElement("p");
          // releaseDateP.innerHTML = "Release Date " + releaseDate.toDateString();

          // let openingCrawlP = document.createElement("p");
          // // openingCrawlP.innerHTML = "Opening Crawl: " + results[i].opening_crawl;
          // openingCrawlP.innerHTML = results[i].opening_crawl;


          cardBodyDiv.appendChild(nameP);
          // cardBodyDiv.appendChild(titleP);
          // cardBodyDiv.appendChild(directorP);
          // cardBodyDiv.appendChild(producerP);
          // cardBodyDiv.appendChild(episodeIdP);
          // cardBodyDiv.appendChild(releaseDateP);
          // cardBodyDiv.appendChild(openingCrawlP);

          cardDiv.appendChild(resultImg);
          cardDiv.appendChild(cardBodyDiv);
          resultsRowDiv.appendChild(cardDiv);
    };

    let moreA = document.createElement("a");
    moreA.href = "#";
    // moreA.innerText =  "more " + txtSearch.value + " wallpapers";
    moreA.innerText =  "more";
    moreA.className = "colorBlackLink";
    // moreA.style = "text-align: right;";
    moreA.addEventListener('click', getMoreResults); 
  
  
    let moreRowDiv = document.createElement("div");
    moreRowDiv.className = "row justify-content-end p-4"; // "row clearfix";
    moreRowDiv.id = "moreRowDiv";
  
    // let moreColOneDiv = document.createElement("div");
    // moreColOneDiv.className = "col-md-11";
  
    let moreColTwoDiv = document.createElement("div");
    // moreColTwoDiv.className = "col-md-4";
    moreColTwoDiv.className = "col-md-auto text-right";
  
    moreColTwoDiv.appendChild(moreA);
  
    // moreRowDiv.appendChild(moreColOneDiv);
    moreRowDiv.appendChild(moreColTwoDiv);
    //resultsDiv.appendChild(moreRowDiv);
  
    resultsContainerDiv.appendChild(resultsRowDiv);
    resultsContainerDiv.appendChild(moreRowDiv);
  
    if (currentPage >= lastPage) {
      resultsContainerDiv.removeChild(moreRowDiv)
    };

    resultsDiv.appendChild(resultsContainerDiv);

  };

};

function displayLocations(jsonData){
  console.log(jsonData);

  let results = jsonData.results;
  // console.log(results);

  if (results.length > 0) {
    // resultsHeader.style.display = 'flex';
    resultsDiv.style.display = 'flex';
    // moreDiv.style.display = 'flex';
    // moreLink.style.display = 'flex';

    currentPage++;
    lastPage = jsonData.info.pages;
    // console.log("current", currentPage, "last", lastPage);

    if (currentPage > 1) {
      let moreRowDiv = document.getElementById("moreRowDiv");
      moreRowDiv.parentNode.removeChild(moreRowDiv);
    };

    let resultsContainerDiv = document.createElement("div");
    resultsContainerDiv.className = "container";

    let resultsRowDiv = document.createElement("div");
    resultsRowDiv.className = "row justify-content-center";

    for (let i = 0; i < results.length; i++) {
          // console.log(results[i]);

          let cardDiv = document.createElement("div");
          cardDiv.className = "card";

          let cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          let nameP = document.createElement("p");
          nameP.innerHTML = "<strong>" + results[i].name + "</strong>";

          // let birthYearP = document.createElement("p");
          // birthYearP.innerHTML = "Birth Year: " + results[i].birth_year;

          // let eyeColorP = document.createElement("p");
          // eyeColorP.innerHTML = "Eye Color: " + results[i].eye_color;

          // let genderP = document.createElement("p");
          // genderP.innerHTML = "Gender: " + results[i].gender;

          // let hairColorP = document.createElement("p");
          // hairColorP.innerHTML = "Hair Color: " + results[i].hair_color;

          // let heightP = document.createElement("p");
          // heightP.innerHTML = "Height: " + results[i].height;

          // let massP = document.createElement("p");
          // massP.innerHTML = "Mass: " + results[i].mass;

          // let skinColorP = document.createElement("p");
          // skinColorP.innerHTML = "Skin Color: " + results[i].skin_color;

          // let homeworldP = document.createElement("p");
          // homeworldP.innerHTML = "Homeworld: " + results[i].homeworld;


          cardBodyDiv.appendChild(nameP);
          // cardBodyDiv.appendChild(birthYearP);
          // cardBodyDiv.appendChild(eyeColorP);
          // cardBodyDiv.appendChild(genderP);
          // cardBodyDiv.appendChild(hairColorP);
          // cardBodyDiv.appendChild(heightP);
          // cardBodyDiv.appendChild(massP);
          // cardBodyDiv.appendChild(skinColorP);
          // cardBodyDiv.appendChild(homeworldP);

          cardDiv.appendChild(cardBodyDiv);
          resultsRowDiv.appendChild(cardDiv);
    };

    let moreA = document.createElement("a");
    moreA.href = "#";
    // moreA.innerText =  "more " + txtSearch.value + " wallpapers";
    moreA.innerText =  "more";
    moreA.className = "colorBlackLink";
    // moreA.style = "text-align: right;";
    moreA.addEventListener('click', getMoreResults); 
  
  
    let moreRowDiv = document.createElement("div");
    moreRowDiv.className = "row justify-content-end p-4"; // "row clearfix";
    moreRowDiv.id = "moreRowDiv";
  
    // let moreColOneDiv = document.createElement("div");
    // moreColOneDiv.className = "col-md-11";
  
    let moreColTwoDiv = document.createElement("div");
    // moreColTwoDiv.className = "col-md-4";
    moreColTwoDiv.className = "col-md-auto text-right";
  
    moreColTwoDiv.appendChild(moreA);
  
    // moreRowDiv.appendChild(moreColOneDiv);
    moreRowDiv.appendChild(moreColTwoDiv);
    //resultsDiv.appendChild(moreRowDiv);
  
    resultsContainerDiv.appendChild(resultsRowDiv);
    resultsContainerDiv.appendChild(moreRowDiv);
  
    if (currentPage >= lastPage) {
      resultsContainerDiv.removeChild(moreRowDiv)
    };

    resultsDiv.appendChild(resultsContainerDiv);

  };

};

function displayEpisodes(jsonData){
  console.log(jsonData);

  let results = jsonData.results;
  // console.log(results);

  if (results.length > 0) {
    // resultsHeader.style.display = 'flex';
    resultsDiv.style.display = 'flex';
    // moreDiv.style.display = 'flex';
    // moreLink.style.display = 'flex';

    currentPage++;
    lastPage = jsonData.info.pages;
    // console.log("current", currentPage, "last", lastPage);

    if (currentPage > 1) {
      let moreRowDiv = document.getElementById("moreRowDiv");
      moreRowDiv.parentNode.removeChild(moreRowDiv);
    };

    let resultsContainerDiv = document.createElement("div");
    resultsContainerDiv.className = "container";

    let resultsRowDiv = document.createElement("div");
    resultsRowDiv.className = "row justify-content-center";

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i]);

      let cardDiv = document.createElement("div");
      cardDiv.className = "card";

      let cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "card-body";

      let nameP = document.createElement("p");
      nameP.innerHTML = "<strong>" + results[i].name + "</strong>";

      // let climateP = document.createElement("p");
      // climateP.innerHTML = "Climate: " + results[i].climate;

      // let diameterP = document.createElement("p");
      // diameterP.innerHTML = "Diameter: " + results[i].diameter;

      // let gravityP = document.createElement("p");
      // gravityP.innerHTML = "Gravity: " + results[i].gravity;

      // let orbitalPeriodP = document.createElement("p");
      // orbitalPeriodP.innerHTML = "orbital Period: " + results[i].orbital_period;

      // let populationP = document.createElement("p");
      // populationP.innerHTML = "Population: " + results[i].population;

      // let rotationPeriodP = document.createElement("p");
      // rotationPeriodP.innerHTML = "Rotation Period: " + results[i].rotation_period;

      // let surfaceWaterP = document.createElement("p");
      // surfaceWaterP.innerHTML = "Surface Water: " + results[i].surface_water;

      // let terrainP = document.createElement("p");
      // terrainP.innerHTML = "Terrain: " + results[i].terrain;


      cardBodyDiv.appendChild(nameP);
      // cardBodyDiv.appendChild(climateP);
      // cardBodyDiv.appendChild(diameterP);
      // cardBodyDiv.appendChild(gravityP);
      // cardBodyDiv.appendChild(orbitalPeriodP);
      // cardBodyDiv.appendChild(populationP);
      // cardBodyDiv.appendChild(rotationPeriodP);
      // cardBodyDiv.appendChild(surfaceWaterP);
      // cardBodyDiv.appendChild(terrainP);

      cardDiv.appendChild(cardBodyDiv);
      resultsRowDiv.appendChild(cardDiv);
};

  let moreA = document.createElement("a");
  moreA.href = "#";
  // moreA.innerText =  "more " + txtSearch.value + " wallpapers";
  moreA.innerText =  "more";
  moreA.className = "colorBlackLink";
  // moreA.style = "text-align: right;";
  moreA.addEventListener('click', getMoreResults); 


  let moreRowDiv = document.createElement("div");
  moreRowDiv.className = "row justify-content-end p-4"; // "row clearfix";
  moreRowDiv.id = "moreRowDiv";

  // let moreColOneDiv = document.createElement("div");
  // moreColOneDiv.className = "col-md-11";

  let moreColTwoDiv = document.createElement("div");
  // moreColTwoDiv.className = "col-md-4";
  moreColTwoDiv.className = "col-md-auto text-right";

  moreColTwoDiv.appendChild(moreA);

  // moreRowDiv.appendChild(moreColOneDiv);
  moreRowDiv.appendChild(moreColTwoDiv);
  //resultsDiv.appendChild(moreRowDiv);

  resultsContainerDiv.appendChild(resultsRowDiv);
  resultsContainerDiv.appendChild(moreRowDiv);

  if (currentPage >= lastPage) {
    resultsContainerDiv.removeChild(moreRowDiv)
  };

    resultsDiv.appendChild(resultsContainerDiv);

  };

};


function getMoreResults(e){
  e.preventDefault();

  nextPage = currentPage + 1;
  // Search Pagination
  URL = URL + "?page=" + nextPage;

  console.log(URL);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);

      switch (searchType) {
        case "characters":
            displayCharacters(jsonData);
            break;
        case "locations":
            displayLocations(jsonData);
            break;
        case "episodes":
            displayEpisodes(jsonData);
            break;
        default:
          // URL = baseURL;
      };

  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });
  
};