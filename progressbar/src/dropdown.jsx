import React from 'react'

function dropdown() {
    const [selectedCountry, setSelectedCountry] = useState("0");
    const countries = [
      {
        name: "India",
        value: "IN",
        cities: ["Delhi", "Mumbai"],
      },
      {
        name: "USA",
        value: "US",
        cities: ["London", "New York"],
      },
      {
        name: "China",
        value: "CN",
        cities: ["Beijing", "Shanghai"],
      },
      
    ];
  
    function countryChange(e) {
      // console.log(e.target.selectedIndex);
      setSelectedCountry(e.target.selectedIndex);
      // console.log(selectedCountry);
    }
  
    return (
      <>
        <select onChange={(e) => countryChange(e)}>
          {countries?.map((country, index) => {
            return (
              <option key={index} value={index}>
                {country.name}
              </option>
            );
          })}
        </select>
        <hr />
        <select>
          {countries[selectedCountry].cities?.map((cities, index) => {
            return (
              <option key={index} value={cities}>
                {cities}
              </option>
            );
          })}
        </select>
      </>
    );
  }
  
  

export default dropdown
