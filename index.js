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
