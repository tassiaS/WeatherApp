import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


var APIkey = "209af21293302d720b25fdc236104d2f";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
    getWeather = async (e) => {
      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      var getURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=" + APIkey;
      const api_call = await fetch(getURL);
      const data = await api_call.json();
      
      if (city && country) {
        this.setState({
          temperature : data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature : undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the value."
        });
      }
    }
  
    render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

//Returns jsx -> java script code running in the background
// <div>Hello!</div> //this is jsx and babel converts this into js that the browser can understand