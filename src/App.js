import React from "react";

import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "96887ada02ea61ddbe9bb0164f915a98";

class App extends React.Component{

  state = {
      country : undefined,
      temperature : undefined,
      city : undefined,
      humidity : undefined,
      description: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    
/*
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${API_KEY}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
*/

   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${API_KEY}`);
   console.log(api_call);

   const data = await api_call.json();
   console.log(data);

  }

  render(){
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};


export default App;