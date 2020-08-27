
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

const txtSearchCharacterName = document.getElementById("txtSearchCharacterName");
const ddSearchStatus = document.getElementById("ddSearchStatus");
const txtSearchSpecies = document.getElementById("txtSearchSpecies");
const txtSearchCharacterType = document.getElementById("txtSearchCharacterType");
const ddSearchGender = document.getElementById("ddSearchGender");
const btnSearchCharacters = document.getElementById("btnSearchCharacters");
btnSearchCharacters.addEventListener('click', searchCharacters); 

const txtSearchLocationName = document.getElementById("txtSearchLocationName");
const txtSearchLocationType = document.getElementById("txtSearchLocationType");
const txtDimension = document.getElementById("txtDimension");
const btnSearchLocations = document.getElementById("btnSearchLocations");
btnSearchLocations.addEventListener('click', searchLocations); 

const txtSearchEpisodeName = document.getElementById("txtSearchEpisodeName");
const txtEpisode = document.getElementById("txtEpisode");
const btnSearchEpisodes = document.getElementById("btnSearchEpisodes");
btnSearchEpisodes.addEventListener('click', searchEpisodes); 

const searchForm = document.getElementById("frmSearch");
// searchForm.addEventListener('submit', searchCharacters); 


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

// Get the results after the search
function searchCharacters(e){
  e.preventDefault();
  // console.log(e);

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";

  URL = "";
  searchString = "";
  
  currentPage = 0;
  lastPage = 0;


  URL = charactersURL;
  searchType = "characters";


  if (txtSearchCharacterName.value.length > 0) {
    searchString += "&name=" + txtSearchCharacterName.value.replace(' ', '%20');
  };

  if (ddSearchStatus.value !== "") {
    searchString += "&status=" + ddSearchStatus.value;
  };

  if (txtSearchSpecies.value.length > 0) {
    searchString += "&species=" + txtSearchSpecies.value.replace(' ', '%20');
  };

  if (txtSearchCharacterType.value.length > 0) {
    searchString += "&type=" + txtSearchCharacterType.value.replace(' ', '%20');
  };

  if (ddSearchGender.value !== "") {
    searchString += "&gender=" + ddSearchGender.value;
  };

  if (searchString !== "") {
    console.log(searchString);
    URL += "?" + searchString;
  };

  // console.log(URL);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);
      displayCharacters(jsonData);
  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });

};

// Get the results after the search
function searchLocations(e){
  e.preventDefault();
  // console.log(e);

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";

  URL = "";
  searchString = "";
  
  currentPage = 0;
  lastPage = 0;


  URL = locationsURL;
  searchType = "locations";


  if (txtSearchLocationName.value.length > 0) {
    searchString += "&name=" + txtSearchLocationName.value.replace(' ', '%20');
  };

  if (txtSearchLocationType.value.length > 0) {
    searchString += "&type=" + txtSearchLocationType.value.replace(' ', '%20');
  };

  if (txtDimension.value.length > 0) {
    searchString += "&type=" + txtDimension.value.replace(' ', '%20');
  };

  if (searchString !== "") {
    console.log(searchString);
    URL += "?" + searchString;
  };

  // console.log(URL);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);
      displayLocations(jsonData);
  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });

};

// Get the results after the search
function searchEpisodes(e){
  e.preventDefault();
  // console.log(e);

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";

  URL = "";
  searchString = "";
  
  currentPage = 0;
  lastPage = 0;


  URL = episodesURL;
  searchType = "episodes";


  if (txtSearchEpisodeName.value.length > 0) {
    searchString += "&name=" + txtSearchEpisodeName.value.replace(' ', '%20');
  };

  if (txtEpisode.value.length > 0) {
    searchString += "&episode=" + txtEpisode.value.replace(' ', '%20');
  };

  if (searchString !== "") {
    console.log(searchString);
    URL += "?" + searchString;
  };

  // console.log(URL);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);
      displayEpisodes(jsonData);
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
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let genderP = document.createElement("p");
          genderP.innerHTML = "Gender: " + results[i].gender;

          let speciesP = document.createElement("p");
          speciesP.innerHTML = "Species: " + results[i].species;

          let statusP = document.createElement("p");
          statusP.innerHTML = "Status: " + results[i].status;

          let typeP = document.createElement("p");
          typeP.innerHTML = "Type: " + results[i].type;

          let locationP = document.createElement("p");
          locationP.innerHTML = "Location: "; // + results[i].location.name;
          if (results[i].location.url !== "") {
            let locationLink = document.createElement("a");
            locationLink.href = results[i].location.url;
            locationLink.alt = results[i].location.name;
            locationLink.innerHTML = results[i].location.name
            // locationLink.target = "_blank";
            locationLink.addEventListener('click', loadDetailsModal);
            locationP.appendChild(locationLink);
          } else {
            locationP.innerHTML += results[i].location.name;
          };

          let originP = document.createElement("p");
          originP.innerHTML = "Origin: "; // + results[i].origin.name;
          if (results[i].origin.url !== "") {
            let originLink = document.createElement("a");
            originLink.href = results[i].origin.url;
            originLink.alt = results[i].origin.name;
            originLink.innerHTML = results[i].origin.name
            // locationLink.target = "_blank";
            originLink.addEventListener('click', loadDetailsModal);
            originP.appendChild(originLink);
          } else {
            originP.innerHTML += results[i].origin.name;
          };


          let episodeArray = results[i].episode;
          let episodeP = document.createElement("p");
          episodeP.innerHTML = "Episode(s): ";

          let episodeLink = document.createElement("a");
          let episodeList = "";

          for (let j = 0; j < episodeArray.length; j++) {
            // episodeP.innerHTML += episodeArray[j];
            let urlLink = document.createElement("a");
            urlLink.href = episodeArray[j];
            urlLink.alt = episodeArray[j];
            urlLink.innerHTML = episodeArray[j];
            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < episodeArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            episodeList += episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1);
            if (j < episodeArray.length - 1) {
              episodeList += ",";
            };
        
            episodeP.appendChild(urlLink);
            // if (j < episodeArray.length - 1) {
            //   episodeP.innerHTML += ", ";
            // };
          };

          episodeLink.href = episodesURL + episodeList;
          episodeLink.alt = episodesURL + episodeList;
          episodeLink.innerHTML = episodesURL + episodeList;
          // episodeLink.target = "_blank";
          if (episodeArray.length > 1) {
            episodeLink.addEventListener('click', getMultipleEpisodes);
          } else {
            episodeLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(genderP);
          cardBodyDiv.appendChild(speciesP);
          cardBodyDiv.appendChild(statusP);
          cardBodyDiv.appendChild(typeP);
          cardBodyDiv.appendChild(locationP);
          cardBodyDiv.appendChild(originP);

          cardBodyDiv.appendChild(episodeP);
          cardBodyDiv.appendChild(episodeLink);

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
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let dimensionP = document.createElement("p");
          dimensionP.innerHTML = "Dimension: " + results[i].dimension;

          let typeP = document.createElement("p");
          typeP.innerHTML = "Type: " + results[i].type;


          let residentsArray = results[i].residents;
          let residentsP = document.createElement("p");
          residentsP.innerHTML = "Resident(s): ";

          let residentsLink = document.createElement("a");
          let residentList = "";

          for (let j = 0; j < residentsArray.length; j++) {
            // residentsP.innerHTML += residentsArray[j];
            let urlLink = document.createElement("a");
            urlLink.href = residentsArray[j];
            urlLink.alt = residentsArray[j];
            urlLink.innerHTML = residentsArray[j];
            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < residentsArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            residentList += residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1);
            if (j < residentsArray.length - 1) {
              residentList += ",";
            };

            residentsP.appendChild(urlLink);
            // if (j < residentsArray.length - 1) {
            //   residentsP.innerHTML += ", ";
            // };
          };

          residentsLink.href = charactersURL + residentList;
          residentsLink.alt = charactersURL + residentList;
          residentsLink.innerHTML = charactersURL + residentList;
          // residentsLink.target = "_blank";
          if (residentsArray.length > 1) {
            residentsLink.addEventListener('click', getMultipleCharacters);
          } else {
            residentsLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(dimensionP);
          cardBodyDiv.appendChild(typeP);

          cardBodyDiv.appendChild(residentsP);
          cardBodyDiv.appendChild(residentsLink);

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
      let nameLink = document.createElement("a");
      nameLink.href = results[i].url;
      nameLink.alt = results[i].name;
      nameLink.innerHTML = results[i].name;
      // nameLink.target = "_blank";
      nameLink.addEventListener('click', loadDetailsModal);

      let episodeP = document.createElement("p");
      episodeP.innerHTML = "Episode: " + results[i].episode;

      let air_dateP = document.createElement("p");
      air_dateP.innerHTML = "Air Date: " + results[i].air_date;


      let charactersArray = results[i].characters;
      let charactersP = document.createElement("p");
      charactersP.innerHTML = "Character(s): ";

      let charactersLink = document.createElement("a");
      let charactersList = "";

      for (let j = 0; j < charactersArray.length; j++) {
        // charactersP.innerHTML += charactersArray[j];
        let urlLink = document.createElement("a");
        urlLink.href = charactersArray[j];
        urlLink.alt = charactersArray[j];
        urlLink.innerHTML = charactersArray[j];
        // urlLink.target = "_blank";
        urlLink.addEventListener('click', loadDetailsModal);

        if (j < charactersArray.length - 1) {
          urlLink.innerHTML += ", ";
        };

        charactersList += charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1);
        if (j < charactersArray.length - 1) {
          charactersList += ",";
        };

        charactersP.appendChild(urlLink);
        // if (j < charactersArray.length - 1) {
        //   characters.innerHTML += ", ";
        // };
      };

      charactersLink.href = charactersURL + charactersList;
      charactersLink.alt = charactersURL + charactersList;
      charactersLink.innerHTML = charactersURL + charactersList;
      // charactersLink.target = "_blank";
      if (charactersArray.length > 1) {
        charactersLink.addEventListener('click', getMultipleCharacters);
      } else {
        charactersLink.addEventListener('click', loadDetailsModal);
      };
      
      cardBodyDiv.appendChild(nameP);
      cardBodyDiv.appendChild(nameLink);
      cardBodyDiv.appendChild(episodeP);
      cardBodyDiv.appendChild(air_dateP);

      cardBodyDiv.appendChild(charactersP);
      cardBodyDiv.appendChild(charactersLink);

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
  // console.log(e);

  // Removes ?page=# to the URL
  if (URL.includes("?page=")) {
    URL = URL.slice(0, -7)
    // console.log(URL);
  }

  nextPage = currentPage + 1;
  // Search Pagination
  URL = URL + "?page=" + nextPage;

  // Keeps adding ?page= to the URL
  // Fixed
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

function loadDetailsModal(e){
  e.preventDefault();

  console.log(e);
  let detailURL = e.srcElement.href;

  let detailCategory = detailURL;
  detailCategory = detailCategory.replace("http://", "https://");
  detailCategory = detailCategory.replace(baseURL, "");
  // detailCategory = detailCategory.replace("http://rickandmortyapi.com/api/", "");
  // detailCategory = detailCategory.substr(0,detailURL.lastIndexOf('/'));
  detailCategory = detailCategory.substr(0,detailCategory.indexOf('/'));
  console.log("detailCategory", detailCategory);


  fetch(detailURL)
  .then(result => {
      console.log(result);
      return result.json();
  })
  .then(jsonData => {
      console.log(jsonData);

      switch (detailCategory) {
        case "character":
            displayCharactersModal(jsonData);
            break;
        case "location":
            displayLocationsModal(jsonData);
            break;
        case "episode":
            displayEpisodesModal(jsonData);
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

function displayCharactersModal(jsonData){
  console.log(jsonData);

  while (detailsModalBody.firstChild) { // while the value is not null
    detailsModalBody.removeChild(detailsModalBody.firstChild);
  };

  let results = jsonData;
  // console.log(results);

  detailsModalTitle.innerHTML = "<strong>" + results.name + "</strong>";

  let resultImg = document.createElement("img");
  resultImg.src = results.image;

  let nameLink = document.createElement("a");
  nameLink.href = results.url;
  nameLink.alt = results.name;
  nameLink.innerHTML = results.name;
  // nameLink.target = "_blank";
  nameLink.addEventListener('click', loadDetailsModal);

  let genderP = document.createElement("p");
  genderP.innerHTML = "Gender: " + results.gender;

  let speciesP = document.createElement("p");
  speciesP.innerHTML = "Species: " + results.species;

  let statusP = document.createElement("p");
  statusP.innerHTML = "Status: " + results.status;

  let typeP = document.createElement("p");
  typeP.innerHTML = "Type: " + results.type;

  let locationP = document.createElement("p");
  locationP.innerHTML = "Location: "; // + results.location.name;
  if (results.location.url !== "") {
    let locationLink = document.createElement("a");
    locationLink.href = results.location.url;
    locationLink.alt = results.location.name;
    locationLink.innerHTML = results.location.name
    // locationLink.target = "_blank";
    locationLink.addEventListener('click', loadDetailsModal);
    locationP.appendChild(locationLink);
  } else {
    locationP.innerHTML += results.location.name;
  };

  let originP = document.createElement("p");
  originP.innerHTML = "Origin: "; // + results.origin.name;
  if (results.origin.url !== "") {
    let originLink = document.createElement("a");
    originLink.href = results.origin.url;
    originLink.alt = results.origin.name;
    originLink.innerHTML = results.origin.name
    // locationLink.target = "_blank";
    originLink.addEventListener('click', loadDetailsModal);
    originP.appendChild(originLink);
  } else {
    originP.innerHTML += results.origin.name;
  };


  let episodeArray = results.episode;
  let episodeP = document.createElement("p");
  episodeP.innerHTML = "Episode(s): ";

  let episodeLink = document.createElement("a");
  let episodeList = "";

  for (let j = 0; j < episodeArray.length; j++) {
    // episodeP.innerHTML += episodeArray[j];
    let urlLink = document.createElement("a");
    urlLink.href = episodeArray[j];
    urlLink.alt = episodeArray[j];
    urlLink.innerHTML = episodeArray[j];
    // urlLink.target = "_blank";
    urlLink.addEventListener('click', loadDetailsModal);

    if (j < episodeArray.length - 1) {
      urlLink.innerHTML += ", ";
    };

    episodeList += episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1);
    if (j < episodeArray.length - 1) {
      episodeList += ",";
    };

    episodeP.appendChild(urlLink);
    // if (j < episodeArray.length - 1) {
    //   episodeP.innerHTML += ", ";
    // };
  };

  episodeLink.href = episodesURL + episodeList;
  episodeLink.alt = episodesURL + episodeList;
  episodeLink.innerHTML = episodesURL + episodeList;
  // episodeLink.target = "_blank";
  if (episodeArray.length > 1) {
    episodeLink.addEventListener('click', getMultipleEpisodes);
  } else {
    episodeLink.addEventListener('click', loadDetailsModal);
  };


  detailsModalBody.appendChild(resultImg);
  detailsModalBody.appendChild(nameLink);
  detailsModalBody.appendChild(genderP);
  detailsModalBody.appendChild(speciesP);
  detailsModalBody.appendChild(statusP);
  detailsModalBody.appendChild(typeP);
  detailsModalBody.appendChild(locationP);
  detailsModalBody.appendChild(originP);

  detailsModalBody.appendChild(episodeP);
  detailsModalBody.appendChild(episodeLink);

  $('#detailsModal').modal("show");

};

function displayLocationsModal(jsonData){
  console.log(jsonData);

  while (detailsModalBody.firstChild) { // while the value is not null
    detailsModalBody.removeChild(detailsModalBody.firstChild);
  };

  let results = jsonData;
  // console.log(results);

  detailsModalTitle.innerHTML = "<strong>" + results.name + "</strong>";

  let nameLink = document.createElement("a");
  nameLink.href = results.url;
  nameLink.alt = results.name;
  nameLink.innerHTML = results.name;
  // nameLink.target = "_blank";
  nameLink.addEventListener('click', loadDetailsModal);

  let dimensionP = document.createElement("p");
  dimensionP.innerHTML = "Dimension: " + results.dimension;

  let typeP = document.createElement("p");
  typeP.innerHTML = "Type: " + results.type;


  let residentsArray = results.residents;
  let residentsP = document.createElement("p");
  residentsP.innerHTML = "Resident(s): ";

  let residentsLink = document.createElement("a");
  let residentList = "";

  for (let j = 0; j < residentsArray.length; j++) {
    // residentsP.innerHTML += residentsArray[j];
    let urlLink = document.createElement("a");
    urlLink.href = residentsArray[j];
    urlLink.alt = residentsArray[j];
    urlLink.innerHTML = residentsArray[j];
    // urlLink.target = "_blank";
    urlLink.addEventListener('click', loadDetailsModal);

    if (j < residentsArray.length - 1) {
      urlLink.innerHTML += ", ";
    };

    residentList += residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1);
    if (j < residentsArray.length - 1) {
      residentList += ",";
    };

    residentsP.appendChild(urlLink);
    // if (j < residentsArray.length - 1) {
    //   residentsP.innerHTML += ", ";
    // };
  };

  residentsLink.href = charactersURL + residentList;
  residentsLink.alt = charactersURL + residentList;
  residentsLink.innerHTML = charactersURL + residentList;
  // residentsLink.target = "_blank";
  if (residentsArray.length > 1) {
    residentsLink.addEventListener('click', getMultipleCharacters);
  } else {
    residentsLink.addEventListener('click', loadDetailsModal);
  };


  detailsModalBody.appendChild(nameLink);
  detailsModalBody.appendChild(dimensionP);
  detailsModalBody.appendChild(typeP);

  detailsModalBody.appendChild(residentsP);
  detailsModalBody.appendChild(residentsLink);

  $('#detailsModal').modal("show");

};

function displayEpisodesModal(jsonData){
  console.log(jsonData);

  while (detailsModalBody.firstChild) { // while the value is not null
    detailsModalBody.removeChild(detailsModalBody.firstChild);
  };

  let results = jsonData;
  // console.log(results);

  detailsModalTitle.innerHTML = "<strong>" + results.name + "</strong>";

      let nameLink = document.createElement("a");
      nameLink.href = results.url;
      nameLink.alt = results.name;
      nameLink.innerHTML = results.name;
      // nameLink.target = "_blank";
      nameLink.addEventListener('click', loadDetailsModal);

      let episodeP = document.createElement("p");
      episodeP.innerHTML = "Episode: " + results.episode;

      let air_dateP = document.createElement("p");
      air_dateP.innerHTML = "Air Date: " + results.air_date;


      let charactersArray = results.characters;
      let charactersP = document.createElement("p");
      charactersP.innerHTML = "Character(s): ";

      let charactersLink = document.createElement("a");
      let charactersList = "";

      for (let j = 0; j < charactersArray.length; j++) {
        // charactersP.innerHTML += charactersArray[j];
        let urlLink = document.createElement("a");
        urlLink.href = charactersArray[j];
        urlLink.alt = charactersArray[j];
        urlLink.innerHTML = charactersArray[j];
        // urlLink.target = "_blank";
        urlLink.addEventListener('click', loadDetailsModal);

        if (j < charactersArray.length - 1) {
          urlLink.innerHTML += ", ";
        };

        charactersList += charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1);
        if (j < charactersArray.length - 1) {
          charactersList += ",";
        };

        charactersP.appendChild(urlLink);
        // if (j < charactersArray.length - 1) {
        //   characters.innerHTML += ", ";
        // };
      };

      charactersLink.href = charactersURL + charactersList;
      charactersLink.alt = charactersURL + charactersList;
      charactersLink.innerHTML = charactersURL + charactersList;
      // charactersLink.target = "_blank";
      if (charactersArray.length > 1) {
        charactersLink.addEventListener('click', getMultipleCharacters);
      } else {
        charactersLink.addEventListener('click', loadDetailsModal);
      };

      detailsModalBody.appendChild(nameLink);
      detailsModalBody.appendChild(episodeP);
      detailsModalBody.appendChild(air_dateP);

      detailsModalBody.appendChild(charactersP);
      detailsModalBody.appendChild(charactersLink);

      $('#detailsModal').modal("show");

};

function getMultipleCharacters(e){
  e.preventDefault();
  // console.log(e);

  // txtSearch.value = e.srcElement.text.replace(',', '');
  // txtExcludeSearch.value = "";

  $('#detailsModal').modal("hide")

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";


  URL = e.srcElement.text;
  searchType = "characters";

  // getResults(e);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);
      displayMultipleCharacters(jsonData);
  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });

};

function displayMultipleCharacters(jsonData){
  console.log(jsonData);

  let results = jsonData;
  // console.log(results);

  if (results.length > 0) {
    // resultsHeader.style.display = 'flex';
    resultsDiv.style.display = 'flex';
    // moreDiv.style.display = 'flex';
    // moreLink.style.display = 'flex';

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
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let genderP = document.createElement("p");
          genderP.innerHTML = "Gender: " + results[i].gender;

          let speciesP = document.createElement("p");
          speciesP.innerHTML = "Species: " + results[i].species;

          let statusP = document.createElement("p");
          statusP.innerHTML = "Status: " + results[i].status;

          let typeP = document.createElement("p");
          typeP.innerHTML = "Type: " + results[i].type;

          let locationP = document.createElement("p");
          locationP.innerHTML = "Location: "; // + results[i].location.name;
          if (results[i].location.url !== "") {
            let locationLink = document.createElement("a");
            locationLink.href = results[i].location.url;
            locationLink.alt = results[i].location.name;
            locationLink.innerHTML = results[i].location.name
            // locationLink.target = "_blank";
            locationLink.addEventListener('click', loadDetailsModal);
            locationP.appendChild(locationLink);
          } else {
            locationP.innerHTML += results[i].location.name;
          };

          let originP = document.createElement("p");
          originP.innerHTML = "Origin: "; // + results[i].origin.name;
          if (results[i].origin.url !== "") {
            let originLink = document.createElement("a");
            originLink.href = results[i].origin.url;
            originLink.alt = results[i].origin.name;
            originLink.innerHTML = results[i].origin.name
            // locationLink.target = "_blank";
            originLink.addEventListener('click', loadDetailsModal);
            originP.appendChild(originLink);
          } else {
            originP.innerHTML += results[i].origin.name;
          };


          let episodeArray = results[i].episode;
          let episodeP = document.createElement("p");
          episodeP.innerHTML = "Episode(s): ";

          let episodeLink = document.createElement("a");
          let episodeList = "";

          for (let j = 0; j < episodeArray.length; j++) {
            // episodeP.innerHTML += episodeArray[j];
            let urlLink = document.createElement("a");
            urlLink.href = episodeArray[j];
            urlLink.alt = episodeArray[j];
            urlLink.innerHTML = episodeArray[j];
            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < episodeArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            episodeList += episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1);
            if (j < episodeArray.length - 1) {
              episodeList += ",";
            };
        
            episodeP.appendChild(urlLink);
            // if (j < episodeArray.length - 1) {
            //   episodeP.innerHTML += ", ";
            // };
          };

          episodeLink.href = episodesURL + episodeList;
          episodeLink.alt = episodesURL + episodeList;
          episodeLink.innerHTML = episodesURL + episodeList;
          // episodeLink.target = "_blank";
          if (episodeArray.length > 1) {
            episodeLink.addEventListener('click', getMultipleEpisodes);
          } else {
            episodeLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(genderP);
          cardBodyDiv.appendChild(speciesP);
          cardBodyDiv.appendChild(statusP);
          cardBodyDiv.appendChild(typeP);
          cardBodyDiv.appendChild(locationP);
          cardBodyDiv.appendChild(originP);

          cardBodyDiv.appendChild(episodeP);
          cardBodyDiv.appendChild(episodeLink);

          cardDiv.appendChild(resultImg);
          cardDiv.appendChild(cardBodyDiv);
          resultsRowDiv.appendChild(cardDiv);
    };
  
    resultsContainerDiv.appendChild(resultsRowDiv);

    resultsDiv.appendChild(resultsContainerDiv);

  };

};

function getMultipleLocations(e){
  // ###########
  // UNTESTED
  // ###########
  e.preventDefault();
  // console.log(e);

  // txtSearch.value = e.srcElement.text.replace(',', '');
  // txtExcludeSearch.value = "";

  $('#detailsModal').modal("hide")

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";


  URL = e.srcElement.text;
  searchType = "locations";

  // getResults(e);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);
      displayMultipleLocations(jsonData);
  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });

};

function displayMultipleLocations(jsonData){
  // ###########
  // UNTESTED
  // ###########
  console.log(jsonData);

  let results = jsonData;
  // console.log(results);

  if (results.length > 0) {
    // resultsHeader.style.display = 'flex';
    resultsDiv.style.display = 'flex';
    // moreDiv.style.display = 'flex';
    // moreLink.style.display = 'flex';

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
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let dimensionP = document.createElement("p");
          dimensionP.innerHTML = "Dimension: " + results[i].dimension;

          let typeP = document.createElement("p");
          typeP.innerHTML = "Type: " + results[i].type;


          let residentsArray = results[i].residents;
          let residentsP = document.createElement("p");
          residentsP.innerHTML = "Resident(s): ";

          let residentsLink = document.createElement("a");
          let residentList = "";

          for (let j = 0; j < residentsArray.length; j++) {
            // residentsP.innerHTML += residentsArray[j];
            let urlLink = document.createElement("a");
            urlLink.href = residentsArray[j];
            urlLink.alt = residentsArray[j];
            urlLink.innerHTML = residentsArray[j];
            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < residentsArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            residentList += residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1);
            if (j < residentsArray.length - 1) {
              residentList += ",";
            };

            residentsP.appendChild(urlLink);
            // if (j < residentsArray.length - 1) {
            //   residentsP.innerHTML += ", ";
            // };
          };

          residentsLink.href = charactersURL + residentList;
          residentsLink.alt = charactersURL + residentList;
          residentsLink.innerHTML = charactersURL + residentList;
          // residentsLink.target = "_blank";
          if (residentsArray.length > 1) {
            residentsLink.addEventListener('click', getMultipleCharacters);
          } else {
            residentsLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(dimensionP);
          cardBodyDiv.appendChild(typeP);

          cardBodyDiv.appendChild(residentsP);
          cardBodyDiv.appendChild(residentsLink);

          cardDiv.appendChild(cardBodyDiv);
          resultsRowDiv.appendChild(cardDiv);
    };

    resultsContainerDiv.appendChild(resultsRowDiv);

    resultsDiv.appendChild(resultsContainerDiv);

  };

};

function getMultipleEpisodes(e){
  e.preventDefault();
  // console.log(e);

  // txtSearch.value = e.srcElement.text.replace(',', '');
  // txtExcludeSearch.value = "";

  $('#detailsModal').modal("hide")

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // resultsHeader.style.display = "none";
  resultsDiv.style.display = "none";
  errorHeader.style.display = "none";
  // moreDiv.style.display = "none";
  // moreLink.style.display = "none";


  URL = e.srcElement.text;
  searchType = "episodes";

  // getResults(e);

  fetch(URL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);
      displayMultipleLEpisodes(jsonData);
  })
  .catch(err => {
      console.log(err)
      errorHeader.innerText = err;
      errorHeader.style.display = 'flex';
  });

};

function displayMultipleLEpisodes(jsonData){
  console.log(jsonData);

  let results = jsonData;
  // console.log(results);

  if (results.length > 0) {
    // resultsHeader.style.display = 'flex';
    resultsDiv.style.display = 'flex';
    // moreDiv.style.display = 'flex';
    // moreLink.style.display = 'flex';

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
      let nameLink = document.createElement("a");
      nameLink.href = results[i].url;
      nameLink.alt = results[i].name;
      nameLink.innerHTML = results[i].name;
      // nameLink.target = "_blank";
      nameLink.addEventListener('click', loadDetailsModal);

      let episodeP = document.createElement("p");
      episodeP.innerHTML = "Episode: " + results[i].episode;

      let air_dateP = document.createElement("p");
      air_dateP.innerHTML = "Air Date: " + results[i].air_date;


      let charactersArray = results[i].characters;
      let charactersP = document.createElement("p");
      charactersP.innerHTML = "Character(s): ";

      let charactersLink = document.createElement("a");
      let charactersList = "";

      for (let j = 0; j < charactersArray.length; j++) {
        // charactersP.innerHTML += charactersArray[j];
        let urlLink = document.createElement("a");
        urlLink.href = charactersArray[j];
        urlLink.alt = charactersArray[j];
        urlLink.innerHTML = charactersArray[j];
        // urlLink.target = "_blank";
        urlLink.addEventListener('click', loadDetailsModal);

        if (j < charactersArray.length - 1) {
          urlLink.innerHTML += ", ";
        };

        charactersList += charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1);
        if (j < charactersArray.length - 1) {
          charactersList += ",";
        };

        charactersP.appendChild(urlLink);
        // if (j < charactersArray.length - 1) {
        //   characters.innerHTML += ", ";
        // };
      };

      charactersLink.href = charactersURL + charactersList;
      charactersLink.alt = charactersURL + charactersList;
      charactersLink.innerHTML = charactersURL + charactersList;
      // charactersLink.target = "_blank";
      if (charactersArray.length > 1) {
        charactersLink.addEventListener('click', getMultipleCharacters);
      } else {
        charactersLink.addEventListener('click', loadDetailsModal);
      };
      
      cardBodyDiv.appendChild(nameP);
      cardBodyDiv.appendChild(nameLink);
      cardBodyDiv.appendChild(episodeP);
      cardBodyDiv.appendChild(air_dateP);

      cardBodyDiv.appendChild(charactersP);
      cardBodyDiv.appendChild(charactersLink);
      
      cardDiv.appendChild(cardBodyDiv);
      resultsRowDiv.appendChild(cardDiv);
};

    resultsContainerDiv.appendChild(resultsRowDiv);

    resultsDiv.appendChild(resultsContainerDiv);

  };

};