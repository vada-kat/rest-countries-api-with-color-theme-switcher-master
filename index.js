fetch("./data.json")
      .then(res=>res.json)
      .then(allcountries=>{
        rendercountries(allcountries)
      })
      .catch(err=>{
        console.log(err)
      })

      const allcountriesDiv =document.getElementById("all-countries")
      function rendercountries(countries){
        allcountriesDiv.innerHTML =""
        countries.forEach(country=>{
            let countryDiv =document.createElement("div")
            countryDiv.innerHTML = `
              <img src=${} alt ${}>
              <h2>Name: ${country.name}</h2>
              <P>population: ${country.population} </P>
              `;
        allcountriesDiv.append(countryDiv);      

        });       
      }