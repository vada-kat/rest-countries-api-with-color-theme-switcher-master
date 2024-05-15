fetch("./data.json")
  .then((res) => res.json())
  .then((allcountries) => {
    renderCountries(allcountries);
  })
  .catch((err) => {
    console.log(err);
  });

const allcountriesDiv = document.getElementById("all-countries");
function renderCountries(countries) {
  allcountriesDiv.innerHTML = "";
  countries.forEach((country) => {
    let countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
              <img src=${country.flags.png} alt ${country.name + "flag"}>
              <h2>Name: ${country.name}</h2>
              <P>population: ${country.population} </P>
              `;
    allcountriesDiv.append(countryDiv);
  });
}

document.getElementById("region").addEventListener("change", (e) => {
  let selectedRegion = e.target.value;
  fetch("./data.json")
    .then((res) => res.json())
    .then((allcountries) => {
      if (selectedRegion.length == 0) {
        //if no region is selected
        renderCountries(allcountries);
      } else {
        let filteredCountries = allcountries.filter(
          (country) => selectedRegion === country.region
        );
        renderCountries(filteredCountries);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});



//error handling in assynchronus js-- .then .catch throw,
//error handling opt2 - try {} catch {}


document.getElementById("search").addEventListener("submit", (e)=>{
  //prevent efault behavior of submitting a form(sendind http get/post request)
  e.preventDefault()
  // fetch data for a serached country
  let searchTerm = document.getElementById("").value;
  console.log(searchTerm)
  //fetch data for that country
  fetch(".data.json")
     .then(res=>res.json())
     .then(allcountries ==> {
       let searchResult = allcountriesDiv.find(country=>country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
      if(searchResult){
        document.getElementById("single-country").innerHTML=`
        <img src="${searchResult.flags.png}" alt="country flag" style="width: 300px">
        <h2>${searchResult.name}</h2>
        <p>Region : ${searchResult.region}</P>
        `
      }else{
        document.getElementById("single-country").innerHTML ="Country matching your search Not Found!"
      }
     }
     )
})