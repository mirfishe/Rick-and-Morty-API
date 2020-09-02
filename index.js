
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

const hdrSearchCharacters = document.getElementById("hdrSearchCharacters");
const hdrSearchLocations = document.getElementById("hdrSearchLocations");
const hdrSearchEpisodes = document.getElementById("hdrSearchEpisodes");

hdrSearchCharacters.addEventListener('click', toggleForms);
hdrSearchLocations.addEventListener('click', toggleForms); 
hdrSearchEpisodes.addEventListener('click', toggleForms);

// const collapseCharacters = document.getElementById("collapseCharacters");
// const collapseLocations = document.getElementById("collapseLocations");
// const collapseEpisodes = document.getElementById("collapseEpisodes");

const txtSearchCharacterName = document.getElementById("txtSearchCharacterName");
const ddSearchStatus = document.getElementById("ddSearchStatus");
// const txtSearchSpecies = document.getElementById("txtSearchSpecies");
const ddSearchSpecies = document.getElementById("ddSearchSpecies");
// const txtSearchCharacterType = document.getElementById("txtSearchCharacterType");
const ddSearchCharacterType = document.getElementById("ddSearchCharacterType");
const ddSearchGender = document.getElementById("ddSearchGender");
const btnSearchCharacters = document.getElementById("btnSearchCharacters");
btnSearchCharacters.addEventListener('click', searchCharacters); 

const txtSearchLocationName = document.getElementById("txtSearchLocationName");
// const txtSearchLocationType = document.getElementById("txtSearchLocationType");
const ddSearchLocationType = document.getElementById("ddSearchLocationType");
// const txtDimension = document.getElementById("txtDimension");
const ddSearchDimension = document.getElementById("ddSearchDimension");
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
let searchString = "";
let currentPage = 0;
let lastPage = 0;

// Search results don't need a more link because they aren't paginated?
// Search results do have pagination on them but there is an error in the pagination code?
// Test getMultipleLocations, displayMultipleLocations

// Build lookup arrays
let arrCharacters = [];
let arrLocations = [];
let arrEpisodes = [];

let arrSearchSpecies = [];
let arrSearchCharacterTypes = [];
let arrSearchLocationTypes = [];
let arrSearchDimensions = [];

loadAllLookupArrays();

function toggleForms(e){
  e.preventDefault();

  while (resultsDiv.firstChild) { // while the value is not null
    resultsDiv.removeChild(resultsDiv.firstChild);
  };

  // // Remove old items from drop down boxes
  // while (ddSearchSpecies.firstChild) { // while the value is not null
  //   ddSearchSpecies.removeChild(ddSearchSpecies.firstChild);
  // };
  // // Add first element back to drop down box
  // let optSearchSpecies = document.createElement("option");
  // optSearchSpecies.value = "";
  // optSearchSpecies.text = "Select Species";
  // ddSearchSpecies.add(optSearchSpecies);
  // // Sort the array
  // arrSearchSpecies.sort((a, b) => {
  //   if (a > b) {
  //       return 1;
  //   } else {
  //       return -1;
  //   };
  // });
  // // Add items to drop down boxes
  // for (let i = 0; i < arrSearchSpecies.length; i++) {
  //   // console.log(arrSearchSpecies[i]);
  //   let opt = document.createElement("option");
  //   opt.value = arrSearchSpecies[i];
  //   opt.text = arrSearchSpecies[i];
  //   ddSearchSpecies.add(opt);
  // };
  
  // // Remove old items from drop down boxes
  // while (ddSearchCharacterType.firstChild) { // while the value is not null
  //   ddSearchCharacterType.removeChild(ddSearchCharacterType.firstChild);
  // };
  // // Add first element back to drop down box
  // let optSearchCharacterType = document.createElement("option");
  // optSearchCharacterType.value = "";
  // optSearchCharacterType.text = "Select Type";
  // ddSearchCharacterType.add(optSearchCharacterType);
  // // Sort the array
  // arrSearchCharacterTypes.sort((a, b) => {
  //   if (a > b) {
  //       return 1;
  //   } else {
  //       return -1;
  //   };
  // });
  // // Add items to drop down boxes
  // for (let i = 0; i < arrSearchCharacterTypes.length; i++) {
  //   // console.log(arrSearchSpecies[i]);
  //   let opt = document.createElement("option");
  //   opt.value = arrSearchCharacterTypes[i];
  //   opt.text = arrSearchCharacterTypes[i];
  //   ddSearchCharacterType.add(opt);
  // };

  // // Remove old items from drop down boxes
  // while (ddSearchLocationType.firstChild) { // while the value is not null
  //   ddSearchLocationType.removeChild(ddSearchLocationType.firstChild);
  // };
  // // Add first element back to drop down box
  // let optSearchLocationType = document.createElement("option");
  // optSearchLocationType.value = "";
  // optSearchLocationType.text = "Select Type";
  // ddSearchLocationType.add(optSearchLocationType);
  // // Sort the array
  // arrSearchLocationTypes.sort((a, b) => {
  //   if (a > b) {
  //       return 1;
  //   } else {
  //       return -1;
  //   };
  // });
  // // Add items to drop down boxes
  // for (let i = 0; i < arrSearchLocationTypes.length; i++) {
  //   // console.log(arrSearchSpecies[i]);
  //   let opt = document.createElement("option");
  //   opt.value = arrSearchLocationTypes[i];
  //   opt.text = arrSearchLocationTypes[i];
  //   ddSearchLocationType.add(opt);
  // };

  // // Remove old items from drop down boxes
  // while (ddSearchDimension.firstChild) { // while the value is not null
  //   ddSearchDimension.removeChild(ddSearchDimension.firstChild);
  // };
  // // Add first element back to drop down box
  // let optSearchDimension = document.createElement("option");
  // optSearchDimension.value = "";
  // optSearchDimension.text = "Select Dimension";
  // ddSearchDimension.add(optSearchDimension);
  // // Sort the array
  // arrSearchDimensions.sort((a, b) => {
  //   if (a > b) {
  //       return 1;
  //   } else {
  //       return -1;
  //   };
  // });
  // // Add items to drop down boxes
  // for (let i = 0; i < arrSearchDimensions.length; i++) {
  //   // console.log(arrSearchSpecies[i]);
  //   let opt = document.createElement("option");
  //   opt.value = arrSearchDimensions[i];
  //   opt.text = arrSearchDimensions[i];
  //   ddSearchDimension.add(opt);
  // };

  $('#collapseCharacters').collapse('hide');
  $('#collapseLocations').collapse('hide');
  $('#collapseEpisodes').collapse('hide');

  // e.srcElement.id.collapse('show');

};

// Get the results after the search
function getResults(e){
  e.preventDefault();

  toggleForms(e);

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

  // if (txtSearchSpecies.value.length > 0) {
  //   searchString += "&species=" + txtSearchSpecies.value.replace(' ', '%20');
  // };

  if (ddSearchSpecies.value !== "") {
    searchString += "&species=" + ddSearchSpecies.value.replace(' ', '%20');
  };

  // if (txtSearchCharacterType.value.length > 0) {
  //   searchString += "&type=" + txtSearchCharacterType.value.replace(' ', '%20');
  // };

  if (ddSearchCharacterType.value !== "") {
    searchString += "&type=" + ddSearchCharacterType.value.replace(' ', '%20');
  };

  if (ddSearchGender.value !== "") {
    searchString += "&gender=" + ddSearchGender.value;
  };

  if (searchString !== "") {
    // console.log(searchString);
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

  // if (txtSearchLocationType.value.length > 0) {
  //   searchString += "&type=" + txtSearchLocationType.value.replace(' ', '%20');
  // };

  if (ddSearchLocationType.value !== "") {
    searchString += "&type=" + ddSearchLocationType.value.replace(' ', '%20');
  };

  // if (txtDimension.value.length > 0) {
  //   searchString += "&dimension=" + txtDimension.value.replace(' ', '%20');
  // };

  if (ddSearchDimension.value !== "") {
    searchString += "&dimension=" + ddSearchDimension.value.replace(' ', '%20');
  };

  if (searchString !== "") {
    // console.log(searchString);
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
    // console.log(searchString);
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
  // console.log(jsonData);

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

          // Build lookup arrays
          // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
          // let arrIDs =  arrCharacters.map((value)=>{ return value.id;});
          // if (arrIDs.indexOf(results[i].id) === -1) {
          //   arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
          // };
          // a.findIndex(t=>(t.place === v.place && t.name===v.name))===i) // https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
          // seen.hasOwnProperty(currentObject.name) // https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
          //if (!arrCharacters.hasOwnProperty(results[i].id)) { // How's this work with an object?
          // if statement isn't working correcly
          //  arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
          // };

          // https://www.geeksforgeeks.org/how-to-remove-duplicates-from-an-array-of-objects-using-javascript/
          // copiedarrCharacters = [...arrCharacters];
          // arrCharacters = copiedarrCharacters.filter(function(item, index){
          //   return copiedarrCharacters.indexOf(item) >= index;
          // });

          // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
          // let copiedarrCharacters = Array.from(new Set(id.map(a => a.id))).map(id => { return id.find(a => a.id === id) });
          // console.log(copiedarrCharacters);

          // if (results[i].species !== "") {
          //   if (arrSearchSpecies.indexOf(results[i].species) === -1) {
          //     arrSearchSpecies.push(results[i].species);
          //   };
          // };
          // if (results[i].type !== "") {
          //   if (arrSearchCharacterTypes.indexOf(results[i].type) === -1) {
          //     arrSearchCharacterTypes.push(results[i].type);
          //   };
          // };


          let cardDiv = document.createElement("div");
          cardDiv.className = "card m-2 p-2";

          let resultImg = document.createElement("img");
          resultImg.src = results[i].image;

          let cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          let nameP = document.createElement("p");
          // nameP.innerHTML = "<strong>" + results[i].name + "</strong>";
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let genderP = document.createElement("p");
          genderP.innerHTML = "Gender: "; // + results[i].gender;
          let genderLink = document.createElement("a");
          genderLink.href = results[i].gender;
          genderLink.alt = results[i].gender;
          genderLink.innerHTML = results[i].gender;
          // genderLink.target = "_blank";
          genderLink.addEventListener('click', searchByCharacterGender);

          let speciesP = document.createElement("p");
          speciesP.innerHTML = "Species: "; // + results[i].species;
          let speciesLink = document.createElement("a");
          speciesLink.href = results[i].species;
          speciesLink.alt = results[i].species;
          speciesLink.innerHTML = results[i].species;
          // speciesLink.target = "_blank";
          speciesLink.addEventListener('click', searchByCharacterSpecies);

          let statusP = document.createElement("p");
          statusP.innerHTML = "Status: "; // + results[i].status;
          let statusLink = document.createElement("a");
          statusLink.href = results[i].status;
          statusLink.alt = results[i].status;
          statusLink.innerHTML = results[i].status;
          // statusLink.target = "_blank";
          statusLink.addEventListener('click', searchByCharacterStatus);

          let typeP = document.createElement("p");
          let typeLink = document.createElement("a");
          if (results[i].type != "") {
            typeP.innerHTML = "Type: "; // + results[i].type;
            typeLink.href = results[i].type;
            typeLink.alt = results[i].type;
            typeLink.innerHTML = results[i].type;
            // typeLink.target = "_blank";
            typeLink.addEventListener('click', searchByCharacterType);
          };

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

            let urlLink = document.createElement("a");
            urlLink.href = episodeArray[j];
            urlLink.alt = episodeArray[j];
            urlLink.innerHTML = episodeArray[j];
            // Use lookup arrays
            // // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
            // // https://stackoverflow.com/questions/52460473/find-object-with-specific-value-in-array/52460509
            // // console.log("index of episode match", arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)), "index of item in array", episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1));
            // let indexOfEpisodeName = arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1));
            // console.log("indexOfEpisodeName", indexOfEpisodeName);
            // console.log("episodeName", arrEpisodes[indexOfEpisodeName].name);
            // // console.log("id from episode URL", episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1), "index of match", arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))], "name of match", arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))].name);
            // // if (arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)) == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)) {
            // if (arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))) {
            //   // console.log("id from episode link", episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1), "index of match", arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))].name);
            //   console.log("episode name", arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)).name)
            //   // urlLink.innerHTML = arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))].name;
            // } else {
            //   urlLink.innerHTML = episodeArray[j];
            // };

            for (let k = 0; k < arrEpisodes.length; k++) {
              if (episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1) == arrEpisodes[k].id) {
                // console.log("episode name", arrEpisodes[k].name, "it's a match");
                urlLink.innerHTML = arrEpisodes[k].name;
                break;
              };
            };

            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < episodeArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            episodeList += episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1);
            if (j < episodeArray.length - 1) {
              episodeList += ",";
            };
        
            // episodeP.appendChild(urlLink);
            // if (j < episodeArray.length - 1) {
            //   episodeP.innerHTML += ", ";
            // };
          };

          episodeLink.href = episodesURL + episodeList;
          episodeLink.alt = episodesURL + episodeList;
          episodeLink.innerHTML = "All Episode(s)"; // episodesURL + episodeList;
          // episodeLink.target = "_blank";
          if (episodeArray.length > 1) {
            episodeLink.addEventListener('click', getMultipleEpisodes);
          } else {
            episodeLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          nameP.appendChild(nameLink);
          cardBodyDiv.appendChild(genderP);
          genderP.appendChild(genderLink);
          cardBodyDiv.appendChild(speciesP);
          speciesP.appendChild(speciesLink);
          cardBodyDiv.appendChild(statusP);
          statusP.appendChild(statusLink);

          if (results[i].type != "") {
            cardBodyDiv.appendChild(typeP);
            typeP.appendChild(typeLink);
          };

          cardBodyDiv.appendChild(locationP);
          cardBodyDiv.appendChild(originP);

          cardBodyDiv.appendChild(episodeP);
          if (episodeArray.length > 0) {
            episodeP.appendChild(episodeLink);
          };

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

    // Search results do have pagination on them but there is an error in the pagination code
    // console.log(searchType);
    // console.log(searchString);
    // if (searchString !== "") {
    //   resultsContainerDiv.removeChild(moreRowDiv)
    // };

    resultsDiv.appendChild(resultsContainerDiv);

    // View lookup arrays
    // console.log(arrCharacters);
    // console.log(arrSearchSpecies);
    // console.log(arrSearchCharacterTypes);

  };

};

function displayLocations(jsonData){
  // console.log(jsonData);

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

          // Build lookup arrays
          // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
          // let arrIDs =  arrLocations.map((value)=>{ return value.id;});
          // if (arrIDs.indexOf(results[i].id) === -1) {
          //   arrLocations.push({id: results[i].id, name: results[i].name, url: results[i].url});
          // };

          // if (results[i].type !== "") {
          //   if (arrSearchLocationTypes.indexOf(results[i].type) === -1) {
          //     arrSearchLocationTypes.push(results[i].type);
          //   };
          // };
          // if (results[i].dimension !== "") {
          //   if (arrSearchDimensions.indexOf(results[i].dimension) === -1) {
          //     arrSearchDimensions.push(results[i].dimension);
          //   };
          // };

          let cardDiv = document.createElement("div");
          cardDiv.className = "card m-2 p-2";

          let cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          let nameP = document.createElement("p");
          // nameP.innerHTML = "<strong>" + results[i].name + "</strong>";
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let dimensionP = document.createElement("p");
          dimensionP.innerHTML = "Dimension: "; // + results[i].dimension;
          let dimensionLink = document.createElement("a");
          dimensionLink.href = results[i].dimension;
          dimensionLink.alt = results[i].dimension;
          dimensionLink.innerHTML = results[i].dimension;
          // dimensionLink.target = "_blank";
          dimensionLink.addEventListener('click', searchByDimension);

          let typeP = document.createElement("p");
          typeP.innerHTML = "Type: "; // + results[i].type;
          let typeLink = document.createElement("a");
          typeLink.href = results[i].type;
          typeLink.alt = results[i].type;
          typeLink.innerHTML = results[i].type;
          // typeLink.target = "_blank";
          typeLink.addEventListener('click', searchByLocationType);

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

            for (let k = 0; k < arrCharacters.length; k++) {
              if (residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1) == arrCharacters[k].id) {
                // console.log("character name", arrCharacters[k].name, "it's a match");
                urlLink.innerHTML = arrCharacters[k].name;
                break;
              };
            };

            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < residentsArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            residentList += residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1);
            if (j < residentsArray.length - 1) {
              residentList += ",";
            };

            // residentsP.appendChild(urlLink);
            // if (j < residentsArray.length - 1) {
            //   residentsP.innerHTML += ", ";
            // };
          };

          residentsLink.href = charactersURL + residentList;
          residentsLink.alt = charactersURL + residentList;
          residentsLink.innerHTML = "All Resident(s)"; // charactersURL + residentList;
          // residentsLink.target = "_blank";
          if (residentsArray.length > 1) {
            residentsLink.addEventListener('click', getMultipleCharacters);
          } else {
            residentsLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(dimensionP);
          dimensionP.appendChild(dimensionLink);
          cardBodyDiv.appendChild(typeP);
          typeP.appendChild(typeLink);

          cardBodyDiv.appendChild(residentsP);
          if (residentsArray.length > 0) {
            residentsP.appendChild(residentsLink);
          };

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

    // Search results do have pagination on them but there is an error in the pagination code
    // console.log(searchType);
    // console.log(searchString);
    // if (searchType !== "") {
    //   resultsContainerDiv.removeChild(moreRowDiv)
    // };

    resultsDiv.appendChild(resultsContainerDiv);

    // View lookup arrays
    // console.log(arrLocations);
    // console.log(arrSearchLocationTypes);
    // console.log(arrSearchDimensions);

  };

};

function displayEpisodes(jsonData){
  // console.log(jsonData);

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

      // Build lookup arrays
      // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
      // let arrIDs =  arrEpisodes.map((value)=>{ return value.id;});
      // if (arrIDs.indexOf(results[i].id) === -1) {
      //   arrEpisodes.push({id: results[i].id, name: results[i].name, url: results[i].url});
      // };


      let cardDiv = document.createElement("div");
      cardDiv.className = "card m-2 p-2";

      let cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "card-body";

      let nameP = document.createElement("p");
      // nameP.innerHTML = "<strong>" + results[i].name + "</strong>";
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

        for (let k = 0; k < arrCharacters.length; k++) {
          if (charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1) == arrCharacters[k].id) {
            // console.log("character name", arrCharacters[k].name, "it's a match");
            urlLink.innerHTML = arrCharacters[k].name;
            break;
          };
        };

        // urlLink.target = "_blank";
        urlLink.addEventListener('click', loadDetailsModal);

        if (j < charactersArray.length - 1) {
          urlLink.innerHTML += ", ";
        };

        charactersList += charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1);
        if (j < charactersArray.length - 1) {
          charactersList += ",";
        };

        // charactersP.appendChild(urlLink);
        // if (j < charactersArray.length - 1) {
        //   characters.innerHTML += ", ";
        // };
      };

      charactersLink.href = charactersURL + charactersList;
      charactersLink.alt = charactersURL + charactersList;
      charactersLink.innerHTML = "All Character(s)"; // charactersURL + charactersList;
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
      if (charactersArray.length > 0) {
        charactersP.appendChild(charactersLink);
      };

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

  // Search results do have pagination on them but there is an error in the pagination code
  // console.log(searchType);
  // console.log(searchString);
  // if (searchType !== "") {
  //   resultsContainerDiv.removeChild(moreRowDiv)
  // };
  
    resultsDiv.appendChild(resultsContainerDiv);

    // View lookup arrays
    // console.log(arrEpisodes);

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
  // console.log(URL);

 

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

  // console.log(e);
  let detailURL = e.srcElement.href;

  let detailCategory = detailURL;
  detailCategory = detailCategory.replace("http://", "https://");
  detailCategory = detailCategory.replace(baseURL, "");
  // detailCategory = detailCategory.replace("http://rickandmortyapi.com/api/", "");
  // detailCategory = detailCategory.substr(0,detailURL.lastIndexOf('/'));
  detailCategory = detailCategory.substr(0,detailCategory.indexOf('/'));
  // console.log("detailCategory", detailCategory);


  fetch(detailURL)
  .then(result => {
      // console.log(result);
      return result.json();
  })
  .then(jsonData => {
      // console.log(jsonData);

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
  // console.log(jsonData);

  while (detailsModalBody.firstChild) { // while the value is not null
    detailsModalBody.removeChild(detailsModalBody.firstChild);
  };

  let results = jsonData;
  // console.log(results);

          // Build lookup arrays
          // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
          // let arrIDs =  arrCharacters.map((value)=>{ return value.id;});
          // if (arrIDs.indexOf(results.id) === -1) {
          //   arrCharacters.push({id: results.id, name: results.name, url: results.url});
          // };
          // a.findIndex(t=>(t.place === v.place && t.name===v.name))===i) // https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
          // seen.hasOwnProperty(currentObject.name) // https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
          //if (!arrCharacters.hasOwnProperty(results[i].id)) { // How's this work with an object?
          // if statement isn't working correcly
          //  arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
          // };

          // https://www.geeksforgeeks.org/how-to-remove-duplicates-from-an-array-of-objects-using-javascript/
          // copiedarrCharacters = [...arrCharacters];
          // arrCharacters = copiedarrCharacters.filter(function(item, index){
          //   return copiedarrCharacters.indexOf(item) >= index;
          // });

          // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
          // let copiedarrCharacters = Array.from(new Set(id.map(a => a.id))).map(id => { return id.find(a => a.id === id) });
          // console.log(copiedarrCharacters);

  // if (results.species !== "") {
  //   if (arrSearchSpecies.indexOf(results.species) === -1) {
  //     arrSearchSpecies.push(results.species);
  //   };
  // };
  // if (results.type !== "") {
  //   if (arrSearchCharacterTypes.indexOf(results.type) === -1) {
  //     arrSearchCharacterTypes.push(results.type);
  //   };
  // };


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
  genderP.innerHTML = "Gender: "; // + results.gender;
  let genderLink = document.createElement("a");
  genderLink.href = results.gender;
  genderLink.alt = results.gender;
  genderLink.innerHTML = results.gender;
  // genderLink.target = "_blank";
  genderLink.addEventListener('click', searchByCharacterGender);

  let speciesP = document.createElement("p");
  speciesP.innerHTML = "Species: "; // + results.species;
  let speciesLink = document.createElement("a");
  speciesLink.href = results.species;
  speciesLink.alt = results.species;
  speciesLink.innerHTML = results.species;
  // speciesLink.target = "_blank";
  speciesLink.addEventListener('click', searchByCharacterSpecies);

  let statusP = document.createElement("p");
  statusP.innerHTML = "Status: "; // + results.status;
  let statusLink = document.createElement("a");
  statusLink.href = results.status;
  statusLink.alt = results.status;
  statusLink.innerHTML = results.status;
  // statusLink.target = "_blank";
  statusLink.addEventListener('click', searchByCharacterStatus);

  let typeP = document.createElement("p");
  typeP.innerHTML = "Type: "; // + results.type;
  let typeLink = document.createElement("a");
  typeLink.href = results.type;
  typeLink.alt = results.type;
  typeLink.innerHTML = results.type;
  // typeLink.target = "_blank";
  typeLink.addEventListener('click', searchByCharacterType);

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
    // Use lookup arrays
    // // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
    // // https://stackoverflow.com/questions/52460473/find-object-with-specific-value-in-array/52460509
    // // console.log("index of episode match", arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)), "index of item in array", episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1));
    // let indexOfEpisodeName = arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1));
    // console.log("indexOfEpisodeName", indexOfEpisodeName);
    // console.log("episodeName", arrEpisodes[indexOfEpisodeName].name);
    // // console.log("id from episode URL", episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1), "index of match", arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))], "name of match", arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))].name);
    // // if (arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)) == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)) {
    // if (arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))) {
    //   // console.log("id from episode link", episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1), "index of match", arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))].name);
    //   console.log("episode name", arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1)).name)
    //   // urlLink.innerHTML = arrEpisodes[arrEpisodes.findIndex(episode => episode.id == episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1))].name;
    // } else {
    //   urlLink.innerHTML = episodeArray[j];
    // };

    for (let k = 0; k < arrEpisodes.length; k++) {
      if (episodeArray[j].substr(episodeArray[j].lastIndexOf('/') + 1) == arrEpisodes[k].id) {
        // console.log("episode name", arrEpisodes[k].name, "it's a match");
        urlLink.innerHTML = arrEpisodes[k].name;
        break;
      };
    };

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
  episodeLink.innerHTML = "All Episode(s)"; // episodesURL + episodeList;
  // episodeLink.target = "_blank";
  if (episodeArray.length > 1) {
    episodeLink.addEventListener('click', getMultipleEpisodes);
  } else {
    episodeLink.addEventListener('click', loadDetailsModal);
  };


  detailsModalBody.appendChild(resultImg);
  // detailsModalBody.appendChild(nameLink);
  detailsModalBody.appendChild(genderP);
  genderP.appendChild(genderLink);
  detailsModalBody.appendChild(speciesP);
  speciesP.appendChild(speciesLink);
  detailsModalBody.appendChild(statusP);
  statusP.appendChild(statusLink);

  if (results.type != "") {
    detailsModalBody.appendChild(typeP);
    typeP.appendChild(typeLink);
  };

  detailsModalBody.appendChild(locationP);
  detailsModalBody.appendChild(originP);

  if (episodeArray.length > 0) {
    detailsModalBody.appendChild(episodeLink);
  };
  detailsModalBody.appendChild(episodeP);

  $('#detailsModal').modal("show");


  // View lookup arrays
  // console.log(arrCharacters);
  // console.log(arrSearchSpecies);
  // console.log(arrSearchCharacterTypes);

};

function displayLocationsModal(jsonData){
  // console.log(jsonData);

  while (detailsModalBody.firstChild) { // while the value is not null
    detailsModalBody.removeChild(detailsModalBody.firstChild);
  };

  let results = jsonData;
  // console.log(results);

  // Build lookup arrays
  // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
  // let arrIDs =  arrLocations.map((value)=>{ return value.id;});
  // if (arrIDs.indexOf(results.id) === -1) {
  //   arrLocations.push({id: results.id, name: results.name, url: results.url});
  // };
          
  // if (results.type !== "") {
  //   if (arrSearchLocationTypes.indexOf(results.type) === -1) {
  //     arrSearchLocationTypes.push(results.type);
  //   };
  // };
  // if (results.dimension !== "") {
  //   if (arrSearchDimensions.indexOf(results.dimension) === -1) {
  //     arrSearchDimensions.push(results.dimension);
  //   };
  // };

  detailsModalTitle.innerHTML = "<strong>" + results.name + "</strong>";

  let nameLink = document.createElement("a");
  nameLink.href = results.url;
  nameLink.alt = results.name;
  nameLink.innerHTML = results.name;
  // nameLink.target = "_blank";
  nameLink.addEventListener('click', loadDetailsModal);

  let dimensionP = document.createElement("p");
  dimensionP.innerHTML = "Dimension: "; // + results.dimension;
  let dimensionLink = document.createElement("a");
  dimensionLink.href = results.dimension;
  dimensionLink.alt = results.dimension;
  dimensionLink.innerHTML = results.dimension;
  // dimensionLink.target = "_blank";
  dimensionLink.addEventListener('click', searchByDimension);

  let typeP = document.createElement("p");
  typeP.innerHTML = "Type: "; // + results.type;
  let typeLink = document.createElement("a");
  typeLink.href = results.type;
  typeLink.alt = results.type;
  typeLink.innerHTML = results.type;
  // typeLink.target = "_blank";
  typeLink.addEventListener('click', searchByLocationType);

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

    for (let k = 0; k < arrCharacters.length; k++) {
      if (residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1) == arrCharacters[k].id) {
        // console.log("character name", arrCharacters[k].name, "it's a match");
        urlLink.innerHTML = arrCharacters[k].name;
        break;
      };
    };

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
  residentsLink.innerHTML = "All Resident(s)"; // charactersURL + residentList;
  // residentsLink.target = "_blank";
  if (residentsArray.length > 1) {
    residentsLink.addEventListener('click', getMultipleCharacters);
  } else {
    residentsLink.addEventListener('click', loadDetailsModal);
  };


  // detailsModalBody.appendChild(nameLink);
  detailsModalBody.appendChild(dimensionP);
  dimensionP.appendChild(dimensionLink);
  detailsModalBody.appendChild(typeP);
  typeP.appendChild(typeLink);

  if (residentsArray.length > 0) {
    detailsModalBody.appendChild(residentsLink);
  };
  detailsModalBody.appendChild(residentsP);

  $('#detailsModal').modal("show");


    // View lookup arrays
    // console.log(arrLocations);
    // console.log(arrSearchLocationTypes);
    // console.log(arrSearchDimensions);

};

function displayEpisodesModal(jsonData){
  // console.log(jsonData);

  while (detailsModalBody.firstChild) { // while the value is not null
    detailsModalBody.removeChild(detailsModalBody.firstChild);
  };

  let results = jsonData;
  // console.log(results);

  // Build lookup arrays
  // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
  // let arrIDs =  arrEpisodes.map((value)=>{ return value.id;});
  // if (arrIDs.indexOf(results.id) === -1) {
  //   arrEpisodes.push({id: results.id, name: results.name, url: results.url});
  // };


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

        for (let k = 0; k < arrCharacters.length; k++) {
          if (charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1) == arrCharacters[k].id) {
            // console.log("character name", arrCharacters[k].name, "it's a match");
            urlLink.innerHTML = arrCharacters[k].name;
            break;
          };
        };

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
      charactersLink.innerHTML = "All Character(s)"; // charactersURL + charactersList;
      // charactersLink.target = "_blank";
      if (charactersArray.length > 1) {
        charactersLink.addEventListener('click', getMultipleCharacters);
      } else {
        charactersLink.addEventListener('click', loadDetailsModal);
      };

      // detailsModalBody.appendChild(nameLink);
      detailsModalBody.appendChild(episodeP);
      detailsModalBody.appendChild(air_dateP);

      detailsModalBody.appendChild(charactersLink);
      detailsModalBody.appendChild(charactersP);

      $('#detailsModal').modal("show");

    // View lookup arrays
    // console.log(arrEpisodes);

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


  URL = e.srcElement.href; // text;
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
  // console.log(jsonData);

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

          // Build lookup arrays
          // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
          // let arrIDs =  arrCharacters.map((value)=>{ return value.id;});
          // if (arrIDs.indexOf(results[i].id) === -1) {
          //   arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
          // };
          // a.findIndex(t=>(t.place === v.place && t.name===v.name))===i) // https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
          // seen.hasOwnProperty(currentObject.name) // https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
          //if (!arrCharacters.hasOwnProperty(results[i].id)) { // How's this work with an object?
          // if statement isn't working correcly
          //  arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
          // };

          // https://www.geeksforgeeks.org/how-to-remove-duplicates-from-an-array-of-objects-using-javascript/
          // copiedarrCharacters = [...arrCharacters];
          // arrCharacters = copiedarrCharacters.filter(function(item, index){
          //   return copiedarrCharacters.indexOf(item) >= index;
          // });

          // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
          // let copiedarrCharacters = Array.from(new Set(id.map(a => a.id))).map(id => { return id.find(a => a.id === id) });
          // console.log(copiedarrCharacters);

          // if (results[i].species !== "") {
          //   if (arrSearchSpecies.indexOf(results[i].species) === -1) {
          //     arrSearchSpecies.push(results[i].species);
          //   };
          // };
          // if (results[i].type !== "") {
          //   if (arrSearchCharacterTypes.indexOf(results[i].type) === -1) {
          //     arrSearchCharacterTypes.push(results[i].type);
          //   };
          // };


          let cardDiv = document.createElement("div");
          cardDiv.className = "card m-2 p-2";

          let resultImg = document.createElement("img");
          resultImg.src = results[i].image;

          let cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          let nameP = document.createElement("p");
          // nameP.innerHTML = "<strong>" + results[i].name + "</strong>";
          let nameLink = document.createElement("a");
          nameLink.href = results[i].url;
          nameLink.alt = results[i].name;
          nameLink.innerHTML = results[i].name;
          // nameLink.target = "_blank";
          nameLink.addEventListener('click', loadDetailsModal);

          let genderP = document.createElement("p");
          genderP.innerHTML = "Gender: "; // + results[i].gender;
          let genderLink = document.createElement("a");
          genderLink.href = results[i].gender;
          genderLink.alt = results[i].gender;
          genderLink.innerHTML = results[i].gender;
          // genderLink.target = "_blank";
          genderLink.addEventListener('click', searchByCharacterGender);

          let speciesP = document.createElement("p");
          speciesP.innerHTML = "Species: "; // + results[i].species;
          let speciesLink = document.createElement("a");
          speciesLink.href = results[i].species;
          speciesLink.alt = results[i].species;
          speciesLink.innerHTML = results[i].species;
          // speciesLink.target = "_blank";
          speciesLink.addEventListener('click', searchByCharacterSpecies);

          let statusP = document.createElement("p");
          statusP.innerHTML = "Status: "; // + results[i].status;
          let statusLink = document.createElement("a");
          statusLink.href = results[i].status;
          statusLink.alt = results[i].status;
          statusLink.innerHTML = results[i].status;
          // statusLink.target = "_blank";
          statusLink.addEventListener('click', searchByCharacterStatus);

          let typeP = document.createElement("p");
          let typeLink = document.createElement("a");
          if (results[i].type != "") {
            typeP.innerHTML = "Type: "; // + results[i].type;
            typeLink.href = results[i].type;
            typeLink.alt = results[i].type;
            typeLink.innerHTML = results[i].type;
            // typeLink.target = "_blank";
            typeLink.addEventListener('click', searchByCharacterType);
          };

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
        
            // episodeP.appendChild(urlLink);
            // if (j < episodeArray.length - 1) {
            //   episodeP.innerHTML += ", ";
            // };
          };

          episodeLink.href = episodesURL + episodeList;
          episodeLink.alt = episodesURL + episodeList;
          episodeLink.innerHTML = "All Episode(s)"; // episodesURL + episodeList;
          // episodeLink.target = "_blank";
          if (episodeArray.length > 1) {
            episodeLink.addEventListener('click', getMultipleEpisodes);
          } else {
            episodeLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(genderP);
          genderP.appendChild(genderLink);
          cardBodyDiv.appendChild(speciesP);
          speciesP.appendChild(speciesLink);
          cardBodyDiv.appendChild(statusP);
          statusP.appendChild(statusLink);

          if (results[i].type != "") {
            cardBodyDiv.appendChild(typeP);
            typeP.appendChild(typeLink);
          };

          cardBodyDiv.appendChild(locationP);
          cardBodyDiv.appendChild(originP);

          cardBodyDiv.appendChild(episodeP);
          if (episodeArray.length > 0) {
            episodeP.appendChild(episodeLink);
          };

          cardDiv.appendChild(resultImg);
          cardDiv.appendChild(cardBodyDiv);
          resultsRowDiv.appendChild(cardDiv);
    };
  
    resultsContainerDiv.appendChild(resultsRowDiv);

    resultsDiv.appendChild(resultsContainerDiv);

    // View lookup arrays
    // console.log(arrCharacters);
    // console.log(arrSearchSpecies);
    // console.log(arrSearchCharacterTypes);

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


  URL = e.srcElement.href; // text;
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

  // Build lookup arrays
  // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
  // let arrIDs =  arrLocations.map((value)=>{ return value.id;});
  // if (arrIDs.indexOf(results[i].id) === -1) {
  //   arrLocations.push({id: results[i].id, name: results[i].name, url: results[i].url});
  // };

  // if (results[i].type !== "") {
  //   if (arrSearchLocationTypes.indexOf(results[i].type) === -1) {
  //     arrSearchLocationTypes.push(results[i].type);
  //   };
  // };
  // if (results[i].dimension !== "") {
  //   if (arrSearchDimensions.indexOf(results[i].dimension) === -1) {
  //     arrSearchDimensions.push(results[i].dimension);
  //   };
  // };

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
          cardDiv.className = "card m-2 p-2";

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
          dimensionP.innerHTML = "Dimension: "; // + results[i].dimension;
          let dimensionLink = document.createElement("a");
          dimensionLink.href = results[i].dimension;
          dimensionLink.alt = results[i].dimension;
          dimensionLink.innerHTML = results[i].dimension;
          // dimensionLink.target = "_blank";
          dimensionLink.addEventListener('click', searchByDimension);

          let typeP = document.createElement("p");
          typeP.innerHTML = "Type: "; // + results[i].type;
          let typeLink = document.createElement("a");
          typeLink.href = results[i].type;
          typeLink.alt = results[i].type;
          typeLink.innerHTML = results[i].type;
          // typeLink.target = "_blank";
          typeLink.addEventListener('click', searchByLocationsType);


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

            for (let k = 0; k < arrCharacters.length; k++) {
              if (residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1) == arrCharacters[k].id) {
                // console.log("character name", arrCharacters[k].name, "it's a match");
                urlLink.innerHTML = arrCharacters[k].name;
                break;
              };
            };
            
            // urlLink.target = "_blank";
            urlLink.addEventListener('click', loadDetailsModal);

            if (j < residentsArray.length - 1) {
              urlLink.innerHTML += ", ";
            };

            residentList += residentsArray[j].substr(residentsArray[j].lastIndexOf('/') + 1);
            if (j < residentsArray.length - 1) {
              residentList += ",";
            };

            // residentsP.appendChild(urlLink);
            // if (j < residentsArray.length - 1) {
            //   residentsP.innerHTML += ", ";
            // };
          };

          residentsLink.href = charactersURL + residentList;
          residentsLink.alt = charactersURL + residentList;
          residentsLink.innerHTML = "All Resident(s)"; // charactersURL + residentList;
          // residentsLink.target = "_blank";
          if (residentsArray.length > 1) {
            residentsLink.addEventListener('click', getMultipleCharacters);
          } else {
            residentsLink.addEventListener('click', loadDetailsModal);
          };


          cardBodyDiv.appendChild(nameP);
          cardBodyDiv.appendChild(nameLink);
          cardBodyDiv.appendChild(dimensionP);
          dimensionP.appendChild(dimensionLink);
          cardBodyDiv.appendChild(typeP);
          typeP.appendChild(typeLink);

          cardBodyDiv.appendChild(residentsP);
          if (residentsArray.length > 0) {
            residentsP.appendChild(residentsLink);
          };

          cardDiv.appendChild(cardBodyDiv);
          resultsRowDiv.appendChild(cardDiv);
    };

    resultsContainerDiv.appendChild(resultsRowDiv);

    resultsDiv.appendChild(resultsContainerDiv);

    // View lookup arrays
    console.log(arrLocations);
    console.log(arrSearchLocationTypes);
    console.log(arrSearchDimensions);

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


  URL = e.srcElement.href; // text;
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
  // console.log(jsonData);

  let results = jsonData;
  // console.log(results);

  // Build lookup arrays
  // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
  // let arrIDs =  arrEpisodes.map((value)=>{ return value.id;});
  // if (arrIDs.indexOf(results.id) === -1) {
  //   arrEpisodes.push({id: results.id, name: results.name, url: results.url});
  // };


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
      cardDiv.className = "card m-2 p-2";

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

        for (let k = 0; k < arrCharacters.length; k++) {
          if (charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1) == arrCharacters[k].id) {
            // console.log("character name", arrCharacters[k].name, "it's a match");
            urlLink.innerHTML = arrCharacters[k].name;
            break;
          };
        };
        
        // urlLink.target = "_blank";
        urlLink.addEventListener('click', loadDetailsModal);

        if (j < charactersArray.length - 1) {
          urlLink.innerHTML += ", ";
        };

        charactersList += charactersArray[j].substr(charactersArray[j].lastIndexOf('/') + 1);
        if (j < charactersArray.length - 1) {
          charactersList += ",";
        };

        // charactersP.appendChild(urlLink);
        // if (j < charactersArray.length - 1) {
        //   characters.innerHTML += ", ";
        // };
      };

      charactersLink.href = charactersURL + charactersList;
      charactersLink.alt = charactersURL + charactersList;
      charactersLink.innerHTML = "All Character(s)"; // charactersURL + charactersList;
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
      if (charactersArray.length > 0) {
        charactersP.appendChild(charactersLink);
      };
      
      cardDiv.appendChild(cardBodyDiv);
      resultsRowDiv.appendChild(cardDiv);
};

    resultsContainerDiv.appendChild(resultsRowDiv);

    resultsDiv.appendChild(resultsContainerDiv);

    // View lookup arrays
    // console.log(arrEpisodes);
    
  };

};

function searchByCharacterStatus(e){
  e.preventDefault();
  // console.log(e);

  txtSearchCharacterName.value = "";
  ddSearchStatus.value = e.srcElement.text.toLowerCase();
  txtSearchSpecies.value = "";
  txtSearchCharacterType.value = "";
  ddSearchGender.value = "";


  $('#detailsModal').modal("hide")

  searchCharacters(e);

};

function searchByCharacterSpecies(e){
  e.preventDefault();
  // console.log(e);

  txtSearchCharacterName.value = "";
  ddSearchStatus.value = "";
  txtSearchSpecies.value = e.srcElement.text.replace(',', '');
  txtSearchCharacterType.value = "";
  ddSearchGender.value = "";


  $('#detailsModal').modal("hide")

  searchCharacters(e);

};

function searchByCharacterType(e){
  e.preventDefault();
  // console.log(e);

  txtSearchCharacterName.value = "";
  ddSearchStatus.value = "";
  txtSearchSpecies.value = "";
  txtSearchCharacterType.value = e.srcElement.text.replace(',', '');
  ddSearchGender.value = "";


  $('#detailsModal').modal("hide")

  searchCharacters(e);

};

function searchByCharacterGender(e){
  e.preventDefault();
  // console.log(e);

  txtSearchCharacterName.value = "";
  ddSearchStatus.value = "";
  txtSearchSpecies.value = "";
  txtSearchCharacterType.value = "";
  ddSearchGender.value = e.srcElement.text.toLowerCase();


  $('#detailsModal').modal("hide")

  searchCharacters(e);

};

function searchByLocationType(e){
  e.preventDefault();
  // console.log(e);

  txtSearchLocationName.value = "";
  txtSearchLocationType.value = e.srcElement.text.replace(',', '');
  txtDimension.value = "";


  $('#detailsModal').modal("hide")

  searchLocations(e);

};


function searchByDimension(e){
  e.preventDefault();
  // console.log(e);

  txtSearchLocationName.value = "";
  txtSearchLocationType.value = "";
  txtDimension.value = e.srcElement.text.replace(',', '');


  $('#detailsModal').modal("hide")

  searchLocations(e);

};


function loadAllLookupArrays(){

// Create characters URL of all possible character IDs?
// Fetch that and read results
// current total number of characters + to get the correct index value(?)
// used a number higher than the current total number of characters and it worked
let totalNumberOfCharacters = 700 + 1;
let charactersIDList = "";

for (let i = 1; i < totalNumberOfCharacters; i++) {
  charactersIDList += i;
    if (i < totalNumberOfCharacters - 1) {
      charactersIDList += ",";
    };
};

// console.log("charactersIDList", charactersIDList);
// console.log("charactersURL", charactersURL + charactersIDList);


fetch(charactersURL + charactersIDList)
.then(result => {
    // console.log(result);
    return result.json();
})
.then(jsonData => {
  // console.log(jsonData);
  let results = jsonData;
  
  // Build lookup arrays
  // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
for (let i = 0; i < results.length; i++) {
  let arrIDs =  arrCharacters.map((value)=>{ return value.id;});
  if (arrIDs.indexOf(results[i].id) === -1) {
    arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
  };
  // a.findIndex(t=>(t.place === v.place && t.name===v.name))===i) // https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
  // seen.hasOwnProperty(currentObject.name) // https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
  //if (!arrCharacters.hasOwnProperty(results[i].id)) { // How's this work with an object?
  // if statement isn't working correcly
  //  arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
  // };

  // https://www.geeksforgeeks.org/how-to-remove-duplicates-from-an-array-of-objects-using-javascript/
  // copiedarrCharacters = [...arrCharacters];
  // arrCharacters = copiedarrCharacters.filter(function(item, index){
  //   return copiedarrCharacters.indexOf(item) >= index;
  // });

  // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
  // let copiedarrCharacters = Array.from(new Set(id.map(a => a.id))).map(id => { return id.find(a => a.id === id) });
  // console.log(copiedarrCharacters);

  if (results[i].species !== "") {
    if (arrSearchSpecies.indexOf(results[i].species) === -1) {
      arrSearchSpecies.push(results[i].species);
    };
  };
  if (results[i].type !== "") {
    if (arrSearchCharacterTypes.indexOf(results[i].type) === -1) {
      arrSearchCharacterTypes.push(results[i].type);
    };
  };
};

// View lookup arrays
// console.log(arrCharacters);
// console.log(arrSearchSpecies);
// console.log(arrSearchCharacterTypes);

  // Remove old items from drop down boxes
  while (ddSearchSpecies.firstChild) { // while the value is not null
    ddSearchSpecies.removeChild(ddSearchSpecies.firstChild);
  };
  // Add first element back to drop down box
  let optSearchSpecies = document.createElement("option");
  optSearchSpecies.value = "";
  optSearchSpecies.text = "Select Species";
  ddSearchSpecies.add(optSearchSpecies);
  // Sort the array
  arrSearchSpecies.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    };
  });
  // Add items to drop down boxes
  for (let i = 0; i < arrSearchSpecies.length; i++) {
    // console.log(arrSearchSpecies[i]);
    let opt = document.createElement("option");
    opt.value = arrSearchSpecies[i];
    opt.text = arrSearchSpecies[i];
    ddSearchSpecies.add(opt);
  };

  // Remove old items from drop down boxes
  while (ddSearchCharacterType.firstChild) { // while the value is not null
    ddSearchCharacterType.removeChild(ddSearchCharacterType.firstChild);
  };
  // Add first element back to drop down box
  let optSearchCharacterType = document.createElement("option");
  optSearchCharacterType.value = "";
  optSearchCharacterType.text = "Select Type";
  ddSearchCharacterType.add(optSearchCharacterType);
  // Sort the array
  arrSearchCharacterTypes.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    };
  });
  // Add items to drop down boxes
  for (let i = 0; i < arrSearchCharacterTypes.length; i++) {
    // console.log(arrSearchSpecies[i]);
    let opt = document.createElement("option");
    opt.value = arrSearchCharacterTypes[i];
    opt.text = arrSearchCharacterTypes[i];
    ddSearchCharacterType.add(opt);
  };

})
.catch(err => {
    console.log(err)
    errorHeader.innerText = err;
    errorHeader.style.display = 'flex';
});




// Create locations URL of all possible location IDs?
// Fetch that and read results
// current total number of locations + to get the correct index value(?)
// used a number higher than the current total number of locations and it worked
let totalNumberOfLocations = 50 + 1;
let locationIDList = "";

for (let i = 1; i < totalNumberOfLocations; i++) {
  locationIDList += i;
    if (i < totalNumberOfLocations - 1) {
      locationIDList += ",";
    };
};

// console.log("locationIDList", locationIDList);
// console.log("locationsURL", locationsURL + locationIDList);


fetch(locationsURL + locationIDList)
.then(result => {
    // console.log(result);
    return result.json();
})
.then(jsonData => {
  // console.log(jsonData);
  let results = jsonData;

// Build lookup arrays
for (let i = 0; i < results.length; i++) {
  let arrIDs =  arrLocations.map((value)=>{ return value.id;});
  if (arrIDs.indexOf(results[i].id) === -1) {
    arrLocations.push({id: results[i].id, name: results[i].name, url: results[i].url});
  };

  if (results[i].type !== "") {
    if (arrSearchLocationTypes.indexOf(results[i].type) === -1) {
      arrSearchLocationTypes.push(results[i].type);
    };
  };
  if (results[i].dimension !== "") {
    if (arrSearchDimensions.indexOf(results[i].dimension) === -1) {
      arrSearchDimensions.push(results[i].dimension);
    };
  };
};

  // Remove old items from drop down boxes
  while (ddSearchLocationType.firstChild) { // while the value is not null
    ddSearchLocationType.removeChild(ddSearchLocationType.firstChild);
  };
  // Add first element back to drop down box
  let optSearchLocationType = document.createElement("option");
  optSearchLocationType.value = "";
  optSearchLocationType.text = "Select Type";
  ddSearchLocationType.add(optSearchLocationType);
  // Sort the array
  arrSearchLocationTypes.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    };
  });
  // Add items to drop down boxes
  for (let i = 0; i < arrSearchLocationTypes.length; i++) {
    // console.log(arrSearchSpecies[i]);
    let opt = document.createElement("option");
    opt.value = arrSearchLocationTypes[i];
    opt.text = arrSearchLocationTypes[i];
    ddSearchLocationType.add(opt);
  };

  // Remove old items from drop down boxes
  while (ddSearchDimension.firstChild) { // while the value is not null
    ddSearchDimension.removeChild(ddSearchDimension.firstChild);
  };
  // Add first element back to drop down box
  let optSearchDimension = document.createElement("option");
  optSearchDimension.value = "";
  optSearchDimension.text = "Select Dimension";
  ddSearchDimension.add(optSearchDimension);
  // Sort the array
  arrSearchDimensions.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    };
  });
  // Add items to drop down boxes
  for (let i = 0; i < arrSearchDimensions.length; i++) {
    // console.log(arrSearchSpecies[i]);
    let opt = document.createElement("option");
    opt.value = arrSearchDimensions[i];
    opt.text = arrSearchDimensions[i];
    ddSearchDimension.add(opt);
  };

// View lookup arrays
// console.log(arrLocations);
// console.log(arrSearchLocationTypes);
// console.log(arrSearchDimensions);

})
.catch(err => {
    console.log(err)
    errorHeader.innerText = err;
    errorHeader.style.display = 'flex';
});




// Create episode URL of all possible episode IDs?
// Fetch that and read results
// current total number of episodes + to get the correct index value(?)
// used a number higher than the current total number of episodes and it worked
let totalNumberOfEpisodes = 50 + 1;
let episodeIDList = "";

for (let i = 1; i < totalNumberOfEpisodes; i++) {
  episodeIDList += i;
    if (i < totalNumberOfEpisodes - 1) {
      episodeIDList += ",";
    };
};

// console.log("episodeIDList", episodeIDList);
// console.log("episodesURL", episodesURL + episodeIDList);


fetch(episodesURL + episodeIDList)
.then(result => {
    // console.log(result);
    return result.json();
})
.then(jsonData => {
  // console.log(jsonData);
  let results = jsonData;

// Build lookup arrays
for (let i = 0; i < results.length; i++) {
  let arrIDs =  arrEpisodes.map((value)=>{ return value.id;});
  if (arrIDs.indexOf(results[i].id) === -1) {
    arrEpisodes.push({id: results[i].id, name: results[i].name, url: results[i].url});
  };
};

// View lookup arrays
// console.log(arrEpisodes);

})
.catch(err => {
    console.log(err)
    errorHeader.innerText = err;
    errorHeader.style.display = 'flex';
});
















// Fetch all episodes
// Fetch all characters search from each episode
// In results set, load the arrays

// Fetch all locations?
// In results set, load the arrays?

// let episodeID = 1;
// lookupURL = episodesURL + episodeID;

// fetch(lookupURL)
// .then(result => {
//     console.log(result);
//     return result.json();
// })
// .then(jsonData => {
//   console.log(jsonData);
//   let results = jsonData;

//   let charactersArray = results.characters;
//   let charactersList = "";

//   for (let i = 0; i < charactersArray.length; i++) {
//     charactersList += charactersArray[i].substr(charactersArray[i].lastIndexOf('/') + 1);
//     if (i < charactersArray.length - 1) {
//       charactersList += ",";
//     };
//   };

//   console.log("charactersList", charactersList);
//   console.log("charactersURL", charactersURL + charactersList);

// })
// .catch(err => {
//     console.log(err)
//     errorHeader.innerText = err;
//     errorHeader.style.display = 'flex';
// });


};