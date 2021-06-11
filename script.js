// Write your JavaScript code here!

window.addEventListener("load", function () {
   function randomIndex(array) {
      let index = Math.floor(Math.random() * array.length);
      return array[index];
   }

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let numpilotName = Number(pilotNameInput.value);
      let numcopilotName = Number(coPilotName.value);
      let numfuelLevel = Number(fuelLevel.value);
      let numcargoMass = Number(cargoMass.value);
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");





      if (pilotNameInput.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("all fields are rquired");
      } else if (!Number.isNaN(numpilotName) || !Number.isNaN(numcopilotName) || Number.isNaN(numfuelLevel) || Number.isNaN(numcargoMass)) {
         alert("Make sure to enter valid information for each field!");
      } else {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;
         if (fuelLevel.value < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
         }
         if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for Launch";
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
         }
         if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         } else {
            launchStatus.innerHTML = "Shuttle is ready for Launch";
            launchStatus.style.color = "green";
         }

         faultyItems.style.visibility = "visible"
      }





      event.preventDefault();
   })


   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = "";
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let planet = randomIndex(json);
         //let planet = 0; // to set random number*bonus mission*
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
         <li>Name: ${planet.name}</li>
         <li>Diameter: ${planet.diameter}</li>
         <li>Star: ${planet.star}</li>
         <li>Distance from Earth: ${planet.distance}</li>
         <li>Number of Moons: ${planet.moons}</li>
         </ol>
         <img src="${planet.image}">`

      })
   })

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
